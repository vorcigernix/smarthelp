# Smartsupp — Consenso ai cookie
## Se il GDPR richiede che il tuo sito web disponga di una cookie policy e di un banner cookie corrispondente per informare i visitatori dei cookie sul tuo si
Se il GDPR richiede che il tuo sito web disponga di una cookie policy e di un banner cookie corrispondente per informare i visitatori dei cookie sul tuo sito, dovresti abilitare il consenso ai cookie nella dashboard di Smartsupp.
Abbiamo preparato un tutorial su come impostare i diversi tipi di cookie che memorizzerai e su come regolare di conseguenza le impostazioni e il testo della barra dei cookie.
Per comprendere le istruzioni seguenti, avrai bisogno di conoscenze avanzate nella programmazione. Se non ti senti qualificato, ti consigliamo di inviarlo allo sviluppatore o al webmaster che gestisce la barra dei cookie sul tuo sito web.
Se utilizzi un servizio Cookiebot per gestire i cookie, scorri fino alla fine di questo articolo per vedere alcuni esempi di come puoi gestire i tuoi cookie.
Dove abilitare il consenso ai cookie in Smartsupp?
Troverai le impostazioni relative al consenso ai cookie nelle Impostazioni >> Impostazioni dell 'account >> Sicurezza e Privacy
Per impostazione predefinita, la modalità di consenso ai cookie è disabilitata. Quando abilitata vengono memorizzati solo i cookie necessari. Puoi trovare un elenco di cookie funzionali (necessari) qui:
Help - Cookie funzionali Per abilitare i cookie statistici e di marketing, devi attivare un codice specifico. Il valore predefinito del consenso ai cookie analitici e di marketing è vuoto. Pertanto, i cookie statistici e di marketing non vengono memorizzati fino a quando il visitatore non acconsente. Gli elenchi delle statistiche e dei cookie di marketing della chat box sono disponibili qui: Help - Cookie analitici Help - Cookie di marketing
Aggiungi il codice di consenso ai cookie sul tuo sito web
Il consenso ai cookie è facile da implementare con JavaScript. Utilizza i pulsanti nel banner dei cookie per gestire le statistiche di Smartsupp e i cookie di marketing.
Ignorare il consenso
Se un visitatore ignora la tua barra dei cookie e non conferma o rifiuta il consenso, lo scenario è il seguente:
Il cookie ssupp.visit rimarrà al suo valore precedente com'era originariamente prima dell'attivazione del consenso per la gestione dei cookie. Non verrà incrementato fino a quando non verrà concesso il consenso (questo non influirà sul valore nella Dashboard visibile agli operatori, solo questo particolare valore nella Dashboard e i cookie saranno diversi)
Le registrazioni sono disabilitate
Non vengono inviati eventi di Google Analytics
Chatbot e messaggi automatici continueranno a funzionare senza modifiche
Accettazione del consenso
Cookie statistici
Se un visitatore accetta i cookie statistici aggiungi: 
smartsupp('analyticsConsent', true);
Questo codice abilita i cookie, che vengono memorizzati per le registrazioni e per l'invio di eventi di Google Analytics.
Cookie di marketing 
Se un visitatore accetta i cookie di marketing aggiungi:
smartsupp('marketingConsent', true);
Questo codice abilita i cookie, che vengono utilizzati per memorizzare il numero di visite precedentemente effettuate dal visitatore. Sono necessari per ottenere informazioni sul numero di visite per gli operatori. Tuttavia, se il visitatore non dà il consenso, non influirà sulla funzionalità dei chatbot e dei messaggi automatici 
Tutti i cookie
Se un visitatore accetta entrambi/tutti i cookie aggiungi:
smartsupp('analyticsConsent', true);
smartsupp('marketingConsent', true);
Rifiuto del consenso
Cookie statistici
Se un visitatore rifiuta i cookie statistici aggiungi:
smartsupp('analyticsConsent', false);
Il rifiuto del consenso sospenderà immediatamente le registrazioni del visitatore e l'invio di eventi a Google Analytics (in caso di riautorizzazione, le registrazioni saranno abilitate insieme all'invio di eventi di Google Analytics). 
Cookie di marketing
Se un visitatore rifiuta i cookie di marketing aggiungi:
smartsupp('marketingConsent', false);
Rifiutando il consenso, il cookie ssupp.visit utilizzato per determinare il numero di visite viene immediatamente cancellato. Ciò non influisce sulla funzionalità dei chatbot e dei messaggi automatici.
Tutti i cookie
Se un visitatore rifiuta tutti i cookie aggiungi:
smartsupp('analyticsConsent', false);
smartsupp('marketingConsent', false);
Esempio con Cookiebot
Lo script di esempio seguente ti aiuterà ad aggiungere il consenso ai cookie sul tuo sito web utilizzando Cookiebot:
window.addEventListener('CookiebotOnAccept', function (e) {
if (Cookiebot.consent.marketing) {
smartsupp('marketingConsent', true);
}
if (Cookiebot.consent.statistics) {
smartsupp('analyticsConsent', true);
}
})
window.addEventListener('CookiebotOnDecline', function (e) {
smartsupp('marketingConsent', false);
smartsupp('analyticsConsent', false);
})
Sei ancora confuso? Contattaci tramite la chat box nella tua dashboard e saremo felici di aiutarti. Si prega di notare che il servizio clienti è incluso solo nei pacchetti a pagamento.

