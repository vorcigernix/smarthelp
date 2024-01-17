import { Head } from "$fresh/runtime.ts";
import SearchDialog from "@/islands/SearchDialog.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo: Smartsupp Smart Help </title>
        <meta
          name="description"
          content="Sample AI application allowing you to ask about Smartsupp Help articles."
        />
      </Head>
      <div class="p-4 mx-auto max-w-screen-md font-mono">
        <h1 class="text-3xl mb-4">Smartsupp Help</h1>
        <SearchDialog />
      </div>
    </>
  );
}
