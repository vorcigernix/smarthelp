# Smartsupp — Export to 3rd party system
## Send a copy of all live chat conversations to your server. This feature is available only in the PRO package.
  How it works
Copy of all finished chat conv
Send a copy of all live chat conversations to your server.
This feature is available only in the PRO package.
How it works
Copy of all finished chat conversations, missed conversations and offline messages is sent in JSON format in real-time to a URL of your choice. You can then process all Smartsupp conversations on your server and export it to a 3rd party system of your choice (CRM, help desk, etc.).
Activate POST hook
Send an email to support@smartsupp.com where you specify your custom URL. On our end we will set sending all chat conversations to that URL.
Handle requests
See below how to handle JSON request using PHP script.
PHP Script
$data = file_get_contents('php://input'); // store data file_put_contents('data.json', $data); // or parse and process $json = json_decode($data);
JSON request
{ "accountId": 208, "beginAt": 1427470439703, "endAt": 1427470476687, "channel": { "id": 55039, "isChat": true, "isMissed": false, "isTriggered": true, "isOffline": false, "isCompleted": true, "isDropped": false, "duration": 36, "avgResponse": 14, "firstResponse": 14, "messagesCount": 5, "wordsCount": 11, "rating": 5, "ratingDesc": "" }, "visitor":{ "id": 27671, "name": "Dusan Kmet", "email": "dusan@domain.com", "note": "VIP customer", "group": null, "ipAddress": "89.235.0.55", "city": "Czech Republic", "countryCode": "CZ", "country": "Brno", "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36", "platform": "MacIntel", "referer": "", "variables": { "chatId":{ "label":"Chat ID", "value":208 }, "chatPackage":{ "label":"Chat Package", "value":"pro" }, "userId":{ "label":"User ID", "value":"1234" } } }, "paths":[{ "url": "http://developers.smartsupp.com/smartsupp/hook-post", "title": "POST Hook · Smartsupp" }, { "url": "http://developers.smartsupp.com", "title": "API · Smartsupp" }], "messages":[{ "type": "visitor", "from": "visitor:mxTiqn9adr2h39kmzAJ0FeaTGFJhmjio0R41491503012015", "content": "Hello", "sentAt": 1427470439703, "triggeredBy": null }, { "type": "system", "name": "John Doe", "from": "agent:3", "content": "agent.join", "sentAt": 1427470446219, "triggeredBy": null }, { "type": "agent", "name": "", "from": "system", "content": "This is triggered message", "sentAt": 1427470449706, "triggeredBy": "Test Trigger" }, { "type": "agent", "name": "John Doe", "from": "agent:3", "content": "Hi, how can i help you ?", "sentAt": 1427470453772, "triggeredBy": null }, { "type": "visitor", "name": "Dusan Kmet", "from": "visitor:mxTiqn9adr2h39kmzAJ0FeaTGFJhmjio0R41491503012015", "content": "tanks.", "sentAt": 1427470473124, "triggeredBy": null }, { "type": "system", "name": "Dusan Kmet", "from": "system", "content": "close.visitorClose", "sentAt": 1427470476687, "triggeredBy": null }] }
Request values
Browse available request values.
name type description 
accountId	int	Account id	
beginAt	int	Timestamp of conversation start	
endAt	int	Timestamp of conversation end	
channel	object	Channel info	
channel.id	int	Id of channel	
channel.isChat	boolean	True if visitor and agent send message	
channel.isMissed	boolean	True if the agent doesn't respond to the last visitor's message	
channel.isTriggered	boolean	True if the chat has at least one trigger message	
channel.isOffline	boolean	True chat was offline chat (visitor sends offline message)	
channel.isCompleted	boolean	True chat was closed and the visitor has responded to the agent on every message.	
channel.isDropped	boolean	True chat was dropped.	
channel.duration	int	Num of seconds.	
channel.avgResponse	int	Num of seconds.	
channel.firstResponse	int	Num of seconds.	
channel.messagesCount	int	Num of messages in the chat.	
channel.wordsCount	int	Num of words in chat.	
channel.rating	int	Chat rating (null if the visitor doesn't send rating).	
channel.ratingDesc	string	Chat rating comment (null if the visitor doesn't send rating).	
visitor	object	Visitor info	
paths	object[]	List of paths	
messages	object[]	List of messages	
Still confused? Contact us via the chat box in your dashboard and we’ll be happy to get in touch with you. Please note that customer service is included only in paid packages.

