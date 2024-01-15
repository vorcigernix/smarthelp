# Smartsupp — Exportálás harmadik fél általi rendszerbe
## Küldje el az összes csevegés másolatát a szerverére. Ez a szolgáltatás csak a PRO csomagban érhető el.
  Hogyan működik Az összes befejezett csevegés, a ne
Küldje el az összes csevegés másolatát a szerverére.
Ez a szolgáltatás csak a PRO csomagban érhető el.
Hogyan működik
Az összes befejezett csevegés, a nem fogadott beszélgetések és az offline üzenetek másolata valós időben JSON formátumban kerül elküldésre az Ön által választott URL-re. Ezután feldolgozhatja az összes Smartsupp beszélgetést a szerveren, és exportálhatja egy tetszőleges harmadik fél rendszerébe (CRM, ügyfélszolgálat stb.).
Aktiválja a POST horgot
Küldjön egy e-mailt a support@smartsupp.com címre, ahol megadhatja egyéni URL-jét. Mi beállítjuk, hogy az összes chat beszélgetés elküldésre kerüljön erre az URL-re.
Kérelmek kezelése
Az alábbiakban elolvashatja, hogyan kezelheti a JSON kéréseket PHP szkript használatával.
PHP szkript
$data = file_get_contents('php://input'); // store data file_put_contents('data.json', $data); // or parse and process $json = json_decode($data);
JSON kérés
{ "accountId": 208, "beginAt": 1427470439703, "endAt": 1427470476687, "channel": { "id": 55039, "isChat": true, "isMissed": false, "isTriggered": true, "isOffline": false, "isCompleted": true, "isDropped": false, "duration": 36, "avgResponse": 14, "firstResponse": 14, "messagesCount": 5, "wordsCount": 11, "rating": 5, "ratingDesc": "" }, "visitor":{ "id": 27671, "name": "Dusan Kmet", "email": "dusan@domain.com", "note": "VIP customer", "group": null, "ipAddress": "89.235.0.55", "city": "Czech Republic", "countryCode": "CZ", "country": "Brno", "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36", "platform": "MacIntel", "referer": "", "variables": { "chatId":{ "label":"Chat ID", "value":208 }, "chatPackage":{ "label":"Chat Package", "value":"pro" }, "userId":{ "label":"User ID", "value":"1234" } } }, "paths":[{ "url": "http://developers.smartsupp.com/smartsupp/hook-post", "title": "POST Hook · Smartsupp" }, { "url": "http://developers.smartsupp.com", "title": "API · Smartsupp" }], "messages":[{ "type": "visitor", "from": "visitor:mxTiqn9adr2h39kmzAJ0FeaTGFJhmjio0R41491503012015", "content": "Hello", "sentAt": 1427470439703, "triggeredBy": null }, { "type": "system", "name": "John Doe", "from": "agent:3", "content": "agent.join", "sentAt": 1427470446219, "triggeredBy": null }, { "type": "agent", "name": "", "from": "system", "content": "This is triggered message", "sentAt": 1427470449706, "triggeredBy": "Test Trigger" }, { "type": "agent", "name": "John Doe", "from": "agent:3", "content": "Hi, how can i help you ?", "sentAt": 1427470453772, "triggeredBy": null }, { "type": "visitor", "name": "Dusan Kmet", "from": "visitor:mxTiqn9adr2h39kmzAJ0FeaTGFJhmjio0R41491503012015", "content": "tanks.", "sentAt": 1427470473124, "triggeredBy": null }, { "type": "system", "name": "Dusan Kmet", "from": "system", "content": "close.visitorClose", "sentAt": 1427470476687, "triggeredBy": null }] }
Kérelmek értékei
Böngésszen az elérhető kérelmek értékei között.
név típus leírás 
accountId	int	Fiókazonosító	
beginAt	int	A beszélgetés kezdetének időbélyege	
endAt	int	A beszélgetés végének időbélyege	
channel	object	Csatorna információ	
channel.id	int	Csatorna azonosító	
channel.isChat	boolean	Igaz, ha a látogató és az ügynök üzenetet küld	
channel.isMissed	boolean	Igaz, ha az ügynök nem válaszol a látogató utolsó üzenetére	
channel.isTriggered	boolean	Igaz, ha a csevegésnek legalább egy kiváltó üzenete van	
channel.isOffline	boolean	Igaz, ha a csevegés offline csevegés volt (a látogató offline üzenetet küld)	
channel.isCompleted	boolean	Igaz, ha a csevegést bezárták, és a látogató minden üzenetre kapott választ az ügynök által.	
channel.isDropped	boolean	Igaz, ha a chatet nem vették fel.	
channel.duration	int	Másodpercek száma.	
channel.avgResponse	int	Másodpercek száma.	
channel.firstResponse	int	Másodpercek száma.	
channel.messagesCount	int	Üzenetek száma a csevegésben.	
channel.wordsCount	int	Szavak száma a csevegésben.	
channel.rating	int	Csevegés értékelése (null, ha a látogató nem küld értékelést).	
channel.ratingDesc	string	Csevegés értékelése (null, ha a látogató nem küld értékelést).	
visitor	object	Látogatói információk	
paths	object[]	Útvonalak listája	
messages	object[]	Üzenetek listája	
Még mindig kérdése van? Lépjen kapcsolatba velünk az irányítópulton lévő chat dobozon keresztül, és örömmel felvesszük Önnel a kapcsolatot. Felhívjuk figyelmét, hogy az ügyfélszolgálatot csak a fizetős csomagok tartalmazzák.

