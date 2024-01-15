# Smartsupp — Come attivare Google Analytics 4
## Info: Questa funzione è disponibile solo nei pacchetti STANDARD e PRO.   Nota: solo la nuova versione 3 del widget supporta Google Analytics 4.   Attiva Go
Info: Questa funzione è disponibile solo nei pacchetti STANDARD e PRO.
Nota: solo la nuova versione 3 del widget supporta Google Analytics 4.
Attiva Google Analytics nella dashboard di Smartsupp
Puoi misurare l'impatto che Smartsupp ha sul tasso di conversione e sul comportamento dei visitatori in Google Analytics. Puoi impostare se desideri inviare i dati a Google Analytics o meno nel tuo account.
Apri la sezione Impostazioni > Impostazioni dell'account > Google Analytics > Clicca sul pulsante Collegare
Quando attivi l'integrazione di Google Analytics vedrai 2 opzioni:
Rilevamento automatico ID proprietà
Rileverà automaticamente tutti gli ID di misurazione sulla pagina web e li utilizzerà per inviare eventi Smartsupp a Google Analytics.
Quando utilizzi solo 1 account Google Analytics, seleziona questa opzione. Per la maggior parte delle persone questa è l'opzione migliore.
Definisci manualmente l'ID
Nel caso in cui utilizzi più ID di misurazione, seleziona quale ID di misurazione desideri utilizzare per tenere traccia degli eventi Smartsupp. Questa opzione non funzionerà se hai precedentemente attivato l'integrazione con Google Analytics tramite API seguendo questo tutorial.
Se hai un caso d'uso più avanzato e stai utilizzando più account Google Analytics sul tuo sito web, puoi scegliere a quale account Google Analytics dovremmo inviare eventi da Smartsupp.
Seleziona quale è il migliore per te e fai clic su Salva. D'ora in poi, Smartsupp invierà eventi al tuo Google Analytics 4. C'è ancora un passaggio per avere un quadro completo di come Smartsupp sta influenzando i tuoi obiettivi.
Definire le definizioni personalizzate
Per il quadro completo devi andare alla tua proprietà Google Analytics 4 e definire 2 dimensioni personalizzate. Non preoccuparti, è molto facile.
Apri la tua proprietà Google Analytics 4 > Fai clic su admin > Fai clic su definizioni personalizzate > Fai clic su Crea dimensione personalizzata
Ora devi aggiungere 2 definizioni personalizzate
Categoria evento
Ora digita il nome della dimensione. Questo può essere personalizzato, ma ti consigliamo di nominarlo: event_category 
Ambito: assicurati che sia impostato su Evento 
Assegna una descrizione alla tua definizione personalizzata. Anche in questo caso dipende da te. Consigliamo qualcosa tipo: Categoria evento Smartsupp.
Scegli un parametro evento. Assicurati di scegliere event_category
Nota: Se non vedi event_category, è già definito o Google Analytics non ha ancora ricevuto alcun evento da Smartsupp. Puoi ancora definirlo.
Etichetta evento
Ora bisogna ripetere il processo per la dimensione event_label.
Nome dimensione: event_label 
Scopo: Evento 
Descrizione: Etichetta evento Smartsupp
Parametro evento: event_label
Dovresti finire con almeno 2 dimensioni definite, ci possono essere più dimensioni, ma per tenere traccia correttamente degli eventi da Smartsupp in Google Analytics 4, queste 2 devono essere definite nelle impostazioni.
Come misurare l'impatto di Smartsupp nel tuo Google Analytics
In questo momento stiamo lavorando a un tutorial dettagliato su diversi modi in cui puoi vedere l'impatto che Smartsupp ha sulle tue metriche. Lo pubblicheremo presto.
Sei ancora confuso? Contattaci tramite la chat box nella tua dashboard e saremo felici di aiutarti. Si prega di notare che il servizio clienti è incluso solo nei pacchetti a pagamento.

