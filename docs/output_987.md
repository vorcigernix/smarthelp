# Smartsupp — Gruppi
## Questa funzionalità è disponibile solo nel pacchetto PRO.
  Cosa sono i gruppi? I gruppi sono una funzionalità di Smartsupp, estremamente utile quando si h
Questa funzionalità è disponibile solo nel pacchetto PRO.
Cosa sono i gruppi?
I gruppi sono una funzionalità di Smartsupp, estremamente utile quando si hanno più agenti e si desidera instradare le chat da parti specifiche del tuo sito web all'agente specifico.
Se hai un sito web multilingue, puoi instradare le chat dalla parte inglese del tuo sito web al tuo agente che parla inglese e così via.
Stai utilizzando Smartsupp su più siti web e disponi di agenti diversi per ciascuno di questi siti web.
Stai vendendo diversi prodotti sul tuo sito web e desideri che i tuoi visitatori siano sempre serviti da uno specialista in quel particolare campo.
Come impostare i gruppi?
Impostazione dei gruppi
Troverai le impostazioni dei gruppi in Impostazioni → Gruppi
Successivamente, crea almeno 2 gruppi facendo clic sul pulsante Aggiungere gruppo nell'angolo in alto a destra dello schermo.
Aggiungi agenti ai gruppi
Assegna tutti i tuoi agenti ai gruppi creati. Anche un agente non assegnato può modificare lo stato della chat su tutto il tuo sito web, cosa che probabilmente non vuoi. Puoi facilmente assegnare gli agenti al gruppo specifico, semplicemente facendo clic sulle loro foto nelle impostazioni del gruppo. Il numero di agenti per ogni gruppo è illimitato.
Dopo aver assegnato tutti i tuoi agenti, puoi vedere chi si trova in quale gruppo nelle impostazioni come segue:
Nota: Dopo che tutti i tuoi agenti sono stati assegnati ai gruppi, devono AGGIORNARE la loro dashboard affinché le modifiche abbiano effetto.
Aggiungi il codice del gruppo al tuo sito web
Aggiungi il codice del gruppo proprio sotto il codice della chat su uno dei tuoi siti web o pagine per instradare le chat a questo gruppo. È necessario inserire il codice del gruppo dopo il codice della chat di Smartsupp.
Il tuo codice su quel sito web specifico sarà quindi simile a questo:
<script>
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'YOUR_SMARTSUPP_CHAT_CODE';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
</script>

<script>
smartsupp('group', 'GROUP_ID'); //group Support EN
</script>
Controlla le impostazioni
Se tutto è impostato correttamente e i tuoi agenti hanno aggiornato i loro dashboard, dovrebbero vedere il gruppo di ogni nuovo visitatore nell'elenco dei visitatori (possono vedere solo i visitatori dei gruppi a cui sono assegnati).
Utilizzo di gruppi con il modulo di contatto
Puoi utilizzare i gruppi in combinazione con il modulo di contatto, così i tuoi visitatori potranno scegliere con quale gruppo di agenti vogliono comunicare. Troverai questa opzione nelle Impostazioni → Chat box (1) → Modulo di contatto (2) → selezione del gruppo (3). È necessario avere almeno un gruppo prima di poter abilitare questa opzione.
Ecco come apparirà la chat box con la selezione del gruppo sul tuo sito web:
Sei ancora confuso? Contattaci tramite la chat box nella tua dashboard e saremo felici di aiutarti. Si prega di notare che il servizio clienti è incluso solo nei pacchetti a pagamento.

