# Smartsupp — Google Analytics
## Ez a funkció csak a STANDARD és PRO csomagokban érhető el.    Javasoljuk az új chat dobozunk használatát (2023-ban jelent meg). Ha még nem váltott át erre 
Ez a funkció csak a STANDARD és PRO csomagokban érhető el. 
Javasoljuk az új chat dobozunk használatát (2023-ban jelent meg). Ha még nem váltott át erre az új chat dobozra, vegye fel a kapcsolatot ügyfélszolgálatunkkal az irányítópulton lévő chaten keresztül.

Megjegyzés: Csak az új chat doboz verzió támogatja a Google Analytics 4-et.
A hatás mérése
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
Alapinformáció
A Smartsupp jelenleg támogatja az új GA4-et (Google Analytics 4-es verzió) és a régi UA-t (univerzális Analytics). Ez a chat doboz verziójától függ.
Több GA-követőkódot is kombinálhat > A Smartsupp automatikusan elküldi a GA-elemzési eseményeket a webhelyen található összes GA-követőkódhoz > használjon API-t az adott GA-követőkódhoz (további információ lent).
A chat doboznak (legújabb verzió) új esemény kategóriája van - Smartsupp_v3 
A Smartsupp felosztja az esemény műveleteket a chatbot, az automatikus üzenetek és a triggerek számára – minden automatizálásnak megvan a saját művelet címkéje (Action Label).
A Smartsupp néhány eseményt is átnevezett (további információ lent).
A GA-események akkor kerülnek elküldésre, amikor a chat doboz be van zárva vagy ki van nyitva.
A GA-események csak egyszer kerülnek elküldésre, akkor is, ha a látogató több böngészőlapon nyitotta meg ugyanazt a webhelyet.
Google analytics version 4
GA4 frissítési útmutató: [GA4] Váltson a Google Analytics 4 szolgáltatásra.
Esemény műveletek
A Google Analytics szolgáltatásban az eseménykövetés hierarchikusan 4 elemből áll: kategória, művelet, címke és érték. Igényeinkhez csak az első 3-at használjuk.
A Smartsupp eseményenként küld adatokat a Google Analytics számára. Összesen 17 esemény műveletet küldünk, amelyek segítségével nyomon követheti a csevegő felhasználók viselkedését. Mindezeket az esemény műveleteket az Esemény kategória = Smartsupp_v3 részben találja.
Az új (2023-ban kiadott) Smartsupp chat dobozzal frissítettük és további GA-eseményeket adtunk hozzá. Mindegyiket csak angol nyelven küldjük.
Esemény műveletek és címkék (leírás)
Megjegyzés: Az egyéni GA-megvalósításhoz (GTM) használja az API-nkat.
Kategória
Esemény
Címke
Magyarázat
Smartsupp_v3
Chatbot_sent
Chatbot neve
chatbot elküldve a chat dobozba
Chatbot_interaction
Chatbot neve

az első interakció egy chatbottal 
Chatbot_button_interaction
Válasz gombbal
konkrét gomb válasz interakció a chatbotban
Chatbot_viewed
Chatbot neve
nyissa meg a chat ablakot vagy kattintson a felugró gombra
Chatbot_visitor_reaction
Chatbot neve

látogató reakciója a konkrét chatbotra 
Auto_message_sent
Automatikus üzenet neve
automatikus üzenetet küldve a chat dobozba
Auto_message_viewed
Automatikus üzenet neve
a chat ablak megnyitása vagy kattintás a felugró gombra
Auto_message_visitor_reaction
Automatikus üzenet neve
a látogató reakciója a konkrét automatikus üzenetre
Visitor_started_conversation
(nincs beállítva)
a látogató üzenetet küld a chatbe (csak a chat automatizálása nélkül)
Agent_served_conversation
Az ügynök neve

Az ügynök csatlakozik a beszélgetéshez 
Auth_form_filled
(nincs beállítva)

