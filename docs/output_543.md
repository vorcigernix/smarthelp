# Smartsupp — Eksport do trzeciego systemu
## Wyślij kopię wszystkich rozmów na czacie na swój serwer. Ta funkcja dostępna jest tylko w pakiecie PRO.
  Jak to działa Kopia wszystkich zakończonych rozmó
Wyślij kopię wszystkich rozmów na czacie na swój serwer.
Ta funkcja dostępna jest tylko w pakiecie PRO.
Jak to działa
Kopia wszystkich zakończonych rozmów na czacie, nieodebranych rozmów i wiadomości offline jest wysyłana w formacie JSON w czasie rzeczywistym na wybrany adres URL. Następnie możesz przetwarzać wszystkie konwersacje Smartsupp na swoim serwerze i eksportować je do wybranego trzeciego systemu (CRM, help desk, itp.).
Aktywuj POST hook
Wyślij wiadomość e-mail z twoim adresem URL przeznaczonym dla poost hook na adres support@smartsupp.com a my w naszym systemie ustawimy wysyłanie wszystkich rozmów na czacie na ten adres URL.
Obsługiwane żądania
Sprawdź poniżej, jak obsługiwać żądania JSON za pomocą skryptu PHP.
PHP script
$data = file_get_contents('php://input'); // store data file_put_contents('data.json', $data); // or parse and process $json = json_decode($data);
JSON request
{ "accountId": 208, "beginAt": 1427470439703, "endAt": 1427470476687, "channel": { "id": 55039, "isChat": true, "isMissed": false, "isTriggered": true, "isOffline": false, "isCompleted": true, "isDropped": false, "duration": 36, "avgResponse": 14, "firstResponse": 14, "messagesCount": 5, "wordsCount": 11, "rating": 5, "ratingDesc": "" }, "visitor":{ "id": 27671, "name": "Dusan Kmet", "email": "dusan@domain.com", "note": "VIP customer", "group": null, "ipAddress": "89.235.0.55", "city": "Czech Republic", "countryCode": "CZ", "country": "Brno", "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36", "platform": "MacIntel", "referer": "", "variables": { "chatId":{ "label":"Chat ID", "value":208 }, "chatPackage":{ "label":"Chat Package", "value":"pro" }, "userId":{ "label":"User ID", "value":"1234" } } }, "paths":[{ "url": "http://developers.smartsupp.com/smartsupp/hook-post", "title": "POST Hook · Smartsupp" }, { "url": "http://developers.smartsupp.com", "title": "API · Smartsupp" }], "messages":[{ "type": "visitor", "from": "visitor:mxTiqn9adr2h39kmzAJ0FeaTGFJhmjio0R41491503012015", "content": "Hello", "sentAt": 1427470439703, "triggeredBy": null }, { "type": "system", "name": "John Doe", "from": "agent:3", "content": "agent.join", "sentAt": 1427470446219, "triggeredBy": null }, { "type": "agent", "name": "", "from": "system", "content": "This is triggered message", "sentAt": 1427470449706, "triggeredBy": "Test Trigger" }, { "type": "agent", "name": "John Doe", "from": "agent:3", "content": "Hi, how can i help you ?", "sentAt": 1427470453772, "triggeredBy": null }, { "type": "visitor", "name": "Dusan Kmet", "from": "visitor:mxTiqn9adr2h39kmzAJ0FeaTGFJhmjio0R41491503012015", "content": "tanks.", "sentAt": 1427470473124, "triggeredBy": null }, { "type": "system", "name": "Dusan Kmet", "from": "system", "content": "close.visitorClose", "sentAt": 1427470476687, "triggeredBy": null }] }
Wartości żądań
Sprawdź dostępne wartości żądań.
name type description 
accountId	int	Id konta	
beginAt	int	Znacznik czasu rozpoczęcia rozmowy	
endAt	int	Znacznik czasu zakończenia rozmowy	
channel	object	Info o kalane	
channel.id	int	Id kanału	
channel.isChat	boolean	Prawdziwe, jeśli odwiedzający i agent wyślą wiadomość	
channel.isMissed	boolean	Prawdziwe, jeśli agent nie odpowie na ostatnią wiadomość od gościa	
channel.isTriggered	boolean	Prawdziwe, jeśli czat ma co najmniej jedną wiadomość automatyczną	
channel.isOffline	boolean	Prawdziwe, kiedy czat był offline (gość wysyła wiadomość offline)	
channel.isCompleted	boolean	Prawdziwe, jeśli czat został zamknięty, a odwiedzający otrzymał odpowiedź od agenta na każdą wiadomość.	
channel.isDropped	boolean	Prawdziwe, jeśli czat został przerwany.	
channel.duration	int	Liczba sekund.	
channel.avgResponse	int	Liczba sekund.	
channel.firstResponse	int	Liczba sekund.	
channel.messagesCount	int	Liczba wiadomości w czacie.	
channel.wordsCount	int	Liczba słów na czacie.	
channel.rating	int	Ocena na czacie (zerowa, jeśli gość nie wyśle oceny).	
channel.ratingDesc	string	Komentarz do oceny na czacie (zerowy, jeśli gość nie wyśle oceny).	
visitor	object	Info o odwiedzającym	
paths	object[]	Lista ścieżek	
messages	object[]	Lista wiadomości	
Nadal masz wątpliwości? Skontaktuj się z nami za pomocą okna czatu dostępnego w Twoim panelu nawigacyjnym (Dashboard), a my z przyjemnością Ci pomożemy. Jednak musimy zaznaczyć, że obsługa klienta jest dostępna tylko w płatnych pakietach.
Nadal masz wątpliwości? Skontaktuj się z nami za pomocą czatu w panelu administracyjnym, a my z przyjemnością się z Tobą skontaktujemy. Pamiętaj, że obsługa klienta jest dostępna tylko w płatnych pakietach.

