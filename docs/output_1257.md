# Smartsupp — Messaggi automatici vecchi - impostazioni avanzate
## Nota: le vecchie impostazioni avanzate sono disponibili solo per utenti selezionati che hanno creato un account a maggio 2021 e precedenti.
  Cliccando sul
Nota: le vecchie impostazioni avanzate sono disponibili solo per utenti selezionati che hanno creato un account a maggio 2021 e precedenti.
Cliccando sul messaggio automatico situato nella sezione Presto sostituito appariranno le vecchie impostazioni avanzate.
Nelle impostazioni avanzate è possibile scegliere la condizione in cui viene inviato il messaggio (Avvia messaggio) e la modalità di valutazione delle condizioni (Invia messaggio al visitatore se). Puoi anche scegliere più condizioni dall'elenco.
Condizione	Possibili operatori	Descrizione	
Avvia messaggio	Quando viene caricata la chat box	Quando Smartsupp viene rilevato sul sito Web, viene inviato un messaggio automatico.	
	Quando un visitatore invia un messaggio	Il messaggio viene attivato quando il tuo visitatore invia un messaggio.	
	Quando un visitatore apre la chat box	I messaggi vengono attivati quando il visitatore apre la chat box.	
Invia messaggio al visitatore se	Tutte le condizioni sono soddisfatte	Tutte le condizioni devono essere soddisfatte per attivare il messaggio (ad esempio, A e B e C).	
	Qualsiasi condizione è soddisfatta	Deve essere soddisfatta almeno una condizione (ad esempio, A o B o C).	
Elenco delle condizioni avanzate
Condizione	Possibili operatori	Esempio di valore	Descrizione	
URL della pagina web	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	www.myeshop.cz/cameras	L'indirizzo del sito web visitato dal visitatore. La condizione è soddisfatta se l'URL contiene il testo inserito, che può essere ovunque nell'URL.	
Titolo della pagina web	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	Canon cameras | My e-shop	Il titolo della pagina web che il visitatore sta attualmente navigando. 
Viene mostrato nella scheda del browser. Il valore deve essere esattamente lo stesso del titolo.
	
Referer (source)	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	google.com	Il sito Web da cui il visitatore è giunto al tuo sito Web (ad es. un motore di ricerca, un blog, un articolo o una campagna di marketing). 
Per tua informazione, il referrer potrebbe non essere sempre disponibile (ad esempio, se il visitatore digita l'URL direttamente nel proprio browser). Inoltre, alcuni siti web non inviano informazioni sui referrer.
	
Numero di visite	= equals 
!= doesn’t equal
< is fewer than
> is more than
<= is fewer than or equals
>= is more than or equals
	2	Quante volte un visitatore è stato sul tuo sito web. Queste informazioni sono memorizzate nei loro cookie. Consigliamo di testare i messaggi automatici in una finestra di navigazione in incognito.	
Numero di chat	= equals 
!= doesn’t equal
< is fewer than
> is more than
<= is fewer than or equals
>= is more than or equals
	1	Il numero di chat con il visitatore.	
Il visitatore ha inviato un messaggio	is true 
is false
		Viene attivato quando il visitatore invia un messaggio (è vero) o no (è falso).	
Il visitatore è/è stato servito	is true 
is false
		Un visitatore viene servito quando un operatore gli invia un messaggio. È vero significa che è successo, mentre è falso significa che non è successo.	
Indirizzo IP	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	88.90.91.92	L'indirizzo IP del visitatore.	
Città	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	Brno	La città del visitatore. Si basa sui dati di geolocalizzazione di Maxmind. Le posizioni di alcuni visitatori potrebbero essere imprecise e le piccole città in particolare potrebbero essere visualizzate come città più grandi nelle loro vicinanze. Informazioni imprecise possono anche essere mostrate ai visitatori che utilizzano dati mobili.	
Prefisso internazionale	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	DE, IT, ES	Il codice del paese del visitatore nel formato ISO 3166-1 alpha-2. L'elenco di tutti i paesi e dei relativi codici può essere trovato qui: 
https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
	
Gruppo	= equals 
!= doesn’t equal
		Il gruppo dei visitatori. (Solo i pacchetti Pro possono utilizzare i gruppi.)	
Ora del giorno	= equals 
!= doesn’t equal
< is earlier than
> is later than
<= is earlier than or equals
>= is later than or equals
	0-23	L'ora in cui viene attivato il messaggio automatico.	
Giorno della settimana	= equals 
!= doesn’t equal
< is earlier than
> is later than
<= is earlier than or equals
>= is later than or equals
	Lunedì - Domenica	Il giorno della settimana in cui viene attivato il messaggio automatico.	
Mese	= equals 
!= doesn’t equal
< is earlier than
> is later than
<= is earlier than or equals
>= is later than or equals
	Gennaio - Dicembre	Il mese in cui viene attivato il messaggio automatico.	
Browser	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	Chrome	Il browser del visitatore. Il valore è lo stesso che si trova nel pannello delle informazioni dell'utente nei dettagli della chat del visitatore.	
Sistema operativo	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	Windows, OS X, Android	Il sistema operativo del visitatore. Il valore è lo stesso che si trova nel pannello delle informazioni dell'utente nei dettagli della chat del visitatore.	
Piattaforma	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	Windows, Apple Mac	La piattaforma del visitatore	
Il visitatore ha ricevuto un messaggio automatico	is true 
is false
		Determina se un visitatore ha ricevuto o non ha ricevuto un messaggio automatico.	
Chatbox status	online 
offline
		Determina se la chat è in modalità online o offline.	
Sei ancora confuso? Contattaci tramite la chat box nella tua dashboard e saremo felici di aiutarti. Si prega di notare che il servizio clienti è incluso solo nei pacchetti a pagamento.

