# Smartsupp — Connexion Google Analytics
## Cette fonction est disponible uniquement dans les packs STANDARD et PRO.   Nous vous recommandons d'utiliser notre nouveau chat box (sorti en 2023). Si vou
Cette fonction est disponible uniquement dans les packs STANDARD et PRO.
Nous vous recommandons d'utiliser notre nouveau chat box (sorti en 2023). Si vous n'êtes pas encore passé à ce nouveau chat box, contactez notre support client à partir d'un chat dans votre tableau de bord.
Remarque: Seule la nouvelle version du chat box prend en charge Google Analytics 4.
Mesurer l'impact
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
Informations de base
Smartsupp supporte actuellement l'ancien UA (universal Analytics) et le nouveau GA4 (Google Analytics version 4).
Vous pouvez combiner plusieurs codes de suivi GA > Smartsupp envoie automatiquement les événements d'analyse GA à tous les codes de suivi GA sur le site Web > utiliser l'API pour un suivi GA spécifique (plus d'informations ci-dessous).
Le chet box (notre dernière version) a une nouvelle catégorie d'événement - Smartsupp_v3 
Smartsupp divise les actions d'événement pour le Chatbot, les messages automatiques et les déclencheurs - chaque automatisation a sa propre étiquette d'action.
Smartsupp a également renommé certains événements (plus d'informations ci-dessous).
Les événements GA sont envoyés lorsque le chat box est fermé ou ouvert.
Les événements GA ne sont envoyés qu'une seule fois si le visiteur a ouvert le même site web dans plusieurs onglets.
Google analytics version 4
Tutoriel de mise à jour GA4 : [GA4] Passez à Google Analytics 4.
Actions de l'événement
Dans Google Analytics, le suivi des événements est composé hiérarchiquement de 4 éléments : Catégorie, Action, Tag et Valeur. Pour nos besoins, nous n'utilisons que les 3 premiers.
Smartsupp envoie des données à Google Analytics sous forme d'événements. Au total, nous envoyons 17 actions d'événement qui vous aident à surveiller le comportement des utilisateurs de chat. Vous pouvez trouver toutes ces actions d'événement dans la catégorie d'événement = Smartsupp_v3.
Avec le nouveau chat box Smartsupp (sortie en 2023), nous avons mis à jour et ajouté plus d'événements GA. Ils sont tous envoyés en anglais uniquement.
Actions et étiquettes d'événements (description)
Note : Pour une implémentation personnalisée de GA (GTM), utilisez notre API
Catégorie
Action
Étiquette
Explanation
Smartsupp_v3
Chatbot_sent
Nom du chatbot
chatbot envoyé au chat box
Chatbot_interaction
Nom du chatbot
la première interaction avec le chatbot
Chatbot_button_interaction
Réponse aux boutons
interaction avec un bouton concret de réponse dans un chatbot
Chatbot_viewed
Nom du chatbot
ouvrir le chat box ou le bouton popup cliquer
Chatbot_visitor_reaction
Nom du chatbot
réaction des visiteurs à un chatbot concret
Auto_message_sent
Nom du message automatique
message automatique envoyé au chat box
Auto_message_viewed
Nom du message automatique
ouvrir le chat box ou le bouton popup cliquer
Auto_message_visitor_reaction
Nom du message automatique
réaction du visiteur au message automatique concret
Visitor_started_conversation
(non défini)
le visiteur envoie un message au chat (uniquement sans automatisation préalable du chat)
Agent_served_conversation 
Nom de l'agent
l'agent se joint à la conversation
Auth_form_filled
(non défini)
rempli et envoyé un formulaire de contact
Offline_message_sent
(non défini)
un visiteur a envoyé un message à un chat box hors ligne 
Feedback_sent
Bon/Normal/Mauvais
sélectionner le sourire dans le feedback
Feedback_text_sent
Texte concret
remplir le texte et envoyer un retour d'information
Trigger_message_sent
Nom du déclencheur
ancien déclencheur envoyé au chat box
Trigger_message_viewed
Nom du déclencheur
ouvrir le chat box ou le bouton popup cliqué
Trigger_visitor_reaction
Nom du déclencheur
réaction du visiteur à un déclencheur concret
Que signifient ces événements ?
Chatbot_sent
l'événement est envoyé lorsque le visiteur reçoit un chatbot dans le chat box
un pour chaque chatbot déclenché
Chatbot_interaction
l'événement est envoyé lorsqu'un visiteur répond à un chatbot
il ne s'agit que de la première interaction, jusqu'à une fois par session
Chatbot_button_interaction
l'événement est envoyé chaque fois que l'on clique sur le bouton de réponse du chatbot
éventuellement plusieurs fois par session
Chatbot_viewed
l'événement est envoyé si le visiteur ouvre le chat box ou clique sur le bouton Let's chat dans la fenêtre contextuelle de le chat box après avoir reçu un chatbot.
Chatbot_visitor_reaction
l'événement est envoyé si le visiteur répond par un message au chatbot
dans le cas de plusieurs chatbots, un événement de réaction est envoyé au chatbot concret
Auto_message_sent
l'événement est envoyé lorsque le visiteur reçoit un message automatique dans le chat box
Auto_message_viewed
l'événement est envoyé si le visiteur ouvre le chat box ou clique sur le bouton Let's chat dans la fenêtre contextuelle du chat box après avoir reçu un message automatique.
Auto_message_visitor_reaction
l'événement est envoyé si le visiteur répond par un message de chat au message automatique
en cas d'automatisation multiple (chatbots, messages automatiques), l'événement de réaction est envoyé au dernier.
Visitor_started_conversation
l'événement est envoyé si le visiteur envoie un message au chat box, mais que le chat box n'est pas automatisé auparavant (chatbot, message automatique).
Agent_served_conversation
l'événement est envoyé lorsque l'agent se joint à la conversation
Auth_form_filled
l'événement est envoyé lorsque le visiteur remplit et envoie le formulaire de contact
Offline_message_sent
l'événement est envoyé lorsque le visiteur envoie un message de chat au chat box hors ligne
Feedback_sent
l'événement est envoyé lorsque le visiteur sélectionne un emoji dans le formulaire d'évaluation
Feedback_text_sent
l'événement est envoyé lorsque le visiteur remplit et envoie du texte dans le formulaire d'évaluation
Trigger_message_sent
l'événement est envoyé lorsque le visiteur reçoit un déclencheur dans le chat box
Trigger_message_viewed
l'événement est envoyé si le visiteur ouvre le chat box ou clique sur le bouton Let's chat dans la fenêtre contextuelle de le chat box après que le visiteur a reçu un déclencheur.
Trigger_visitor_reaction
l'événement est envoyé si le visiteur répond par un message de chat au déclencheur
Créer un nouveau segment
Pour GA UA : Il ne vous reste plus qu'à créer un nouveau segment pour filtrer les données des visiteurs qui discutent. Vous pouvez créer un segment pour tout type d'action d'événement Smartsupp. La mesure la plus utile est l'action de l'événement "Conversation".
Comparer le comportement
Pour GA UA : Lorsque vous avez créé le segment, vous pouvez voir et comparer le comportement des visiteurs en ligne par rapport à l'ensemble des visiteurs. Dans l'exemple, vous voyez qu'il y a eu 71 visiteurs qui ont participé à une conversation contre 3796 visiteurs au total. Vous pouvez ainsi calculer que 1,9 % des visiteurs engagent une conversation avec vous et obtenir plus d'informations.
Conversions
Pour GA UA : La chose la plus importante que vous pouvez mesurer est l'impact du chat de Smartsupp sur les conversions (objectifs). Vous pouvez voir le taux de conversion des visiteurs qui ont participé au chat par rapport à votre taux de conversion global.
API
spécifie l'ID du traqueur concret pour GA4 ou UA : https://docs.smartsupp.com/chat-box/google-analytics/ 
Cookie consent
Suivez les étapes décrites ici : https://www.smartsupp.com/help/cookie-consent/ 
Événements pour l'ancienne version de Smartsupp
Pour l'ancienne version de Smartsupp (ancienne version du chat box), une version différente des événements sera affichée :
Triggered message sent
L'événement est envoyé chaque fois qu'un visiteur reçoit un message automatique (déclencheur). Le nombre indique combien de personnes ont reçu le message automatique. Si vous voulez savoir combien de personnes ont répondu au message automatique (déclencheur), consultez l'événement : "Déclenchement d'une conversation".
- Event label = title of the triggered message in your dashboard
Trigger message viewed
Lorsque le visiteur réagit (ouvre la boîte de dialogue) au message déclenché.
- Event label = titre du message déclenché dans votre tableau de bord
Conversation served
Lorsqu'un message est échangé entre un visiteur et un agent (ou chatbot).
- Event label = nom de l'agent
Auth form filled
Lorsque le visiteur remplit le formulaire de contact.
- Aucune étiquette d'événement n'a été attribuée
Offline message sent
Lorsqu'un visiteur envoie un message hors ligne.
- Aucune étiquette d'événement n'a été attribuée
Feedback sent
Lorsque le visiteur remplit et envoie un formulaire de retour d'information.
- Étiquette de l'événement = niveau d'évaluation (1, 3, 5 = mauvais, normal, bon)
Chatbot sent
L'événement est envoyé lorsque le visiteur reçoit un chatbot ou un message automatisé dans le chat box.
- Étiquette de l'événement = nom du chatbot ou du message automatisé avec lequel l'utilisateur a interagi
Chatbot button interaction
L'événement est envoyé chaque fois que le bouton du chatbot est cliqué (éventuellement plusieurs fois par session).
- Étiquette de l'événement = nom du chatbot ou du message automatisé avec lequel l'utilisateur a interagi
Chatbot interaction
Un événement est envoyé lorsqu'un visiteur répond à un chatbot ou à un message automatisé (il s'agit uniquement de la première interaction, jusqu'à 1 fois par session).
- Étiquette de l'événement = nom du chatbot ou du message automatisé avec lequel l'utilisateur a interagi
Chatbot started conversation
L'événement est envoyé si le visiteur répond par un message au chatbot ou par un message automatisé.
- Étiquette de l'événement = nom du chatbot ou du message automatisé avec lequel l'utilisateur a interagi
Renamed old events:
New
Old
Chatbot_sent
Chatbot_interaction
Chatbot_button_interaction
Chatbot_viewed
Chatbot message viewed
Chatbot_visitor_reaction
Chatbot started conversation
Auto_message_sent
Auto_message_viewed
Auto_message_visitor_reaction
Auto message started a conversation
Visitor_started_conversation
Agent_served_conversation
Conversation served
Auth_form_filled
Offline_message_sent
Feedback_sent
Feedback_text_sent
Feedback sent
Trigger_message_sent
Triggered message sent
Trigger_message_viewed
Triggered message viewed
Trigger_visitor_reaction
Trigger started conversation
Bravo ! Tout est en place et fonctionne.
Vous avez des questions, des suggestions d'événements supplémentaires à mesurer ou vous souhaitez partager vos données issues de Google Analytics ? N'hésitez pas à nous en faire part !
Vous ne savez toujours pas quoi faire ? Contactez-nous via le chat box de votre tableau de bord et nous nous ferons un plaisir de vous contacter. Veuillez noter que le service clientèle n’est inclus que dans les formules payantes.

