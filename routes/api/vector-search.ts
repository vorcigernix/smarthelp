import "xhr";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3/";
import { codeBlock, oneLine } from "https://esm.sh/common-tags@1.8.2/";
import GPT3Tokenizer from "https://esm.sh/gpt3-tokenizer@1.1.5/";
import { OpenAI } from "openai";
import { ensureGetEnv } from "@/utils/env.ts";
import { ApplicationError, UserError } from "@/utils/errors.ts";

const OPENAI_API_KEY = ensureGetEnv("OPENAI_KEY");
const SUPABASE_URL = ensureGetEnv("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = ensureGetEnv("SUPABASE_SERVICE_ROLE_KEY");

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
//const openAiConfiguration = new Configuration({ apiKey: OPENAI_KEY });
//const openai = new OpenAIApi(openAiConfiguration);

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

export async function handler(req: Request): Promise<Response> {
  try {
    // Handle CORS
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    const query = new URL(req.url).searchParams.get("query");

    if (!query) {
      throw new UserError("Missing query in request data");
    }

    const sanitizedQuery = query.trim();

    // Moderate the content to comply with OpenAI T&C
    const moderationResponse = await openai.moderations.create({
      input: sanitizedQuery,
    });
    // const moderationResponse = await openai.createModeration({
    //   input: sanitizedQuery,
    // });

    const [results] = moderationResponse.results;

    if (results.flagged) {
      throw new UserError("Flagged content", {
        flagged: true,
        categories: results.categories,
      });
    }

    // const embeddingResponse = await openai.createEmbedding({
    //   model: "text-embedding-ada-002",
    //   input: sanitizedQuery.replaceAll("\n", " "),
    // });
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: sanitizedQuery.replaceAll("\n", " "),
      encoding_format: "float",
    });

    if (!embeddingResponse) {
      throw new ApplicationError(
        "Failed to create embedding for question",
        embeddingResponse,
      );
    }

    const [{ embedding }] = embeddingResponse.data;

    const { error: matchError, data: pageSections } = await supabaseClient.rpc(
      "match_page_sections",
      {
        embedding,
        match_threshold: 0.78,
        match_count: 10,
        min_content_length: 50,
      },
    );

    if (matchError) {
      throw new ApplicationError("Failed to match page sections", matchError);
    }

    const tokenizer = new GPT3Tokenizer({ type: "gpt3" });
    let tokenCount = 0;
    let contextText = "";

    for (const pageSection of pageSections) {
      const content = pageSection.content;
      const encoded = tokenizer.encode(content);
      tokenCount += encoded.text.length;

      if (tokenCount >= 1500) {
        break;
      }

      contextText += `${content.trim()}\n---\n`;
    }

    const stream = await openai.chat.completions.create({
      messages: [
        {
          "role": "system",
          "content": `
        You are a very enthusiastic Smartsupp representative who loves
        to help people! Given the following sections from the Smartsupp
        documentation, answer the question using only that information,
        outputted in markdown format. If you are unsure and the answer
        is not explicitly written in the documentation, say
        "Sorry, I don't know how to help with that."
      `,
        },
        {
          "role": "user",
          "content":
            "How to connect Smartsupp live chat & chatbots with your Shopify store?",
        },
        {
          "role": "assistant",
          "content":
            `Log in to your Shopify store and open the "Online Store"\n Select "Themes" > "Customize"\n Choose > "Theme settings"\n Click on the "App embeds" and enable Smartsupp widget on your website.`,
        },
        { "role": "user", "content": sanitizedQuery },
      ],
      model: "gpt-4-1106-preview",
      stream: true,
    });

    //log chunked response to console
    for await (const chunk of stream) {
      console.log(chunk.choices[0].delta.content?.trim());
    }

    return new Response(stream.toReadableStream(), {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
      },
    });
  } catch (err: unknown) {
    if (err instanceof UserError) {
      return Response.json({
        error: err.message,
        data: err.data,
      }, {
        status: 400,
        headers: corsHeaders,
      });
    } else if (err instanceof ApplicationError) {
      // Print out application errors with their additional data
      console.error(`${err.message}: ${JSON.stringify(err.data)}`);
    } else {
      // Print out unexpected errors as is to help with debugging
      console.error(err);
    }

    // TODO: include more response info in debug environments
    return Response.json({
      error: "There was an error processing your request",
    }, {
      status: 500,
      headers: corsHeaders,
    });
  }
}
