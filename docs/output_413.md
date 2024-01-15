# Smartsupp — Skupiny
## Tato funkce je dostupná pouze v balíčku PRO.
  Co jsou to Skupiny? Skupiny, neboli skupiny operátorů, vám umožňují směrovat konverzace na určitou skupinu o
Tato funkce je dostupná pouze v balíčku PRO.
Co jsou to Skupiny?
Skupiny, neboli skupiny operátorů, vám umožňují směrovat konverzace na určitou skupinu operátorů. Konverzace můžete směrovat například podle jazyka, země nebo dalších parametrů, např.:
Máte-li vícejazyčný web, můžete pomocí skupin nastavit, že chaty z vašeho českého webu budou přesměrované na českého operátora a chaty z anglické části webu na anglicky mluvícího operátora.
Máte několik webů a chcete, aby každý web obsluhoval jiný operátor.
Prodáváte na webu více specifických produktů a chcete, aby byly chaty vždy přesměrovány na odborníka na daný produkt nebo produktovou řadu.
Jak skupiny nastavit?
Vytvoření skupin
Přejděte do Nastavení → Skupiny a vytvořte minimálně 2 skupiny kliknutím na tlačítko Přidat skupinu.
Přiřazení operátorů
Přiřaďte všechny operátory v účtu do skupin. Nepřiřazený operátor může změnit status live chatu na celém webu. Operátora přiřadíte do skupiny jednoduše, a to kliknutím na jeho foto v editaci skupiny. Počet operátorů v jedné skupině není nijak omezen. Jeden operátor může být zároveň přiřazen ve více skupinách. Když je operátor přiřazen v konkrétní skupině, je jeho fotka zvýrazněna.
V přehledu skupin pak můžete vidět, kteří operátoři jsou přiřazeni v konkrétní skupině:
Pozn.: Po přiřazení operátorů do skupin je třeba, aby si operátoři AKTUALIZOVALI stránku s dashboardem. Změny se projeví až po obnovení dashboardu.
Vložte kód skupiny do vašeho webu
Přidejte kód skupiny hned pod chat kód na stránce, kde chcete routovat chaty do této skupiny. Konkrétní kód skupiny naleznete po kliknutí na danou skupinu a vypadá např. takto:
V praxi tedy kód na konkrétní podstránce bude vypadat nějak takto (dosadíte svůj chat kód a ID skupiny), kód skupiny vložte až za chat kód:
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
Kontrola nastavení
Pokud je všechno nastavené správně a operátoři obnovili dashboard, měli by u nových návštěvníků vidět jejich skupinu v seznamu návštěvníků (vidí pouze ty skupiny ve kterých jsou přiřazeni):
Výběr skupin přímo v kontaktním formuláři
Skupiny můžete použít i přímo v kombinaci s kontakním formulářem, takže si Vaši návštěvníci budou moci zvolit skupinu operátorů, se kterou by chtěli komunikovat. Tohle nastavení najdete v Nastavení → Chat box (1) → Kontaktní formulář (2) → Výběr skupiny (3). Pro použití musíte mít vytvořenou minimálně jednu skupinu.
A takto pak bude vypadat chat box na vašem webu:
Stále si nevíte rady? Kontaktujte nás prostřednictvím chatu po přihlášení se do vašeho Smartsupp účtu. Rádi vám pomůžeme. Upozorňujeme, že zákaznický servis je dostupný pouze v placených balíčcích.

