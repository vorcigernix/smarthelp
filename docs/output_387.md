# Smartsupp — Pourquoi ne puis-je pas voir le chat sur mon site Web?
## Chat caché dans les paramètres Assurez-vous que la boîte de chat n’est pas cachée en mode hors ligne(1), ni complètement cachée(2) dans Paramètres > Cha
Chat caché dans les paramètres
Assurez-vous que la boîte de chat n’est pas cachée en mode hors ligne(1), ni complètement cachée(2) dans Paramètres > Chat box > Options
Vous êtes bloqué
Assurez-vous de ne pas être bloqué en tant que visiteur dans votre compte Smartsupp.
Vérifiez vos paramètres et voyez si votre adresse IP ne figure pas dans la liste des adresses IP bloquées.
Essayez également d’utiliser le filtre «visiteurs bloqués» dans la liste des visiteurs et de voir s’il ya des visiteurs bloqués. Si vous êtes parmi eux, vous pouvez vous débloquer.
Le code de chat n'est pas inséré ou inséré de manière incorrecte
Ouvrez le code source de votre site Web ou de votre console. Ouvrez le source de la page (dans Chrome, le raccourci est CTRL + U) et essayez de rechercher (CTRL + F) pour smartsupp. En l’absence de résultats, cela signifie que le code de chat n’est pas inséré dans le code du site Web. Dans ce cas, vous devrez contacter votre développeur pour insérer le code de chat. 
Si vous utilisez un gestionnaire de balises, par exemple, Google Tag Manager, assurez-vous qu'il fonctionne correctement. Dans la plupart des cas, vous devriez pouvoir trouver le code de chat dans les éléments de votre site Web (Appuyez sur CTRL +SHIFT + J, cliquez sur l'onglet Éléments(1) et recherchez smartsupp(2)).
Assurez-vous également que vous n’utilisez pas plus d’un code de chat sur votre site Web.
Erreur dans le code
Assurez-vous qu'il ne manque aucun signe dans le code de chat. Idéalement, copiez le code de chat directement à partir des Paramètres. Vous pouvez essayer par exemple Diffchecker pour vérifier si le code de votre site Web est le même que le code original. Le problème le plus courant est qu’il manque un trait de soulignement (_) dans le code et vous pouvez voir une erreur dans la console du navigateur (CTRL + SHIFT + J)
Problème avec le site CSS
Lorsque le chat n’est pas affiché sur votre site Web, même si le code du chat est correctement inséré, c’est que vous avez configuré la propriété d’affichage for the iframe to none (display: none). pour l’iframe sur aucun (display: none). Un exemple est présenté dans l'image ci-dessous. Si tel est le cas, votre développeur devra modifier le code CSS du site Web.
Z-index de certains éléments sur le site plus de 1000000
La propriété z-index spécifie l'ordre de pile d'un élément.
Un élément avec un ordre de pile supérieur est toujours devant un élément avec un ordre de pile inférieur.
Ainsi, si vous avez un élément dont l'indice-z est supérieur à 1M, il peut couvrir le widget.
Javascript est désactivé dans le navigateur
Javascript est activé par défaut dans tous les navigateurs, mais si vous l'avez désactivé, vous devrez l'activer à nouveau. Vous trouverez des informations sur les options d'activation de Javascript dans différents navigateurs dans ce tutorial.
Environnement de test
Votre site Web est dans un environnement de test (a.k.a. localhost), un site Web restreint, un intranet ou situé sur un VPN privé. Le site Web doit être entièrement accessible depuis Internet pour garantir la fonctionnalité à 100% de Smartsupp.
Si vous utilisez une position de boîte de chat personnalisée via l'AP, et que vous avez décidé de modifier le décalage du widget, assurez-vous qu'il est visible, même sur des écrans plus petits. Si le décalage est trop grand (ou trop petit), le chat peut être partiellement ou totalement invisible.
Politique de sécurité du contenu
Si vous utilisez la Politique de sécurité du contenu sur votre site Web, assurez-vous que tous nos domaines figurent sur la liste blanche de votre CSP.
smartsupp.com
smartsupp.co
smartsuppchat.com
cdn77.org
smartsuppcdn.com
En cas de problème avec la stratégie de sécurité du contenu, vous devez voir dans la console Chrome (CTRL + SHIFT + J) que le script enfreint la directive relative à la stratégie de sécurité du contenu.
La magie
Si vous ne trouvez pas le problème, veuillez nous contacter via le chat box de votre tableau de bord et nous fournir autant d'informations que possible (nous aurons besoin de l'adresse de votre site Web et de votre adresse e-mail d'enregistrement Smartsupp). Nous allons l'examiner.
Vous ne savez toujours pas quoi faire ? Contactez-nous via le chat box de votre tableau de bord et nous nous ferons un plaisir de vous contacter. Veuillez noter que le service clientèle n’est inclus que dans les formules payantes.

