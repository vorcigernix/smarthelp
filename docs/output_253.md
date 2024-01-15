# Smartsupp — WordPress
## Integrazione della Live Chat di Smartsupp Non hai un account Smartsupp ancora? Iscriviti gratis  in solo 2 minuti.   1. Il nostro plugin La possibilità più
Integrazione della Live Chat di Smartsupp
1. Il nostro plugin
La possibilità più semplice è installare il nostro plugin e accedere al tuo account.
Installare il plugin
Plugins > Add new, trova Smartsupp Live Chat e clicca su Install Now. Una volta installato il plugin, clicca su Activate.
Accedere all'account Smartsupp
Puoi Creare un account gratis oppure Connettere un account già esistente.
Se tutto è a posto vedi questa pagina.
2. Inserisci il codice manualmente
Nel caso in cui non voglia usare il plugin è possibile inserire il codice direttamente nel tema WordPress.
Attenzione: puoi danneggiare il tuo sito! Invia questo tutorial al tuo web developer.
Copia il codice
Il tuo codice è in Smartsupp > Settings > Chat box > Chat code.
Inserisci il codice
Appearance > Editor > Theme Header (header.php) > inserisci il codice > Update File
3. Avanzate modifiche personalizzate
Non vuoi usare il plugin o hai inserito il codice manualmente e hai bisogno di avanzate modifiche personalizzate?
Installa "Scripts n Styles"
Per impostazione predefinita, quando installa il nostro plugin o inserisci il nostro codice nell'intestazione, la chat box viene visualizzata su tutte le pagine. Nel caso in cui abbia bisogno che il codice venga visualizzato su pagine specifiche o, forse, solamente su una pagina, installa il plugin WordPress delle terze parti Scripts n Styles.
Copia il codice
Il tuo codice è in Smartsupp > Settings > Chat box > Chat code.
Aggiusta il codice
È necessario fare alcune modifiche piccole nel nostro codice preimpostato.
Attenzione, oppure non funzionerà.
Cancella queste righe dal nostro codice:
<!-- Smartsupp Live Chat script -->
<script type="text/javascript">
</script>
Il tuo codice originale ...
<!-- Smartsupp Live Chat script -->
<script type="text/javascript">
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
window.smartsupp||(function(d) {
 var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
 s=d.getElementsByTagName('script')[0];c=d.createElement('script');
 c.type='text/javascript';c.charset='utf-8';c.async=true;
 c.src='//www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
</script>
... deve avere l'aspetto che vedi qui sotto. SOLO PER ESEMPIO. NON COPIARE!
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
window.smartsupp||(function(d) {
 var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
 s=d.getElementsByTagName('script')[0];c=d.createElement('script');
 c.type='text/javascript';c.charset='utf-8';c.async=true;
 c.src='//www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
Inserisci il codice
Vai a Pages e modifica la pagina desiderata. In basso di Scripts n Styles inserisci il codice modificato.
Clicca su Update Scripts e Update la tua pagina.
Smartsupp non può essere installato su WordPress.com
Il codice chat non può essere installato su WordPress.com perché plugin personalizzati non possono essere installati sulla piattaforma. Tra l'altro, JavaScript personalizzato viene bloccato su questi tipi di siti.
Nota: Se utilizzi un account Google per accedere a Smartsupp, non sarà possibile accedere allo stesso modo al plugin di WordPress.
Puoi inserire il codice della chat manualmente oppure puoi cliccare su "Ho dimenticato la password" in Smartsupp e impostare il tuo login via email.
Sei ancora confuso? Contattaci tramite la chat box nella tua dashboard e saremo felici di aiutarti. Si prega di notare che il servizio clienti è incluso solo nei pacchetti a pagamento.

