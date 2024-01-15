# Smartsupp — WordPress
## Smartsupp Intégration de Chat en direct Vous n'avez pas encore votre compte de Smartsupp ? Inscrivez-vous gratuit en deux minutes seulement.
  Utiliser not
Smartsupp Intégration de Chat en direct
Utiliser notre plugin
Insérer le code manuellement
Changements personnalisés avancés
1. Utiliser notre plugin
L'option la plus simple est d'installer notre plugin et de vous connecter à votre compte.
Installer le plugin
Plugins > Ajouter un nouveau, recherchez Smartsupp Live Chat et cliquer Installer Maintenant. Une fois le plugin installé, cliquez sur Activer.
Connectez-vous à votre compte Smartsupp
Vous pouvez Créer un compte gratuit ou Connecter un compte existant.
Si tout va bien, vous verrez cette page.
2. Insérer le code manuellement
Si vous ne souhaitez pas utiliser de plug-in, vous pouvez insérer du code directement dans le thème WordPress.
Attention, vous pouvez détruire votre site! Envoyez ce tutoriel à votre webmaster.
Copier le code
Votre code est dans Smartsupp > Paramètres > Chat box > Code de chat .
Insérer le code
Apparence> Éditeur> L'header de thème (header.php)> insérer le code> Mise à jour
3. Changements personnalisés avancés
Vous ne voulez pas utiliser le plugin ou vous avez inséré du code manuellement et avez besoin de modifications personnalisées avancées?
Installer "Scripts n Styles"
Par défaut, lorsque vous installez notre plugin ou insérez notre code dans l'en-tête, il est affiché dans toutes les pages. Si vous avez besoin d'afficher notre code sur certaines pages ou sur une seule page, installez un plugin WordPress tiers Scripts n Styles.
Copier le code
Votre code est dans Smartsupp > Paramètres > Chat box > Code de chat .
Ajuster le code
Vous devez apporter quelques petites modifications à notre code par défaut.
Lisez attentivement ou cela ne fonctionnera pas.
Dans notre code, supprimez ces lignes.
<!-- Smartsupp Live Chat script -->
<script type="text/javascript">
</script>
Votre code d'origine ... 
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
... doit ressembler à ce que vous voyez ci-dessous. EXEMPLE SEULEMENT. NE PAS COPIER!
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
window.smartsupp||(function(d) {
 var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
 s=d.getElementsByTagName('script')[0];c=d.createElement('script');
 c.type='text/javascript';c.charset='utf-8';c.async=true;
 c.src='//www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
Insérer le
Allez dans Pages, éditez la page souhaitée et sous le contenu dans Scripts n Styles insère le code modifié.
Cliquez sur Mettre à jour les scripts et mettez à jour votre page.
WordPress.com
Smartsupp ne peut pas être installé sur WordPress.com 
Le code de chat ne peut pas être installé sur un site Web WordPress.com gratuit hébergé, car des plug-ins personnalisés ne peuvent pas être installés sur la plate-forme. En outre, il est interdit d’intégrer du code JavaScript personnalisé dans ces types de sites.
Remarque: Si vous utilisez un compte Google pour vous connecter à Smartsupp, il ne sera pas possible de vous connecter au plugin WordPress de la même manière. 
Vous pouvez soit insérer le code de chat manuellement, soit cliquer sur "mot de passe oublié" dans Smartsupp et configurer votre connexion par e-mail.
Vous ne savez toujours pas quoi faire ? Contactez-nous via le chat box de votre tableau de bord et nous nous ferons un plaisir de vous contacter. Veuillez noter que le service clientèle n’est inclus que dans les formules payantes.

