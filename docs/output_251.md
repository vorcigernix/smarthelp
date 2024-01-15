# Smartsupp — Connessione Google Analytics
## Questa funzione è disponibile solo nei pacchetti STANDARD e PRO.    Ti consigliamo di utilizzare la nostra nuova chat box (pubblicata nel 2023). Se non sei
Questa funzione è disponibile solo nei pacchetti STANDARD e PRO. 
Ti consigliamo di utilizzare la nostra nuova chat box (pubblicata nel 2023). Se non sei ancora passato a questa nuova versione della chat, contatta il nostro Servizio Clienti dalla chat nella tua Dashboard.
Nota: solo la nuova versione della chat box supporta Google Analytics 4.
Misurare l'impatto
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
Informazioni di base
Smartsupp attualmente supporta il nuovo GA4 (Google Analytics versione 4) e il vecchio UA (Universal Analytics). Dipende dalla versione della chat box.
Puoi combinare più codici di tracciamento GA > Smartsupp invia automaticamente gli eventi di analisi GA a tutti i codici di tracciamento GA sul sito web > usa l'API per un tracker GA specifico (maggiori informazioni di seguito).
La chat box (la nostra versione più recente) ha una nuova categoria di eventi: Smartsupp_v3 
Smartsupp divide le azioni degli eventi per chatbot, messaggi automatici e trigger: ogni automazione ha la propria etichetta di azione.
Smartsupp ha anche rinominato alcuni eventi (maggiori informazioni di seguito).
Gli eventi GA vengono inviati quando la chat box è chiusa o anche aperta.
Gli eventi GA vengono inviati una sola volta se il visitatore ha aperto lo stesso sito web in più schede del browser.
Google Analytics versione 4
Tutorial sull'aggiornamento GA4: [GA4] Passa a Google Analytics 4.
Azioni evento
In Google Analytics, il tracciamento degli eventi è composto gerarchicamente da 4 elementi: Categoria, Azione, Etichetta e Valore. Per le nostre esigenze, utilizziamo solo i primi 3.
Smartsupp invia i dati a Google Analytics come eventi. In totale, inviamo 17 azioni evento che ti aiutano a monitorare il comportamento degli utenti in chat. Puoi trovare tutte queste azioni evento in Categoria evento = Smartsupp_v3.
Con la nuova chat box Smartsupp (pubblicata nel 2023) abbiamo aggiornato e aggiunto altri eventi GA. Vengono tutti inviati solo in inglese.
Azioni ed etichette evento (descrizione)
Nota: per l'implementazione GA personalizzata (GTM) utilizza la nostra API
Categoria
Azione
Etichetta
Spiegazione
Smartsupp_v3
Chatbot_sent
Nome chatbot
chatbot inviato alla chat box
Chatbot_interaction
Nome chatbot
la prima interazione con un chatbot
Chatbot_button_interaction
Pulsante di risposta
interazione concreta di risposta del pulsante in chatbot
Chatbot_viewed
Nome chatbot
apri la chat box o fai clic sul pulsante popup
Chatbot_visitor_reaction
Nome chatbot
reazione dei visitatori al chatbot concreto
Auto_message_sent
Nome messaggio automatico
messaggio automatico inviato alla chat box
Auto_message_viewed
Nome messaggio automatico
aprire la chat box o fare clic sul pulsante popup
Auto_message_visitor_reaction
Nome messaggio automatico
la reazione del visitatore al messaggio automatico concreto
Visitor_started_conversation
(non impostato)
il visitatore invia un messaggio alla chat (solo senza alcuna automazione nella chat prima)
Agent_served_conversation
Nome dell'agente
l'agente si unisce alla conversazione
Auth_form_filled
(non impostato)
compilato e inviato un modulo di contatto
Offline_message_sent
(non impostato)
un visitatore ha inviato un messaggio alla chat box offline
Feedback_sent
Positivo/Normale/Negativo
selezionare emoji nel feedback
Feedback_text_sent
Testo concreto
compilare il testo e inviare feedback
Trigger_message_sent
Nome del trigger
vecchio trigger inviato alla chat box
Trigger_message_viewed
Nome del trigger
aprire la chat box o fare clic sul pulsante popup
Trigger_visitor_reaction
Nome del trigger
la reazione del visitatore a un trigger concreto
Cosa significano quegli eventi?
Chatbot_sent
l'evento viene inviato quando il visitatore riceve un chatbot nella chat box
uno per ogni chatbot attivato
Chatbot_interaction
l'evento viene inviato quando un visitatore risponde a un chatbot
questa è solo la prima interazione, fino a una volta per sessione
Chatbot_button_interaction
l'evento viene inviato ogni volta che si fa clic sul pulsante di risposta del chatbot
possibilmente più volte per sessione
Chatbot_viewed
l'evento viene inviato se il visitatore apre la chat box o fa clic sul pulsante Chattiamo nel popup della chat box dopo che il visitatore riceve un chatbot
Chatbot_visitor_reaction
l'evento viene inviato se il visitatore risponde con un messaggio di chat al chatbot
nel caso di più chatbot, viene inviato un evento di reazione al chatbot concreto
Auto_message_sent
l'evento viene inviato quando il visitatore riceve un messaggio automatico nella chat box
Auto_message_viewed
l'evento viene inviato se il visitatore apre la chat box o fa clic sul pulsante Chattiamo nel popup della chat box dopo che il visitatore riceve un messaggio automatico
Auto_message_visitor_reaction
l'evento viene inviato se il visitatore risponde con un messaggio di chat al messaggio automatico
in caso di automazione multipla (chatbot, messaggi automatici) l'evento di reazione viene inviato sull'ultimo
Visitor_started_conversation
l'evento viene inviato se il visitatore invia un messaggio di chat alla chat box ma la chat box è senza alcuna automazione prima (chatbot, messaggio automatico)
Agent_served_conversation
l'evento viene inviato quando l'agente si unisce alla conversazione
Auth_form_filled
l'evento viene inviato quando il visitatore compila e invia il modulo di contatto
Offline_message_sent
l'evento viene inviato quando il visitatore invia un messaggio di chat alla chat box offline
Feedback_sent
l'evento viene inviato quando il visitatore seleziona l'emoji nel modulo di valutazione
Feedback_text_sent
l'evento viene inviato quando il visitatore compila e invia un feedback di testo nel modulo di valutazione
Trigger_message_sent
l'evento viene inviato quando il visitatore riceve un trigger nella chat box
Trigger_message_viewed
l'evento viene inviato se il visitatore apre la chat box o fa clic sul pulsante Chattiamo nel popup della chat box dopo che il visitatore riceve un trigger
Trigger_visitor_reaction
l'evento viene inviato se il visitatore risponde con un messaggio di chat al trigger
Crea un nuovo segmento
Per GA UA: ora tutto ciò che devi fare è creare un nuovo segmento per filtrare i dati dei visitatori in chat. Puoi creare un segmento per qualsiasi tipo di azione evento Smartsupp. La metrica più utile è l'azione evento "Conversazione".
Confronta comportamento
Per GA UA: una volta creato il segmento, puoi vedere e confrontare il comportamento dei visitatori in chat rispetto a tutti i visitatori. Nell'esempio, vedi che c'erano 71 visitatori in chat contro 3796 visitatori totali. Così puoi calcolare che l'1,9% dei visitatori è impegnato in una conversazione con te e maggiori informazioni.
Conversioni
Per GA UA: la cosa più importante che puoi misurare è l'impatto della chat di Smartsupp sulle conversioni (obiettivi). Puoi vedere il tasso di conversione dei visitatori in chat rispetto al tasso di conversione complessivo.
API
specifica l'ID tracker concreto per GA4 o UA: https://docs.smartsupp.com/chat-box/google-analytics/ 
Consenso cookie
Segui i passaggi descritti qui: https://smartsupp.helpjuice.com/it_IT/dashboard/cookies-2?from_search=115920019 
Eventi per la versione precedente di Smartsupp
Per la versione precedente di Smartsupp (vecchia versione della chat box), verrà visualizzata una versione diversa degli eventi:
Messaggio attivato inviato
L'evento viene inviato ogni volta che il visitatore riceve un messaggio automatico (trigger). Il numero mostra quante persone hanno ricevuto il messaggio automatico. Se vuoi sapere quante persone hanno risposto al messaggio automatico (trigger) dai un'occhiata all'evento: "Trigger ha iniziato conversazione".
- Etichetta evento = titolo del messaggio attivato nella dashboard
Messaggio attivato visualizzato
Quando il visitatore reagisce al messaggio attivato (apre la chat).
- Etichetta evento = titolo del messaggio attivato nella dashboard
Conversazione servita
Quando viene scambiato un messaggio tra il visitatore e un agente (o chatbot).
- Etichetta evento = nome dell'agente
Modulo di autorizzazione compilato
Quando il visitatore compila il modulo di contatto.
- Nessuna etichetta evento assegnata
Messaggio offline inviato
Quando il visitatore invia un messaggio offline.
- Nessuna etichetta evento assegnata
Feedback inviato
Quando il visitatore compila e invia il modulo di feedback.
- Etichetta evento = livello di valutazione (1, 3, 5 = negativo, normale, positivo)
Chatbot inviato
L'evento viene inviato quando il visitatore riceve un chatbot o un messaggio automatico nella chat box
- Etichetta evento = nome del chatbot o del messaggio automatico con cui l'utente ha interagito
Interazione con il pulsante chatbot
L'evento viene inviato ogni volta che si fa clic sul pulsante del chatbot (possibilmente più volte per sessione)
- Etichetta evento = nome del chatbot o del messaggio automatico con cui l'utente ha interagito
Interazione chatbot
L'evento viene inviato quando un visitatore risponde a un chatbot o a un messaggio automatico (questa è solo la prima interazione fino a una volta per sessione)
- Etichetta evento = nome del chatbot o del messaggio automatico con cui l'utente ha interagito
Chatbot ha iniziato la conversazione
L'evento viene inviato se il visitatore risponde con un messaggio di chat al chatbot o un messaggio automatico
- Etichetta evento = nome del chatbot o del messaggio automatico con cui l'utente ha interagito
Vecchi eventi rinominati:
Nuovi
Vecchi
Chatbot_sent
Chatbot_interaction
Chatbot_button_interaction
Chatbot_viewed
Messaggio chatbot visualizzato
Chatbot_visitor_reaction
Chatbot ha iniziato la conversazione
Auto_message_sent
Auto_message_viewed
Auto_message_visitor_reaction
Il messaggio automatico ha avviato una conversazione
Visitor_started_conversation
Agent_served_conversation
Conversazione servita
Auth_form_filled
Offline_message_sent
Feedback_sent
Feedback_text_sent
Feedback inviato
Trigger_message_sent
Messaggio attivato inviato
Trigger_message_viewed
Messaggio attivato visualizzato
Trigger_visitor_reaction
Trigger ha iniziato la conversazione
Molto bene! Tutto è attivo e funzionante.
Hai domande o suggerimenti per ulteriori eventi da misurare o vuoi condividere i tuoi dati da Google Analytics? Non esitare a contattarci!
Sei ancora confuso? Contattaci tramite la chat box nella tua dashboard e saremo felici di aiutarti. Si prega di notare che il servizio clienti è incluso solo nei pacchetti a pagamento.

