# Smartsupp — Exportar a un sistema de terceros
## Envía una copia de todas las conversaciones de chat a tu servidor. Esta función solo está disponible en el paquete PRO.   Como funciona Se envía una copia 
Envía una copia de todas las conversaciones de chat a tu servidor.
Esta función solo está disponible en el paquete PRO.
Como funciona
Se envía una copia de todas las conversaciones de chat terminadas, las conversaciones perdidas y los mensajes fuera de línea en formato JSON en tiempo real a la URL de tu elección. Luego, puedes procesar todas las conversaciones de Smartsupp en tu servidor y exportarlas a un sistema externo de tu elección (CRM, mesa de ayuda, etc.).
Activa POST hook
Envía un correo electrónico a support@smartsupp.com donde especifiques tu URL personalizada. Por nuestra parte, configuraremos el envío de todas las conversaciones de chat a esa URL.
Manejar solicitudes
Ve a continuación cómo manejar la solicitud JSON usando un script PHP.
PHP script
$data = file_get_contents('php://input'); // store data file_put_contents('data.json', $data); // or parse and process $json = json_decode($data);
JSON solicitud
{ "accountId": 208, "beginAt": 1427470439703, "endAt": 1427470476687, "channel": { "id": 55039, "isChat": true, "isMissed": false, "isTriggered": true, "isOffline": false, "isCompleted": true, "isDropped": false, "duration": 36, "avgResponse": 14, "firstResponse": 14, "messagesCount": 5, "wordsCount": 11, "rating": 5, "ratingDesc": "" }, "visitor":{ "id": 27671, "name": "Dusan Kmet", "email": "dusan@domain.com", "note": "VIP customer", "group": null, "ipAddress": "89.235.0.55", "city": "Czech Republic", "countryCode": "CZ", "country": "Brno", "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36", "platform": "MacIntel", "referer": "", "variables": { "chatId":{ "label":"Chat ID", "value":208 }, "chatPackage":{ "label":"Chat Package", "value":"pro" }, "userId":{ "label":"User ID", "value":"1234" } } }, "paths":[{ "url": "http://developers.smartsupp.com/smartsupp/hook-post", "title": "POST Hook · Smartsupp" }, { "url": "http://developers.smartsupp.com", "title": "API · Smartsupp" }], "messages":[{ "type": "visitor", "from": "visitor:mxTiqn9adr2h39kmzAJ0FeaTGFJhmjio0R41491503012015", "content": "Hello", "sentAt": 1427470439703, "triggeredBy": null }, { "type": "system", "name": "John Doe", "from": "agent:3", "content": "agent.join", "sentAt": 1427470446219, "triggeredBy": null }, { "type": "agent", "name": "", "from": "system", "content": "This is triggered message", "sentAt": 1427470449706, "triggeredBy": "Test Trigger" }, { "type": "agent", "name": "John Doe", "from": "agent:3", "content": "Hi, how can i help you ?", "sentAt": 1427470453772, "triggeredBy": null }, { "type": "visitor", "name": "Dusan Kmet", "from": "visitor:mxTiqn9adr2h39kmzAJ0FeaTGFJhmjio0R41491503012015", "content": "tanks.", "sentAt": 1427470473124, "triggeredBy": null }, { "type": "system", "name": "Dusan Kmet", "from": "system", "content": "close.visitorClose", "sentAt": 1427470476687, "triggeredBy": null }] }
Valores de solicitud
Examina los valores de solicitud disponibles.
nombre tipo descripción 
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
¿Sigues confundido? Contáctanos a través de la caja de chat en tu panel de conversaciones y estaremos encantados de comunicarnos cotigo. Ten en cuenta que el servicio al cliente está incluido solo en los paquetes pagos.

