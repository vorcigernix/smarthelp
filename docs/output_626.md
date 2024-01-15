# Smartsupp — Régi automatikus üzenetek – speciális beállítások
## Megjegyzés: A régi speciális beállítások csak azon kiválasztott felhasználók számára állnak rendelkezésre, akik 2021 májusában vagy korábban hoztak létre f
Megjegyzés: A régi speciális beállítások csak azon kiválasztott felhasználók számára állnak rendelkezésre, akik 2021 májusában vagy korábban hoztak létre fiókot.
Ha a Hamarosan lecseréljük részben található automatikus üzenetre kattint, a régi speciális beállítások jelennek meg.
A speciális beállításokban kiválaszthatja az üzenet elküldésének feltételét (Üzenetindítás) és a feltételek kiértékelésének módját (Üzenet küldése a látogatónak, ha). A listából több feltételt is választhat.
Feltétel	Lehetséges érték	Leírás	
Üzenet indítása	A chat doboz betöltésekor	Automatikus üzenetet küldünk, amikor a Smartsuppot észlelik a weboldalon.	
	Ha a látogató üzenetet küld	Az üzenet akkor aktiválódik, amikor a látogató üzenetet küld.	
	Ha a látogató megnyitja a chat dobozt	Az üzenet akkor aktiválódik, amikor a látogató megnyitja a chat dobozt.	
Küldjön üzenetet a látogatónak, ha	Minden feltétel teljesül	Az üzenet aktiváláshoz minden feltételnek teljesülnie kell (pl. A, B és C).	
	Bármely feltétel teljesül	Legalább egy feltételnek teljesülnie kell (pl. A, B vagy C).	
Haladó feltételek listája
Az egyszerű feltételek mellett haladó feltételek és operátorok is rendelkezésre állnak.
Feltétel	Lehetséges érték	Példa érték	Leírás	
A webhely URL-je	= egyenlő 
!= nem egyenlő
? tartalmaz
!? nem tartalmaz
$ egyenlő a reguláris kifejezéssel
	www.myeshop.cz/cameras	A látogató által felkeresett weboldal címe. A feltétel akkor teljesül, ha az URL tartalmazza a beírt szöveget, amely bárhol lehet az URL-ben.	
Weboldal címe	= egyenlő 
!= nem egyenlő
? tartalmaz
!? nem tartalmaz
$ egyenlő a reguláris kifejezéssel
	Canon cameras | My e-shop	A látogató által jelenleg böngészett weboldal címe. 
Ez a böngésző lapon látható. Az értéknek pontosan meg kell egyeznie a címmel.
	
Hivatkozóoldal(forrás)	= egyenlő 
!= nem egyenlő
? tartalmaz
!? nem tartalmaz
$ egyenlő a reguláris kifejezéssel
	google.com	Az a webhely, ahonnan a látogató az Ön webhelyére érkezett (például keresőmotor, blog, cikk vagy marketingkampány). 
Tájékoztatásul elmondható, hogy a hivatkozó oldal nem mindig áll rendelkezésre (például ha a látogató az URL-t közvetlenül a böngészőjébe írja be). Egyes webhelyek szintén nem küldenek hivatkozó információkat.
	
Látogatások száma	= egyenlő 
!= nem egyenlő
< kisebb, mint
> nagyobb, mint
<= kisebb, vagy egyenlő
>= nagyobb vagy egyenlő
	2	Hányszor volt látogató a webhelyén. Ezeket az információkat a sütik tárolják. Javasoljuk az automatikus üzenetek tesztelését inkognitóablakban.	
Chatek száma	= egyenlő 
!= nem egyenlő
< kisebb, mint
> nagyobb, mint
<= kisebb, vagy egyenlő
>= nagyobb vagy egyenlő
	1	A látogatóval folytatott beszélgetések száma.	
A látogató üzenetet küldött	igaz 
hamis
		Amikor a látogató üzenetet küld (igaz) vagy nem (hamis).	
A látogatót kiszolgálják/ták	igaz 
hamis
		A látogatót akkor szolgálják ki, amikor az üzemeltető üzenetet küld nekik. Az Igaz azt jelenti, hogy ez megtörtént, a hamis pedig azt, hogy nem történt meg.	
IP cím	= egyenlő 
!= nem egyenlő
? tartalmaz
!? nem tartalmaz
$ egyenlő a reguláris kifejezéssel
	88.90.91.92	A látogató IP-címe.	
Város	= egyenlő 
!= nem egyenlő
? tartalmaz
!? nem tartalmaz
$ egyenlő a reguláris kifejezéssel
	Brno	A látogató városa. A Maxmind geolokációs adatain alapul. Egyes látogatók helyei pontatlanok lehetnek, különösen a kisvárosok esetében, amelyek a térség nagyobb településeként jelenhetnek meg. A mobil adatokat használó látogatók esetében is pontatlan információk jelenhetnek meg.	
Ország kód	= egyenlő 
!= nem egyenlő
? tartalmaz
!? nem tartalmaz
$ egyenlő a reguláris kifejezéssel
	DE, IT, ES	A látogató országkódja ISO 3166-1 alpha-2 formában. Az összes ország és kódjaik listája itt található: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements 	
Csoport	= egyenlő 
!= nem egyenlő
		A látogató csoportja. (Csak a Pro csomagok használhatnak csoportokat.)	
A nap órája	= egyenlő 
!= nem egyenlő
< korábbi, mint
> későbbi, mint
<= korábbi, vagy egyenlő
>= későbbi vagy egyenlő
	0-23	Az automatikus üzenet bekapcsolásának ideje.	
A hét napja	= egyenlő 
!= nem egyenlő
< korábbi, mint
> későbbi, mint
<= korábbi, vagy egyenlő
>= későbbi vagy egyenlő
	Hétfő- Vasárnap	A hét azon napja, amikor az automatikus üzenet elküldésre kerül.	
Hónap	= egyenlő 
!= nem egyenlő
< korábbi, mint
> későbbi, mint
<= korábbi, vagy egyenlő
>= későbbi vagy egyenlő
	Január -December	Az a hónap, amikor az automatikus üzenet elküldésre kerül.	
Böngésző	= egyenlő 
!= nem egyenlő
? tartalmaz
!? nem tartalmaz
$ egyenlő a reguláris kifejezéssel
	Chrome	A látogató böngészője. Az érték megegyezik a felhasználói információs panelen a chat részleteinél látható értékkel.	
Operációs rendszer	= egyenlő 
!= nem egyenlő
? tartalmaz
!? nem tartalmaz
$ egyenlő a reguláris kifejezéssel
	Windows, OS X, Android	A látogató operációs rendszere. Az érték megegyezik a felhasználói információs panelen a chat részleteinél látható értékkel.	
Platform	= egyenlő 
!= nem egyenlő
? tartalmaz
!? nem tartalmaz
$ egyenlő a reguláris kifejezéssel
	Windows, Apple Mac	A látogató platformja	
A látogató automatikus üzenetet kapott	igaz 
hamis
		Meghatározza, hogy a látogató kapott-e automatikus üzenetet.	
Chat doboz állapota	online 
offline
		Meghatározza, hogy a chat doboz online vagy offline módban van-e.	
Még mindig kérdése van? Lépjen kapcsolatba velünk az irányítópulton lévő chat dobozon keresztül, és örömmel felvesszük Önnel a kapcsolatot. Felhívjuk figyelmét, hogy az ügyfélszolgálatot csak a fizetős csomagok tartalmazzák.

