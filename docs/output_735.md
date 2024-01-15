# Smartsupp — Groupes
## Cette fonction n'est disponible que dans le forfait PRO.
  Que sont les groupes ? Les groupes sont une fonctinnalité de Smartsupp, qui est extrêmement util
Cette fonction n'est disponible que dans le forfait PRO.
Que sont les groupes ?
Les groupes sont une fonctinnalité de Smartsupp, qui est extrêmement utile lorsque vous avez plusieurs agents, et que vous souhaitez acheminer les chats de parties spécifiques de votre site web vers l'agent spécifique.
Si vous avez un site web multilingue, vous pouvez acheminer les chats de la partie anglaise de votre site vers votre agent anglophone, etc.
Vous utilisez Smartsupp sur plusieurs sites web, et vous avez des agents différents pour chacun de ces sites.
Vous vendez différents produits sur votre site web et vous voulez que vos visiteurs soient toujours servis par un spécialiste dans ce domaine particulier.
Comment créer des groupes ?
Créer des groupes
Vous trouverez les paramètres des groupes sur le site → Groupes 
Ensuite, créez au moins 2 groupes en cliquant sur le bouton Ajouter un groupe (2) dans le coin supérieur droit de votre écran.
Ajouter des agent aux groupes
Assignez tous vos agents aux groupes créés. Même un seul agent non assigné peut changer le statut du chat sur l'ensemble de votre site web, ce que vous ne souhaitez probablement pas. Vous pouvez facilement assigner des agents à un groupe spécifique, en cliquant simplement sur leur photo dans les paramètres du groupe. Le nombre d'agents pour chaque groupe est illimité.
Une fois que vous avez assigné tous vos agents, vous pouvez voir qui fait partie de quel groupe dans des paramètres comme celui-ci :
Note: Une fois que tous vos agents sont affectés à des groupes, ils doivent ACTUALISER leur tableau de bord pour que les changements prennent effet.
Ajouter le code du groupe à votre site web
Ajoutez le code du groupe juste en dessous du code du chat sur l'un de vos sites ou pages web pour acheminer les chats vers le groupe. Vous devez insérer le code de groupe après le code de chat Smartsupp.
Votre code sur ce site web spécifique ressemblera alors à ceci :
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
Vérifier les paramètres
Si tout est mis en place correctement, et si vos agents ont rafraîchi leurs tableaux de bord, ils devraient voir le groupe de chaque nouveau visiteur dans la liste des visiteurs (ils ne peuvent voir que les visiteurs des groupes auxquels ils sont assignés).
Utilisation de groupes avec le formulaire de contact
Vous pouvez utiliser les groupes en combinaison avec un formulaire de contact, de sorte que vos visiteurs pourront choisir le groupe d'agents avec lequel ils doivent communiquer. Vous trouverez cette option dans les Paramètres → Chat box (1) → Formulaire de contact (2) → Sélection du groupe (3). Vous devez avoir créé au moins un groupe avant de pouvoir activer cette option.
Voici à quoi ressemblera le fenêtre de chat avec la sélection de groupe sur notre site web :
Vous ne savez toujours pas quoi faire ? Contactez-nous via le chat box de votre tableau de bord et nous nous ferons un plaisir de vous contacter. Veuillez noter que le service clientèle n’est inclus que dans les formules payantes.

