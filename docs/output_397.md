# Smartsupp — Perché non posso vedere la chat sul mio sito?
## Chat nascosta nelle impostazioni Assicurati che la chat box non sia nascosta mentre offline(1) oppure nascosta completamente(2) nelle Impostazioni > Cha
Chat nascosta nelle impostazioni
Assicurati che la chat box non sia nascosta mentre offline(1) oppure nascosta completamente(2) nelle Impostazioni > Chat box > Opzioni
Sei sulla lista dei bloccati
Assicurati di non essere sulla lista dei bloccati:
Controlla le tue impostazioni e guarda se il tuo indirizzo IP non è sulla lista degli indirizzi IP bloccati.
Inoltre, cerca di usare il filtro per “visitatori bloccati” nella lista dei visitatori e guarda se ci sono alcuni visitatori bloccati. Se ci sei anche tu, puoi sbloccarti.
Il codice della chat non è inserito affatto oppure è inserito scorrettamente
Apri il codice sorgente del tuo sito oppure la console. Apri la sorgente della pagina (in Chrome, la scorciatoia è CTRL+U) e provi a cercare (CTRL+F) smartsupp. Se non trovi niente significa che il codice della chat non è inserito nel codice del tuo sito web. In questo caso sarebbe meglio contattare il tuo web developer per inserire il codice della chat. 
Se utilizzi tag manager, ad es. Google Tag Manager, assicurati che funzioni correttamente. Nella maggior parte dei casi dovresti essere capace di trovare il codice della chat negli elementi del tuo sito (Premi CTRL+SHIFT+J, clicca su Elements(1) e cerca smartsupp(2))
Anche, assicurati di non utilizzare più di un codice sul tuo sito.
Errore nel codice
Assicurati che nel codice non manchino dei charratteri. Idealmente, copia il codice della chat direttamente dalle Impostazioni. Puoi provare ad es. Diffchecker per controllare se il codice sul tuo sito è lo stesso come l'originale. Il problema più comune è che nel codice manca un trattino basso (_) e in questo caso puoi vedere un errore nella console del browser (CTRL+SHIFT+J).
Problems con CSS del sito
Un caso tipico quando la chat non è visualizzata sul sito anche se il codice è inserito correttamente è che hai impostato la proprietà di visualizzazione per l'iframe su none (display: none). Puoi vedere un esempio nello screenshot più sotto. Se questo è il problema il tuo developer deve cambiare CSS del sito.
Z-index di alcuni elementi sul sito è superiore a 1000000
La proprietà z-index specifica l'ordine di sovrapposizione di un elemento.
Elemento con l'ordine di sovrapposizione superiore è sempre davanti a un elemento con l'ordine di sovrapposizione minore.
Allora, se c'è un elemento con la z-index più alta di 1M può coprire il widget.
Javascript è disabiliato nel browser
Javascript è abilitato in tutti i browser per impostazione predefinita, ma nel caso in cui l'abbia disabilitato devi abilitarlo nuovamente. Puoi leggere delle opzioni su come abilitare Javascript in browser diversi in questo in this tutorial.
Ambiente di test
Il tuo sito è nell'ambiente di test (ossia localhost), un sito limitato, intranet, oppure è collocato su una VPN privata. Il sito deve essere accessibile pienamente da Internet per assicurare la funzionalità di Smartsupp per 100 %.
Se utilizzi la posizione della chatbox personalizzata tramite le API e vorresti cambiare l'offset del widget assicurati che sia visibile anche sui schermi piccoli. Se l'offset è troppo grande (o troppo piccolo) la chat potrebbe essere parzialmente o completamente invisibile.
Contect Security Policy
Se utilizzi la Content security policy sul tuo sito web assicurati che tutti i nostri domini siano sulla whitelist della tua CSP.
smartsupp.com
smartsuppchat.com
cdn77.org
smartsuppcdn.com
Se c'è un problema con la Content security policy dovresti vedere nella console Chrome (CTRL+SHIFT+J) che lo script viola la direttiva della Content security policy.
Magia
Nel caso in cui non riesca trovare il problema per favore, contattaci tramite la chat box nella tua dashboard e forniscici le più informazioni possibile (abbiamo bisogno dell'indirizzo del tuo sito web e la mail di registrazione Smartsupp). Ci diamo un'occhiata.
Sei ancora confuso? Contattaci tramite la chat box nella tua dashboard e saremo felici di aiutarti. Si prega di notare che il servizio clienti è incluso solo nei pacchetti a pagamento.