kitöltött és elküldött egy kapcsolatfelvételi űrlapot 
Offline_message_sent
(nincs beállítva)
egy látogató üzenetet küldött egy offline chat dobozba
Feedback_sent
Jó/Normál/Rossz
Mosoly kiválasztva a visszajelzésben
Feedback_text_sent
Konkrét szöveg
Kitöltve a szöveg és elküldve a visszajelzés
Trigger_message_sent
Trigger név

régi trigger elküldve a chat dobozba 
Trigger_message_viewed
Trigger név
megnyitotta a chat dobozt, vagy kattintott a felugró gombra
Trigger_visitor_reaction
Trigger név
a látogató reakciója egy konkrét kiváltóra
Mit jelentenek ezek az események?
Chatbot_sent
az esemény akkor kerül elküldésre, amikor a látogató chatbotot kap a chat dobozba
egyet minden aktivált chatbothoz
Chatbot_interaction
az esemény akkor kerül elküldésre, amikor egy látogató válaszol egy chatbotra
ez csak az első interakció, munkamenetenként legfeljebb egyszer
Chatbot_button_interaction
az esemény minden alkalommal elküldésre kerül, amikor a chatbot válasz gombjára kattintanak
munkamenetenként akár többször is
Chatbot_viewed
az esemény akkor kerül elküldésre, ha a látogató megnyitja a chat dobozt, vagy rákattint a Csevegés gombra a chat doboz felugró ablakában, miután a látogató chatbotot kapott
Chatbot_visitor_reaction
az esemény akkor kerül elküldésre, ha a látogató chat üzenettel válaszol a chatbotnak
több chatbot esetén egy reakció eseményt küld a konkrét chatbotnak
Auto_message_sent
az esemény akkor kerül elküldésre, amikor a látogató automatikus üzenetet kap a chat dobozban
Auto_message_viewed
az esemény akkor kerül elküldésre, ha a látogató megnyitja a chat dobozt, vagy rákattint a Csevegés gombra a chat ablak felugró ablakában, miután a látogató automatikus üzenetet kapott
Auto_message_visitor_reaction
az esemény akkor kerül elküldésre, ha a látogató chat üzenettel válaszol az automatikus üzenetre
többszörös automatizálás (chatbotok, automatikus üzenetek) esetén a reakció esemény az utolsó esetében kerül elküldésre
Visitor_started_conversation
az esemény akkor kerül elküldésre, ha a látogató chat üzenetet küld a chat dobozba, de a chat dobozban nincs automatizálás (chatbot, automatikus üzenet)
Agent_served_conversation
az esemény akkor kerül elküldésre, amikor az ügynök csatlakozik a beszélgetéshez
Auth_form_filled
az esemény akkor kerül elküldésre, amikor a látogató kitölti és elküldi a kapcsolatfelvételi űrlapot
Offline_message_sent
az esemény akkor kerül elküldésre, amikor a látogató chat üzenetet küld az offline chat dobozba
Feedback_sent
az esemény akkor kerül elküldésre, amikor a látogató az emojit választja az értékelési űrlapon
Feedback_text_sent
az esemény akkor kerül elküldésre, amikor a látogató kitölti és szöveges visszajelzést küld az értékelési űrlapon
Trigger_message_sent
az esemény akkor kerül elküldésre, amikor a látogató triggert kap a chat dobozban
Trigger_message_viewed
az esemény akkor kerül elküldésre, ha a látogató megnyitja a chat dobozt, vagy rákattint a Csevegjünk gombra a chat ablak felugró ablakában, miután a látogató triggert kapott
Trigger_visitor_reaction
az esemény akkor kerül elküldésre, ha a látogató chat üzenettel válaszol a triggerre
Hozzon létre egy új szegmenst
GA UA esetén: Most már csak egy új szegmenst kell létrehoznia a csevegő látogatók adatainak kiszűréséhez. Bármilyen Smartsupp esemény művelethez létrehozhat szegmenst. A leghasznosabb mérőszám a „Beszélgetés” eseményművelet.
Hasonlítsa össze a viselkedést
GA UA esetén: Ha létrehozta a szegmenst, megtekintheti és összehasonlíthatja a csevegő látogatók és az összes látogató viselkedését. A példában 71 csevegő látogató volt, szemben a 3796 látogatóval. Ezzel kiszámolhatja, hogy a látogatók 1,9%-a beszélget Önnel, és további információkkal is szolgál.
Konverziók
A GA UA esetében: A legfontosabb mérhető dolog a Smartsupp chat konverziókra (célokra) gyakorolt hatása. Megtekintheti a csevegő látogatók konverziós arányát a teljes konverziós arányhoz képest.
API
konkrét nyomkövető azonosítót ad meg a GA4 vagy az UA számára: https://docs.smartsupp.com/chat-box/google-analytics/ 
Cookie hozzájárulás
Kövesse az itt leírt lépéseket: https://www.smartsupp.com/help/cookie-consent/ 
Események a Smartsupp régebbi verziójához
A Smartsupp régebbi verziója esetén (a chat doboz régi verziója) az események más verziója jelenik meg:
Triggered message sent
Az esemény minden alkalommal elküldésre kerül, amikor a látogató automatikus üzenetet (trigger) kap. A szám azt mutatja, hogy hány ember kapott automatikus üzenetet. Ha tudni szeretné, hányan válaszoltak az automatikus üzenetre (trigger), nézze meg az eseményt: "Trigger started conversation".
- Esemény címke = az aktivált üzenet címe az irányítópulton
Trigger message viewed
Amikor a látogató reagál (megnyitja a chat dobozt) a kiváltott üzenetre.
- Esemény címke = az aktivált üzenet címe az irányítópulton
Conversation served
Amikor üzenetet váltanak a látogató és egy ügynök (vagy a chatbot).
- Esemény címke = ügynök neve
Auth form filled
Amikor a látogató kitölti a kapcsolatfelvételi űrlapot.
- Nincs esemény címke hozzárendelve
Offline message sent
Amikor a látogató offline üzenetet küld.
- Nincs esemény címke hozzárendelve
Feedback sent
Amikor a látogató kitölti és elküldi a visszajelzési űrlapot.
- Esemény címke = értékelési szint (1, 3, 5 = rossz, normál, jó)
Chatbot sent
Az esemény akkor kerül elküldésre, amikor a látogató chatbotot vagy automatizált üzenetet kap a chat dobozban
- Esemény címke = a chatbot vagy az automatizált üzenet neve, amellyel a felhasználó interakcióba lép
Chatbot button interaction
Az esemény minden alkalommal elküldésre kerül, amikor a chatbot gombra kattintanak (esetleg munkamenetenként többször is)
- Esemény címke = a chatbot vagy az automatizált üzenet neve, amellyel a felhasználó interakcióba lép
Chatbot interaction
A rendszer akkor küld eseményt, amikor egy látogató válaszol egy chatbotra vagy egy automatikus üzenetre (ez csak az első interakció, legfeljebb 1-szer munkamenetenként)
- Esemény címke = a chatbot vagy az automatizált üzenet neve, amellyel a felhasználó interakcióba lép
Chatbot started conversation
Az esemény akkor kerül elküldésre, ha a látogató chat üzenettel válaszol a chatbotnak vagy automatizált üzenetnek
- Esemény címke = a chatbot vagy az automatizált üzenet neve, amellyel a felhasználó interakcióba lép
Átnevezett régi események:
Régi
Új
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
Szép munka! Minden készen áll.
Van kérdése, javaslata további mérendő eseményekkel kapcsolatban, vagy szeretné megosztani adatait a Google Analytics szolgáltatásból? Tudassa velünk!
Még mindig kérdése van? Lépjen kapcsolatba velünk az irányítópulton lévő chat dobozon keresztül, és örömmel felvesszük Önnel a kapcsolatot. Felhívjuk figyelmét, hogy az ügyfélszolgálatot csak a fizetős csomagok tartalmazzák.

