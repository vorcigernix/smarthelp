# Smartsupp — Google Analytics connection
## This feature is only available in STANDARD and PRO packages.    We recommend using our new chat box (released in 2023). If you have not switched to this ne
This feature is only available in STANDARD and PRO packages. 
We recommend using our new chat box (released in 2023). If you have not switched to this new chat box yet, contact our Customer Support from a chat in your Dashboard.
Note: Only the new chat box version supports Google Analytics 4.
Measure impact
You can measure the impact Smartsupp has on your conversion rate and visitor behavior in Google Analytics. You can set up if you'd like to send the data to your Google Analytics or not in your account.
Open the section Settings > Account Settings > Google Analytics > Click Connect button
When you activate the Google analytics integration you will see 2 options.
Auto-detect Property ID
It'll automatically detect all Measurement IDs on the webpage and use it to send Smartsupp events to Google Analytics. If you have
When you only use 1 Google Analytics account, select this option. For most people this is the best option.
Manually define ID
In case you use multiple Measurement IDs, select which Measurement ID you'd like to use for tracking Smartsupp events. This option won't work if you've previously activated the integration with Google Analytics via API following this tutorial.
If you have more advanced use-case and are using multiple Google analytics accounts on your website, you can chose to which Google analytics account we should send events from Smartsupp.
Select which one is best for your and click save. From now on, Smartsupp will be sending events to your Google Analytics 4. There is one more step to get the full picture of how Smartsupp is impacting your goals.
Basic info
Smartsupp currently supports new GA4 (Google Analytics version 4) and old UA (universal Analytics). Depends on chat box version.
You can combine more GA tracking codes > Smartsupp automatically sends GA analytics events to all GA tracking codes on the website > use API for specific GA tracker (more info below).
Chat box (our newest version) has a new Event Category - Smartsupp_v3 
Smartsupp splits Event Actions for Chatbot, Auto messages, and Triggers - every automation has its own Action Label.
Smartsupp also renamed some events (more info below).
GA events are sent when the chat box is closed or also opened.
GA events are sent only once if the visitor has opened the same website in more browser tabs.
Google analytics version 4
GA4 upgrade tutorial: [GA4] Make the switch to Google Analytics 4.
Event Actions
In Google Analytics, event tracking is hierarchically made up of 4 elements: Category, Action, Label, and Value. For our needs, we use only the first 3.
Smartsupp sends data to Google Analytics as events. In total, we send 17 event actions that help you monitor the behavior of chatting users. You can find all these event actions in the Event Category = Smartsupp_v3.
With the new Smartsupp chat box (released in 2023) we updated and added more GA Events. They are all being sent in English only.
Event actions and labels (description)
Note: For custom GA implementation (GTM) use our API
Category
Action
Label
Explanation
Smartsupp_v3
Chatbot_sent
Chatbot name
chatbot sent to the chat box
Chatbot_interaction
Chatbot name
the first interaction with a chatbot
Chatbot_button_interaction
Button reply
concrete button reply interaction in chatbot
Chatbot_viewed
Chatbot name
open the chat box or popup button click
Chatbot_visitor_reaction
Chatbot name
visitor reaction to concrete chatbot
Auto_message_sent
Auto message name
auto message sent to the chat box
Auto_message_viewed
Auto message name
open the chat box or popup button click
Auto_message_visitor_reaction
Auto message name
visitor´s reaction to the concrete auto message
Visitor_started_conversation
(not set)
visitor sends a message to chat (only without any automation in chat before)
Agent_served_conversation
Agent´s name
agent joins to conversation
Auth_form_filled
(not set)
filled out and sent a contact form
Offline_message_sent
(not set)
a visitor sent a message to an offline chat box
Feedback_sent
Good/Normal/Bad
select smile in the feedback
Feedback_text_sent
Concrete text
fill text and sent feedback
Trigger_message_sent
Trigger name
old trigger sent to the chat box
Trigger_message_viewed
Trigger name
open the chat box or popup button click
Trigger_visitor_reaction
Trigger name
visitor´s reaction to a concrete trigger
What do those events mean?
Chatbot_sent
the event is sent when the visitor receives a chatbot in the chat box
one for each triggered chatbot
Chatbot_interaction
the event is sent when a visitor responds to a chatbot
this is only the first interaction, up to once per session
Chatbot_button_interaction
the event is sent every time the chatbot button reply is clicked
possibly multiple times per session
Chatbot_viewed
the event is sent if the visitor opens the chat box or clicks on Let’s chat button in the chat box popup after the visitor receives a chatbot
Chatbot_visitor_reaction
the event is sent if the visitor replies with a chat message to the chatbot
in the case of multiple chatbots, a reaction event is sent to the concrete chatbot
Auto_message_sent
the event is sent when the visitor receives an auto message in the chat box
Auto_message_viewed
the event is sent if the visitor opens the chat box or clicks on Let’s chat button in the chat box popup after the visitor receives an auto message
Auto_message_visitor_reaction
the event is sent if the visitor replies with a chat message to the auto message
in case of multiple automation (chatbots, auto messages) reaction event is sent on the last one
Visitor_started_conversation
the event is sent if the visitor sends a chat message to the chat box, but the chat box is without any automation before (chatbot, auto message)
Agent_served_conversation
the event is sent when the agent joins to conversation
Auth_form_filled
the event is sent when the visitor fills out and sends the contact form
Offline_message_sent
the event is sent when the visitor sends a chat message to the offline chat box
Feedback_sent
the event is sent when the visitor selects emoji in the rating form
Feedback_text_sent
the event is sent when the visitor fills and sends text feedback in the rating form
Trigger_message_sent
the event is sent when the visitor receives a trigger in the chat box
Trigger_message_viewed
the event is sent if the visitor opens the chat box or clicks on Let’s chat button in the chat box popup after the visitor receives a trigger
Trigger_visitor_reaction
the event is sent if the visitor replies with a chat message to the trigger
Create a new segment
For GA UA: Now all you need to do is create a new segment to filter out data of chatting visitors. You can create a segment for any kind of Smartsupp event action. The most useful metric is the 'Conversation' event action.
Compare behavior
For GA UA: When you have the segment created you can see and compare the behavior of chatting visitors vs all visitors. In the example, you see there were 71 chatting visitors vs 3796 total visitors. With that, you can calculate 1.9 % of visitors are engaging in a conversation with you and more info.
Conversions
For GA UA: The most important thing you can measure is the impact of Smartsupp chat on conversions (goals). You can see the conversion rate of chatting visitors vs your overall conversion rate.
API
specifies concrete tracker ID for GA4 or UA: https://docs.smartsupp.com/chat-box/google-analytics/ 
Cookie consent
Follow the steps described here: https://www.smartsupp.com/help/cookie-consent/ 
Events for the older version of Smartsupp
For the older version of Smartsupp (old version of the chat box), a different version of events will be displayed:
Triggered message sent
Event is sent every time visitor gets auto message (trigger). Number shows how many people received auto message. If you want to know how many people replied to auto message (trigger) have a look at event: "Trigger started conversation".
- Event label = title of the triggered message in your dashboard
Trigger message viewed
When visitor reacts (opens chatbox) on triggered message.
- Event label = title of the triggered message in your dashboard
Conversation served
When a message is exchanged between visitor and an agent (or chatbot).
- Event label = agent's name
Auth form filled
When visitor fills the contact form.
- There is no Event label assigned
Offline message sent
When visitor sends an offline message.
- There is no Event label assigned
Feedback sent
When visitor fills and sends feedback form.
- Event label = rating level (1, 3, 5 = bad, normal, good)
Chatbot sent
The event is sent when the visitor receives a chatbot or an automated message in the chatbox
- Event label = name of the chatbot or the automated message user interacted with
Chatbot button interaction
The event is sent every time the chatbot button is clicked (possibly multiple times per session)
- Event label = name of the chatbot or the automated message user interacted with
Chatbot interaction
An event is sent when a visitor responds to a chatbot or an automated message (this is only the first interaction up to 1x per session)
- Event label = name of the chatbot or the automated message user interacted with
Chatbot started conversation
The event is sent if the visitor replies with a chat message to the chatbot or an automated message
- Event label = name of the chatbot or the automated message user interacted with
Renamed old events:
New
Old
Chatbot_sent
Chatbot_interaction
Chatbot_button_interaction
Chatbot_viewed
Chatbot message viewed
Chatbot_visitor_reaction
Chatbot started conversation
Auto_message_sent
Auto_message_viewed
Auto_message_visitor_reaction
Auto message started a conversation
Visitor_started_conversation
Agent_served_conversation
Conversation served
Auth_form_filled
Offline_message_sent
Feedback_sent
Feedback_text_sent
Feedback sent
Trigger_message_sent
Triggered message sent
Trigger_message_viewed
Triggered message viewed
Trigger_visitor_reaction
Trigger started conversation
Well done! All is up and running.
Do you have any questions, suggestions for additional events to measure or want to share your data from Google Analytics? Let us know !
Still confused? Contact us via the chat box in your dashboard and we’ll be happy to get in touch with you. Please note that customer service is included only in paid packages.

