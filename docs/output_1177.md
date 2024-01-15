# Smartsupp — WordPress
## Smartsupp Élő Chat Integráció Még nincs Smartsupp fiókja? Regisztráljon ingyen  mindössze 2 perc alatt.   1. A plugin használata A legegyszerűbb módja a pl
Smartsupp Élő Chat Integráció
1. A plugin használata
A legegyszerűbb módja a plugin telepítése és a fiókjába való bejelentkezés.
A plugin telepítése
Bővítmények> Új hozzáadása, keresse meg a Smartsupp Élő Chatet és kattintson a Telepítés most gombra. A plugin telepítése után kattintson az Aktiválás gombra.
Bejelentkezés a Smartsupp fiókba
Készíthet ingyenes fiókot, vagy összekapcsolhatja egy létező fiókkal is.
Ha minden rendben, akkor ezt az oldalt fogja látni.
2. A kód manuális beillesztése
Ha nem akarja használni a bővítményt, akkor közvetlenül beszúrhatja a kódot a WordPress témába is.
Legyen óvatos: megkárosíthatja a weboldalát! Azt javasoljuk, hogy küldje el ezt az útmutatót a webmesterének.
A kód másolása
A kódját a következő módon találja meg: Smartsupp > Beállítások > Chat doboz > Chat kód.
A kód beillesztése
Megjelenés> Szerkesztő> Fejléc téma (header.php)> kód beszúrása> Fájl frissítése
3. Haladó egyéni változtatások
Nem akarja használni a bővítményt, vagy a kódot manuálisan beszúrta, és speciális egyéni változtatásokra van szüksége?
A"Scripts n Styles" telepítése
Alapértelmezés szerint, amikor telepíti a bővítményt vagy beilleszti a kódot a fejlécbe, az minden oldalon megjelenik. Ha arra van szüksége, hogy a kód csak bizonyos meghatározott oldalakon jelenjen meg, vagy esetleg csak egy oldalon, telepítse a Scripts n Styles harmadik fél által gyártott WordPress bővítményt.
A kód másolása
A kódját a következő módon találja meg: Smartsupp > Beállítások > Chat doboz > Chat kód.
A kód javítása
Néhány apró változtatást kell végrehajtania az alapértelmezett kódban.
Olvassa el figyelmesen, különben nem fog működni.
A mi kódunkból távolítsa el ezeket a sorokat.
<!-- Smartsupp Live Chat script -->
<script type="text/javascript">
</script>
Az eredeti kódja ...
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
... így kell kinéznie, ahogy az alább látható. EZ CSAK PÉLDA. EZT NE MÁSOLJA!!
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
window.smartsupp||(function(d) {
 var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
 s=d.getElementsByTagName('script')[0];c=d.createElement('script');
 c.type='text/javascript';c.charset='utf-8';c.async=true;
 c.src='//www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
A kód beillesztése
Lépjen az Oldalak elemre, szerkessze a kívánt oldalt és a Scripts n Styles alatt illessze be a módosított kódot.
Kattintson a Szkriptek frissítése és a Frissítés elemre.
A Smartsupp nem telepíthető a WordPress.com webhelyre
A chat kód nem telepíthető ingyenes WordPress.com webhelyre, mivel az egyéni pluginok nem telepíthetők ezen a platformon. Ezenkívül az egyéni JavaScript blokkolva van az ilyen típusú webhelyeken.
Megjegyzés: Ha Google-fiókot használ a Smartsuppba való bejelentkezéshez, akkor a WordPress beépülő modulba nem tud ugyanúgy bejelentkezni.
A csevegési kódot beillesztheti manuálisan is, vagy rákattinthat az „elfelejtett jelszó” elemre a Smartsuppban, és e-mailben beállíthatja a bejelentkezést.
Még mindig kérdése van? Lépjen kapcsolatba velünk az irányítópulton lévő chat dobozon keresztül, és örömmel felvesszük Önnel a kapcsolatot. Felhívjuk figyelmét, hogy az ügyfélszolgálatot csak a fizetős csomagok tartalmazzák.

