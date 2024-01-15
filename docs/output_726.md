# Smartsupp — Consentement à l'utilisation de cookies
## Si le GDPR exige que votre site ait une politique en matière de cookies et une bannière de cookies correspondante pour informer les visiteurs des cookies p
Si le GDPR exige que votre site ait une politique en matière de cookies et une bannière de cookies correspondante pour informer les visiteurs des cookies présents sur votre site, vous devez activer le consentement aux cookies dans votre tableau de bord Smartsupp.
Nous avons préparé un tutoriel sur la manière de configurer les différents types de cookies que vous stockerez, et sur la manière d'ajuster les paramètres et le texte de votre barre de cookies en conséquence.
Pour comprendre les instructions ci-dessous, vous devez avoir des connaissances avancées en programmation. Si vous ne vous sentez pas qualifié, nous vous recommandons de l'envoyer au développeur ou au webmaster qui gère la barre de cookies sur votre site.
Si vous utilisez un dispositif Cookiebot pour gérer les cookies, veuillez faire défiler jusqu'à la fin de cet article pour voir quelques exemples de la façon dont vous pouvez gérer vos cookies.
Où activer le consentement aux cookies dans Smartsupp?
Vous trouverez les paramètres de consentement aux cookies à Paramètres >> Paramètres du compte >> Sécurité et confidentialité
Par défaut, le mode de consentement aux cookies est désactivé. Lorsqu'il est activé, seuls les cookies nécessaires sont stockés. Vous pouvez trouver une liste des cookies fonctionnels (nécessaires) ici :
Aide-Cookies fonctionnels Pour activer les cookies statistiques et marketing, vous devez déclencher un code spécifique. La valeur par défaut du consentement aux cookies analytiques et marketing est vide. Par conséquent, les statistiques et les cookies marketing ne sont pas stockés tant que le visiteur n'a pas donné son accord. Les listes des statistiques et des cookies marketing du chat box sont disponibles ici : Aide-Cookies analytiques Aide-Cookies de marketing
Ajoutez le code de consentement aux cookies sur votre site
Le consentement aux cookies est facile à mettre en œuvre avec JavaScript. Utilisez les boutons dans votre bannière de cookies pour gérer les statistiques Smartsupp et les cookies de marketing.
Ignorer le consentement
Si un visiteur ignore votre barre de cookies et ne confirme ni ne rejette le consentement, le scénario est le suivant :
Le cookie ssupp.visit restera à sa valeur initiale telle qu'elle était avant l'activation de la fonction Gérer les cookies. Il ne sera pas augmenté jusqu'à ce que le consentement soit accordé (cela n'affectera pas la valeur dans le tableau de bord visible par les opérateurs, seule cette valeur particulière dans le tableau de bord et les cookies sera différente).
L'enregistrement est désactivé
Aucun événement Google Analytics n'est envoyé
Les chatbots et les messages automatiques continueront à fonctionner sans changement.
Acceptation du consentement
Cookies statistiques
Si un visiteur accepte les cookies de statistiques, ajoutez :
smartsupp('analyticsConsent', true);
Ce code active les cookies, qui sont stockés pour les enregistrements et pour l'envoi d'événements Google Analytics.
Cookies de marketing
Si le visiteur accepte les cookies de marketing, ajoutez :
smartsupp('marketingConsent', true);
Ce code permet d'activer les cookies, qui sont utilisés pour mémoriser le nombre de visites effectuées précédemment par le visiteur. Ils sont nécessaires pour obtenir des informations sur le nombre de visites pour les opérateurs. Toutefois, si le visiteur ne donne pas son consentement, cela n'affectera pas la fonctionnalité des chatbots et des messages automatiques.
Tous les cookies
Si un visiteur accepte les deux / tous les cookies, ajoutez :
smartsupp('analyticsConsent', true);
smartsupp('marketingConsent', true);
Refuse du consentement
Cookies statistiques
Si un visiteur refuse les cookies de statistiques, ajoutez :
smartsupp('analyticsConsent', false);
Le refus du consentement suspendra immédiatement les enregistrements du visiteur ainsi que l'envoi d'événements à Google Analytics (en cas de ré-autorisation, l'enregistrement sera activé ainsi que l'envoi d'événements à Google Analytics).
Cookies de marketing
Si un visiteur refuse les cookies marketing, ajoutez :
smartsupp('marketingConsent', false);
En refusant de donner son consentement, le cookie ssupp.visit utilisé pour déterminer le nombre de visites est immédiatement supprimé. Cela n'affecte pas la fonctionnalité des chatbots et des messages automatiques.
Tous les cookies
Si un visiteur refuse tous les cookies, ajoutez :
smartsupp('analyticsConsent', false);
smartsupp('marketingConsent', false);
Exemple avec Cookiebot
Le script d'exemple ci-dessous vous aidera à ajouter le consentement des cookies sur votre site en utilisant les éléments suivants de Cookiebot:
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
Vous ne savez toujours pas quoi faire ? Contactez-nous via le chat box de votre tableau de bord et nous nous ferons un plaisir de vous contacter. Veuillez noter que le service clientèle n’est inclus que dans les formules payantes.

