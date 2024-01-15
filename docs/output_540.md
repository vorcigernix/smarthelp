# Smartsupp — Export in ein System eines Drittanbieters
## Senden Sie eine Kopie aller Chat-Konversationen an Ihren Server. Diese Funktion ist nur im PRO-Paket verfügbar.
  Wie es funktioniert Die Kopie aller abges
Senden Sie eine Kopie aller Chat-Konversationen an Ihren Server.
Diese Funktion ist nur im PRO-Paket verfügbar.
Wie es funktioniert
Die Kopie aller abgeschlossenen Chat-Konversationen, verpassten Konversationen und Offline-Nachrichten wird im JSON-Format in Echtzeit an eine URL Ihrer Wahl gesendet. Sie können dann alle Smartsupp-Konversationen auf Ihrem Server verarbeiten und in ein System eines Drittanbieters Ihrer Wahl (CRM, Helpdesk usw.) exportieren.
Aktivieren Sie den POST-Hook
Senden Sie eine E-Mail an support@smartsupp.com, wo Sie Ihre benutzerdefinierte URL angeben. Wir werden festlegen, dass alle Chat-Konversationen an diese URL gesendet werden.
Handle requests
Im Folgenden erfahren Sie, wie Sie JSON-Anforderungen mithilfe eines PHP-Skripts verarbeiten.
PHP Skript
$data = file_get_contents('php://input'); // store data file_put_contents('data.json', $data); // or parse and process $json = json_decode($data);
JSON-Anforderung
{ "accountId": 208, "beginAt": 1427470439703, "endAt": 1427470476687, "channel": { "id": 55039, "isChat": true, "isMissed": false, "isTriggered": true, "isOffline": false, "isCompleted": true, "isDropped": false, "duration": 36, "avgResponse": 14, "firstResponse": 14, "messagesCount": 5, "wordsCount": 11, "rating": 5, "ratingDesc": "" }, "visitor":{ "id": 27671, "name": "Dusan Kmet", "email": "dusan@domain.com", "note": "VIP customer", "group": null, "ipAddress": "89.235.0.55", "city": "Czech Republic", "countryCode": "CZ", "country": "Brno", "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36", "platform": "MacIntel", "referer": "", "variables": { "chatId":{ "label":"Chat ID", "value":208 }, "chatPackage":{ "label":"Chat Package", "value":"pro" }, "userId":{ "label":"User ID", "value":"1234" } } }, "paths":[{ "url": "http://developers.smartsupp.com/smartsupp/hook-post", "title": "POST Hook · Smartsupp" }, { "url": "http://developers.smartsupp.com", "title": "API · Smartsupp" }], "messages":[{ "type": "visitor", "from": "visitor:mxTiqn9adr2h39kmzAJ0FeaTGFJhmjio0R41491503012015", "content": "Hello", "sentAt": 1427470439703, "triggeredBy": null }, { "type": "system", "name": "John Doe", "from": "agent:3", "content": "agent.join", "sentAt": 1427470446219, "triggeredBy": null }, { "type": "agent", "name": "", "from": "system", "content": "This is triggered message", "sentAt": 1427470449706, "triggeredBy": "Test Trigger" }, { "type": "agent", "name": "John Doe", "from": "agent:3", "content": "Hi, how can i help you ?", "sentAt": 1427470453772, "triggeredBy": null }, { "type": "visitor", "name": "Dusan Kmet", "from": "visitor:mxTiqn9adr2h39kmzAJ0FeaTGFJhmjio0R41491503012015", "content": "tanks.", "sentAt": 1427470473124, "triggeredBy": null }, { "type": "system", "name": "Dusan Kmet", "from": "system", "content": "close.visitorClose", "sentAt": 1427470476687, "triggeredBy": null }] }
Request values
Sehen Sie die verfügbaren Anforderungswerte.
name type description 
accountId	int	Account id	
beginAt	int	Timestamp of conversation start	
endAt	int	Timestamp of conversation end	
channel	object	Channel info	
channel.id	int	Id of channel	
channel.isChat	boolean	True if visitor and agent send message	
channel.isMissed	boolean	True if agent don't respond to last visitor message	
channel.isTriggered	boolean	True if chat has at least one trigger message	
channel.isOffline	boolean	True chat was offline chat (visitor send offline message)	
channel.isCompleted	boolean	True chat was closed and visitor has response by agent on every message.	
channel.isDropped	boolean	True chat was dropped.	
channel.duration	int	Num of seconds.	
channel.avgResponse	int	Num of seconds.	
channel.firstResponse	int	Num of seconds.	
channel.messagesCount	int	Num of messages in chat.	
channel.wordsCount	int	Num of words in chat.	
channel.rating	int	Chat rating (null if visitor don't send rating).	
channel.ratingDesc	string	Chat rating comment (null if visitor don't send rating).	
visitor	object	Visitor info	
paths	object[]	List of paths	
messages	object[]	List of messages	
Sind Sie noch verwirrt? Kontaktieren Sie uns über die Chat-Box in Ihrem Dashboard und wir werden uns gerne mit Ihnen in Verbindung setzen. Bitte beachten Sie, dass der Kundenservice nur in kostenpflichtigen Paketen enthalten ist.

