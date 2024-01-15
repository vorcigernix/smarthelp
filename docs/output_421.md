# Smartsupp — Csoportok
## Ez a szolgáltatás csak a PRO csomagban érhető el.
  Mik azok a csoportok? A csoportok a Smartsupp szolgáltatásai, amelyek rendkívül hasznosak, ha több ügyn
Ez a szolgáltatás csak a PRO csomagban érhető el.
Mik azok a csoportok?
A csoportok a Smartsupp szolgáltatásai, amelyek rendkívül hasznosak, ha több ügynökkel rendelkezik, és a csevegéseket a web egyes részeiről egy adott ügynökre szeretné irányítani.
Ha többnyelvű a weboldala, a csevegéseket a webhely angol részéről az angolul beszélő ügynökéhez irányíthatja és így tovább.
Ha több webhelyen használja a Smartsupp programot, és mindegyikhez különböző ügynököt szeretne hozzárendelni.
Ha különböző termékeket árul a webhelyén, és szeretné, ha a látogatókat mindig az adott szakterület szakembere szolgálná ki.
Hogyan lehet csoportot létrehozni?
Csoport létrehozása
A csoportok beállításait a Beállítások → Csoportok alatt találja 
Ezt követően hozzon létre legalább 2 csoportot a képernyő jobb felső sarkában található Csoport hozzáadása gombra kattintva.
Adjon hozzá ügynököket a csoporthoz
Rendelje hozzá az összes ügynökét a létrehozott csoportokhoz. Akár egy nem kijelölt ügynök is megváltoztathatja a csevegés állapotát az egész webhelyén, amelyet valószínűleg nem szeretne. A csoport beállításai alatt a fotóra kattintva könnyedén hozzárendelheti az ügynököket az adott csoporthoz. Az egyes csoportok ügynökeinek száma korlátlan.
Miután hozzárendelte az összes ügynököt egy csoporthoz, akkor láthatja, hogy ki melyik csoportba tartozik, mint például itt:
Megjegyzés: Miután az összes ügynököt hozzárendelte egy csoporthoz, a változtatások életbe lépéséhez az ügynököknek FRISSÍTENIÜK kell az irányítópultot.
Adja hozzá a csoport kódját a webhelyéhez
Illessze be a csoporthoz tartozó kódot közvetlenül az egyik webhelye vagy oldala csevegési kódja alá, hogy a csevegéseket az adott csoporthoz irányítsa. A csoport kódját a Smartsupp csevegőkód után kell beilleszteni.
Az adott webhelyen található kód így fog majd kinézni:
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
Ellenőrizze a beállításokat
Ha minden megfelelően van beállítva, és az ügynökei frissítették az irányítópultokat, akkor minden új látogató csoportját látniuk kell a látogatói listában (csak azokból a csoportokból érkező látogatókat látják, ahová rendelték őket).
Csoportok használata Kapcsolatfelvételi űrlappal
A csoportokat használhatja egy Kapcsolatfelvételi űrlappal együtt, így a látogatói kiválaszthatják, hogy mely ügynökökkel szeretnének kommunikálni. Az opciót a Beállítások → Chat doboz (1) → Kapcsolatfelvételi űrlap (2) → Csoport kiválasztása (3) alatt találja. Legalább egy csoportot létre kell hoznia, hogy ezt az opciót engedélyezhesse.
Így fog kinézni a csoport kiválasztásával rendelkező widget a weboldalon:
Még mindig kérdése van? Lépjen kapcsolatba velünk az irányítópulton lévő chat dobozon keresztül, és örömmel felvesszük Önnel a kapcsolatot. Felhívjuk figyelmét, hogy az ügyfélszolgálatot csak a fizetős csomagok tartalmazzák.

