# Smartsupp — Exportation vers un système tiers
## Envoyez une copie de toutes les conversations par chat à votre serveur. Cette fonction n'est disponible que dans le forfait PRO.
  Comment cela fonctionne 
Envoyez une copie de toutes les conversations par chat à votre serveur.
Cette fonction n'est disponible que dans le forfait PRO.
Comment cela fonctionne
Une copie de toutes les conversations par chat résolues, des conversations manquées et des messages hors ligne est envoyée en format JSON en temps réel à une URL de votre choix. Vous pouvez ensuite traiter toutes les conversations Smartsupp sur votre serveur et les exporter vers un système tiers de votre choix (CRM, help desk, etc.).
Activer le POST hook
Envoyez un e-mail à support@smartsupp.com où vous indiquez votre URL personnalisée. De notre côté, nous enverrons toutes les conversations par chat à cette URL.
Traiter les demandes
Voir ci-dessous comment traiter une requête JSON à l'aide d'un script PHP.
PHP script
$data = file_get_contents('php://input'); // store data file_put_contents('data.json', $data); // or parse and process $json = json_decode($data);
JSON requête
{ "accountId": 208, "beginAt": 1427470439703, "endAt": 1427470476687, "channel": { "id": 55039, "isChat": true, "isMissed": false, "isTriggered": true, "isOffline": false, "isCompleted": true, "isDropped": false, "duration": 36, "avgResponse": 14, "firstResponse": 14, "messagesCount": 5, "wordsCount": 11, "rating": 5, "ratingDesc": "" }, "visitor":{ "id": 27671, "name": "Dusan Kmet", "email": "dusan@domain.com", "note": "VIP customer", "group": null, "ipAddress": "89.235.0.55", "city": "Czech Republic", "countryCode": "CZ", "country": "Brno", "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36", "platform": "MacIntel", "referer": "", "variables": { "chatId":{ "label":"Chat ID", "value":208 }, "chatPackage":{ "label":"Chat Package", "value":"pro" }, "userId":{ "label":"User ID", "value":"1234" } } }, "paths":[{ "url": "http://developers.smartsupp.com/smartsupp/hook-post", "title": "POST Hook · Smartsupp" }, { "url": "http://developers.smartsupp.com", "title": "API · Smartsupp" }], "messages":[{ "type": "visitor", "from": "visitor:mxTiqn9adr2h39kmzAJ0FeaTGFJhmjio0R41491503012015", "content": "Hello", "sentAt": 1427470439703, "triggeredBy": null }, { "type": "system", "name": "John Doe", "from": "agent:3", "content": "agent.join", "sentAt": 1427470446219, "triggeredBy": null }, { "type": "agent", "name": "", "from": "system", "content": "This is triggered message", "sentAt": 1427470449706, "triggeredBy": "Test Trigger" }, { "type": "agent", "name": "John Doe", "from": "agent:3", "content": "Hi, how can i help you ?", "sentAt": 1427470453772, "triggeredBy": null }, { "type": "visitor", "name": "Dusan Kmet", "from": "visitor:mxTiqn9adr2h39kmzAJ0FeaTGFJhmjio0R41491503012015", "content": "tanks.", "sentAt": 1427470473124, "triggeredBy": null }, { "type": "system", "name": "Dusan Kmet", "from": "system", "content": "close.visitorClose", "sentAt": 1427470476687, "triggeredBy": null }] }
Valeurs de la demande
Parcourir les valeurs de demande disponibles.
name type description 
accountId	int	Identifiant du compte	
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
Vous ne savez toujours pas quoi faire ? Contactez-nous via le chat box de votre tableau de bord et nous nous ferons un plaisir de vous contacter. Veuillez noter que le service clientèle n’est inclus que dans les formules payantes.

