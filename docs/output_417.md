# Smartsupp — Miért nem látom a chatet a weboldalamon?
## A chat a beállításokban rejtett Ellenőrizze, hogy a rejtett csevegődoboz nincs-e offline állapotban (1), vagy teljesen elrejtve (2) a Beállítások> Chat 
A chat a beállításokban rejtett
Ellenőrizze, hogy a rejtett csevegődoboz nincs-e offline állapotban (1), vagy teljesen elrejtve (2) a Beállítások> Chat doboz> Lehetőségek alatt
Ön blokkolva van
Győződjön meg arról, hogy nem blokkolja magát látogatóként a Smartsupp-fiókjában.
Ellenőrizze a beállításait, és ellenőrizze, hogy az IP-címe nem szerepel-e a blokkolt IP címek között.
Próbálja meg a szűrőt használni a látogatók listáján szereplő "blokkolt látogatók" esetében is, és nézze meg, hogy szerepel-e a blokkolt látogatók listáján. Ha köztük van, feloldhatja magát.
A chat kód nincs megfelelően behelyezve vagy beillesztve
Nyissa meg a weboldal, vagy a konzol forráskódját. Nyissa meg az oldal forráskódját (a Chrome-ban a parancsikon CTRL + U), és próbáljon megkeresni (CTRL + F) a Smartsuppot. Ha nincs eredmény, ez azt jelenti, hogy a csevegési kód nincs beillesztve a weboldal kódjába. Ebben az esetben a chat kód beillesztéséhez kapcsolatba kell lépnie a fejlesztőjével. 
Ha valamilyen címkekezelőt használ, például a Google Címkekezelőt, ellenőrizze, hogy megfelelően működik-e. A legtöbb esetben a chat kódot megtalálhatja a weboldal elemeiben (nyomja meg a CTRL+SHIFT+J billentyűket, kattintson az Elemek(1) fülre, és keresse meg a Smartsupp(2) elemet)
Ezenkívül győződjön meg arról, hogy nem használ egynél több chat kódot a webhelyén.
Hiba a kódban
Győződjön meg arról, hogy a chat kódban nincsenek hiányzó jelek. Ideális esetben a csevegési kódot közvetlenül a Beállításokból másolja ki. Kipróbálhatja például a Diffcheckert annak ellenőrzéséhez, hogy a webhely kódja megegyezik-e az eredeti kóddal. A leggyakoribb probléma az, hogy a kódból hiányzik az aláhúzás (_), a hibát a böngésző konzolján láthatja (CTRL+SHIFT+J)
Probléma a weboldal CSS-ével
Egy tipikus eset, amikor a chat nem jelenik meg az Ön weboldalán, annak ellenére, hogy a csevegési kód helyesen van beillesztve, az, hogy az iframe megjelenítési tulajdonság nincs beállítva (megjelenítés: nincs). Az alábbi képen láthat egy példát. Ebben az esetben a fejlesztőnek meg kell változtatnia a weboldal CSS-ét.
Néhány elem Z-indexe a weboldalon, több mint 1000000
A z-index tulajdonság meghatározza az elem halmozási sorrendjét.
A nagyobb halmozási sorrendű elemek mindig egy alacsonyabb sorrendű elemek előtt vannak.
Tehát, ha van olyan eleme, amelynek z-indexe meghaladja az 1 milliót, akkor lefedheti a widgetet.
A Javascript le van tiltva a böngészőben
A Javascript alapértelmezés szerint az összes böngészőben engedélyezve van, de ha letiltotta, akkor újra engedélyeznie kell. A Javascript különböző böngészőkben történő engedélyezésének lehetőségeiről a következő leírásban olvashat.
Tesztelési környezet
Az Ön weboldala tesztkörnyezetben van (például localhost), korlátozott webhely, intranetben szerepel, vagy egy privát VPN-en található. A weboldalnak teljes mértékben elérhetőnek kell lennie az internetről, hogy biztosítsa a Smartsupp 100% -os funkcionalitását.
Ha egyedi chat doboz pozíciót állított be az API-n keresztül, és úgy döntött, hogy megváltoztatja a widget eltolódását, ellenőrizze, hogy még kisebb kijelzőken is látható-e. Ha az eltolás túl nagy (vagy kicsi), akkor a csevegés részben vagy teljesen láthatatlan lehet.
Tartalom biztonsági politikája
Ha Tartalom biztonsági politikát használ a webhelyén, ellenőrizze, hogy az összes domainünk engedélyezett-e a CSP-ben.
smartsupp.com
smartsuppchat.com
cdn77.org
smartsuppcdn.com
Ha problémát jelent a Tartalombiztonsági irányelv, akkor a Chrome-konzolban (CTRL+SHIFT+J) látnia kell, hogy a szkript megsérti a tartalombiztonsági irányelvet.
Varázslat
Ha nem találta meg a problémát, kérjük, vegye fel velünk a kapcsolatot e-mailben a support@smartsupp.com címen, és adjon meg mindent információt, amit csak tud (szükségünk lesz webhelyének címére és a Smartsupp regisztrációs e-mailre is). Mi pedig megvizsgáljuk a problémát.
Még mindig kérdése van? Lépjen kapcsolatba velünk az irányítópulton lévő chat dobozon keresztül, és örömmel felvesszük Önnel a kapcsolatot. Felhívjuk figyelmét, hogy az ügyfélszolgálatot csak a fizetős csomagok tartalmazzák.

