# Smartsupp — Google Analytics-Verbindung
## Diese Funktion ist nur in den Paketen STANDARD und PRO verfügbar.    Wir empfehlen die Nutzung unserer neuen Chatbox (veröffentlicht im Jahr 2023). Wenn Si
Diese Funktion ist nur in den Paketen STANDARD und PRO verfügbar. 
Wir empfehlen die Nutzung unserer neuen Chatbox (veröffentlicht im Jahr 2023). Wenn Sie noch nicht zu dieser neuen Chatbox gewechselt haben, kontaktieren Sie unseren Kundensupport über den Chat in Ihrem Dashboard.
Hinweis: Nur die neue Chatbox-Version unterstützt Google Analytics 4.
Auswirkungen messen
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
Grundlegende Informationen
Smartsupp unterstützt derzeit das neue GA4 (Google Analytics Version 4) und das alte UA (Universal Analytics). Abhängig von der Chatbox-Version.
Sie können mehrere GA-Tracking-Codes kombinieren > Smartsupp sendet automatisch GA-Analyseereignisse an alle GA-Tracking-Codes auf der Website > verwenden Sie API für bestimmte GA-Tracker (weitere Informationen unten).
Die Chatbox (unsere neueste Version) hat eine neue Ereigniskategorie – Smartsupp_v3 
Smartsupp unterteilt Ereignisaktionen in Chatbot, automatische Nachrichten und Triggers – jede Automatisierung hat ihr eigenes Aktionslabel.
Smartsupp hat auch einige Events umbenannt (weitere Informationen unten).
GA-Ereignisse werden gesendet, wenn die Chatbox geschlossen oder auch geöffnet wird.
GA-Ereignisse werden nur einmal gesendet, wenn der Besucher dieselbe Website in mehreren Browser-Tabs geöffnet hat.
Google Analytics Version 4
GA4-Upgrade-Tutorial: [GA4] Wechseln Sie zu Google Analytics 4.
Ereignisaktionen
In Google Analytics besteht die Ereignisverfolgung hierarchisch aus vier Elementen: Kategorie, Aktion, Bezeichnung und Wert. Für unsere Bedürfnisse verwenden wir nur die ersten drei.
Smartsupp sendet Daten als Ereignisse an Google Analytics. Insgesamt versenden wir 17 Ereignisaktionen, die Ihnen helfen, das Verhalten chattender Benutzer zu überwachen. Alle diese Ereignisaktionen finden Sie in der Ereigniskategorie = Smartsupp_v3.
Mit der neuen Smartsupp-Chatbox (veröffentlicht im Jahr 2023) haben wir weitere GA-Events aktualisiert und hinzugefügt. Sie werden alle nur auf Englisch verschickt.
Ereignisaktionen und -bezeichnungen (Beschreibung)
Hinweis: Für die benutzerdefinierte GA-Implementierung (GTM) verwenden Sie unsere API
Kategorie
Aktion
Label
Erklärung
Smartsupp_v3
Chatbot_sent
Chatbot-Name
Chatbot an die Chatbox gesendet
Chatbot_interaction
Chatbot-Name
die erste Interaktion mit einem Chatbot
Chatbot_button_interaction
Schaltfläche Antwort
Konkrete Schaltflächenantwort-Interaktion im Chatbot
Chatbot_viewed
Chatbot-Name
die Chatbox öffnen oder auf die Popup-Schaltfläche klicken 
Chatbot_visitor_reaction
Chatbot-Name
Besucherreaktion auf konkreten Chatbot
Auto_message_sent
Name der automatischen Nachricht
Automatische Nachricht an die Chatbox gesendet
Auto_message_viewed
Name der automatischen Nachricht
die Chatbox öffnen oder auf die Popup-Schaltfläche klicken
Auto_message_visitor_reaction
Name der automatischen Nachricht
Reaktion des Besuchers auf die konkrete Auto-Nachricht
Visitor_started_conversation
(nicht eingestellt)
Besucher sendet eine Nachricht an den Chat (nur ohne vorherige Automatisierung im Chat)
Agent_served_conversation
Name des Agenten
Agent beteiligt sich am Gespräch
Auth_form_filled
(nicht eingestellt)
Kontaktformular ausgefüllt und abgeschickt
Offline_message_sent
(nicht eingestellt)
Ein Besucher hat eine Nachricht an eine Offline-Chatbox gesendet
Feedback_sent
Gut/Normal/Schlecht
Emoji im Feedback auswählen
Feedback_text_sent
Konkreter Text
Text ausfüllen und Feedback senden
Trigger_message_sent
Trigger-Name
Alter Trigger an die Chatbox gesendet
Trigger_message_viewed
Trigger-Name
die Chatbox öffnen oder auf die Popup-Schaltfläche klicken
Trigger_visitor_reaction
Trigger-Name
Reaktion des Besuchers auf einen konkreten Trigger
Was bedeuten diese Ereignisse?
Chatbot_sent
das Ereignis wird gesendet, wenn der Besucher einen Chatbot in der Chatbox erhält
ein für jeden ausgelösten Chatbot
Chatbot_interaction
das Ereignis wird gesendet, wenn ein Besucher auf einen Chatbot antwortet
dies ist nur die erste Interaktion, maximal einmal pro Sitzung
Chatbot_button_interaction
das Ereignis wird jedes Mal gesendet, wenn auf die Chatbot-Schaltfläche geklickt wird
möglicherweise mehrmals pro Sitzung
Chatbot_viewed
das Ereignis wird gesendet, wenn der Besucher die Chatbox öffnet oder im Chatbox-Popup auf die Schaltfläche „Lass uns chatten“ klickt, nachdem der Besucher einen Chatbot erhalten hat
Chatbot_visitor_reaction
das Ereignis wird gesendet, wenn der Besucher mit einer Chat-Nachricht an den Chatbot antwortet
bei mehreren Chatbots wird ein Reaktionsereignis an den konkreten Chatbot gesendet
Auto_message_sent
das Ereignis wird gesendet, wenn der Besucher eine automatische Nachricht in der Chatbox erhält
Auto_message_viewed
das Ereignis wird gesendet, wenn der Besucher die Chatbox öffnet oder im Chatbox-Popup auf die Schaltfläche „Lass uns chatten“ klickt, nachdem der Besucher eine automatische Nachricht erhalten hat
Auto_message_visitor_reaction
das Ereignis wird gesendet, wenn der Besucher mit einer Chat-Nachricht auf die automatische Nachricht antwortet
bei mehreren Automatisierungen (Chatbots, automatische Nachrichten) wird das Reaktionsereignis beim letzten gesendet
Visitor_started_conversation
das Ereignis wird gesendet, wenn der Besucher eine Chat-Nachricht an die Chat-Box sendet, die Chat-Box jedoch zuvor keine Automatisierung aufweist (Chatbot, automatische Nachricht)
Agent_served_conversation
das Ereignis wird gesendet, wenn der Agent an der Unterhaltung teilnimmt
Auth_form_filled
das Ereignis wird gesendet, wenn der Besucher das Kontaktformular ausfüllt und absendet
Offline_message_sent
das Ereignis wird gesendet, wenn der Besucher eine Chat-Nachricht an die Offline-Chatbox sendet
Feedback_sent
das Ereignis wird gesendet, wenn der Besucher Emoji im Bewertungsformular auswählt
Feedback_text_sent
das Ereignis wird gesendet, wenn der Besucher das Bewertungsformular ausfüllt und Text-Feedback sendet
Trigger_message_sent
das Ereignis wird gesendet, wenn der Besucher einen Trigger in der Chatbox erhält
Trigger_message_viewed
das Ereignis wird gesendet, wenn der Besucher die Chatbox öffnet oder im Chatbox-Popup auf die Schaltfläche „Lass uns chatten“ klickt, nachdem der Besucher einen Trigger erhält
Trigger_visitor_reaction
das Ereignis wird gesendet, wenn der Besucher mit einer Chat-Nachricht auf den Trigger antwortet
Erstellen Sie ein neues Segment
Für GA UA: Jetzt müssen Sie nur noch ein neues Segment erstellen, um die Daten der chattenden Besucher herauszufiltern. Sie können ein Segment für jede Art von Smartsupp-Ereignisaktion erstellen. Die nützlichste Metrik ist die Ereignisaktion „Konversation“.
Verhalten vergleichen
Für GA UA: Wenn Sie das Segment erstellt haben, können Sie das Verhalten der Chat-Besucher im Vergleich zu allen Besuchern sehen und vergleichen. Im Beispiel sehen Sie, dass es 71 chattende Besucher gegenüber 3796 Gesamtbesuchern gab. Damit können Sie berechnen, dass 1,9 % der Besucher ein Gespräch mit Ihnen führen und weitere Informationen erhalten.
Conversions
Für GA UA: Das Wichtigste, was Sie messen können, ist die Auswirkung des Smartsupp-Chats auf Conversions (Ziele). Sie können die Conversion-Rate der chattenden Besucher im Vergleich zu Ihrer Gesamt-Conversion-Rate sehen.
API
gibt die konkrete Tracker-ID für GA4 oder UA an: https://docs.smartsupp.com/chat-box/google-analytics/ 
Cookie-Zustimmung
befolgen Sie die hier beschriebenen Schritte: https://help.smartsupp.com/de_DE/dashboard/cookies-2?from_search=117824329 
Ereignisse für die ältere Version von Smartsupp
Für die ältere Version von Smartsupp (alte Version der Chatbox) wird eine andere Version von Ereignissen angezeigt:
Ausgelöste Nachricht gesendet
Das Ereignis wird jedes Mal gesendet, wenn der Besucher eine automatische Nachricht (Trigger) erhält. Die Zahl zeigt an, wie viele Personen eine automatische Nachricht erhalten haben. Wenn Sie wissen möchten, wie viele Personen auf die automatische Nachricht (Auslöser) geantwortet haben, sehen Sie sich das Ereignis an: „Trigger hat Konversation gestartet“.
- Ereignislabel = Titel der ausgelösten Nachricht in Ihrem Dashboard
Trigger-Nachricht angezeigt
Wenn der Besucher auf die ausgelöste Nachricht reagiert (die Chatbox öffnet).
- Ereignislabel = Titel der ausgelösten Nachricht in Ihrem Dashboard
Konversation bedient
Wenn eine Nachricht zwischen einem Besucher und einem Agenten (oder Chatbot) ausgetauscht wird.
- Ereignislabel = Name des Agenten
Kontaktformular ausgefüllt
Wenn der Besucher das Kontaktformular ausfüllt.
- Es ist kein Ereignislabel zugewiesen
Offline-Nachricht gesendet
Wenn ein Besucher eine Offline-Nachricht sendet.
- Es ist kein Ereignislabel zugewiesen
Feedback gesendet
Wenn der Besucher das Feedback-Formular ausfüllt und sendet.
- Ereignislabel = Bewertungsstufe (1, 3, 5 = schlecht, normal, gut)
Chatbot gesendet
Das Ereignis wird gesendet, wenn der Besucher einen Chatbot oder eine automatisierte Nachricht in der Chatbox erhält
- Ereignislabel = Name des Chatbots oder der automatisierten Nachricht, mit der der Benutzer interagiert hat
Interaktion mit der Chatbot-Schaltfläche
Das Ereignis wird jedes Mal gesendet, wenn auf die Chatbot-Schaltfläche geklickt wird (möglicherweise mehrmals pro Sitzung).
- Ereignislabel = Name des Chatbots oder der automatisierten Nachricht, mit der der Benutzer interagiert hat
Chatbot-Interaktion
Ein Ereignis wird gesendet, wenn ein Besucher auf einen Chatbot oder eine automatisierte Nachricht antwortet (dies ist nur die erste Interaktion, bis zu 1x pro Sitzung).
- Ereignislabel = Name des Chatbots oder der automatisierten Nachricht, mit der der Benutzer interagiert hat
Chatbot hat ein Gespräch gestartet
Das Ereignis wird gesendet, wenn der Besucher mit einer Chat-Nachricht an den Chatbot oder einer automatisierten Nachricht antwortet
- Ereignislabel = Name des Chatbots oder der automatisierten Nachricht, mit der der Benutzer interagiert hat
Umbenannte alte Ereignisse
Neu
Alt
Chatbot_sent
Chatbot_interaction
Chatbot_button_interaction
Chatbot_viewed
Chatbot-Nachricht angesehen
Chatbot_visitor_reaction
Chatbot hat das Gespräch begonnen
Auto_message_sent
Auto_message_viewed
Auto_message_visitor_reaction
Die Auto-Nachricht hat eine Konversation gestartet
Visitor_started_conversation
Agent_served_conversation
Konversation bedient
Auth_form_filled
Offline_message_sent
Feedback_sent
Feedback_text_sent
Feedback gesendet
Trigger_message_sent
Ausgelöste Nachricht gesendet
Trigger_message_viewed
Ausgelöste Nachricht angesehen
Trigger_visitor_reaction
Trigger hat Konversation gestartet
Gut gemacht! Alles läuft.
Haben Sie Fragen, Vorschläge für weitere zu messende Ereignisse oder möchten Sie Ihre Daten aus Google Analytics teilen? Lassen Sie es uns wissen!
Sind Sie noch verwirrt? Kontaktieren Sie uns über die Chat-Box in Ihrem Dashboard und wir werden uns gerne mit Ihnen in Verbindung setzen. Bitte beachten Sie, dass der Kundenservice nur in kostenpflichtigen Paketen enthalten ist.

