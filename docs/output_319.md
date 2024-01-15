# Smartsupp — WordPress
## Integrace Smartsupp live chatu a chatbotů Ještě nepoužíváte Smartsupp? Založte si účet zdarma , zabere to jen 2 minuty.
  Zde jsou tři možnosti, jak můžete
Integrace Smartsupp live chatu a chatbotů
Zde jsou tři možnosti, jak můžete Smartsupp propojit se svým webem. Zvolte si možnost, která je vám nejbližší.
Náš plugin
Vložit kód ručně
Pokročilé nastavení
1. Náš plugin
Nejlehčí způsob, jak nainstalovat náš kód, je pomocí pluginu a přihlásit se přímo do účtu.
Instalace
Pluginy > Instalace pluginů, najděte Smartsupp Live Chat a dejte Instalovat.
Po instalaci pluginu klikněte na Aktivovat.
Přihlaste se do Smartsupp účtu
Můžete Vytvořit nový účet nebo se Přihlásit k existujícímu účtu.
Pokud je vše v pořádku, uvidíte tuto stránku:
2. Vložit kód ručně
Pokud nechcete použít plugin, dá se kód vložit přímo do WordPress šablony.
Pozor: můžete si poškodit web! Pošlete návod webmasterovi.
Zkopírujte kód
Váš kód najdete ve Smartsupp > Nastavení > Chat box > Chat kód
Vložit kód
Vzhled > Editor > Theme Header (header.php) > vložit kód > Aktualizovat soubor
3. Pokročilé nastavení
Nechcete použít plugin nebo jste vložili kód ručně a potřebujete pokročilé nastavení?
Nainstalujte "Scripts n Styles"
Náš plugin se po instalaci zobrazí na každé stránce webu. Pokud chcete, aby byl jen na určitých stránkách nebo třeba jenom jedné, nainstalujte si plugin 3. strany: Scripts n Styles.
Zkopírujte kód
Váš kód najdete ve Smartsupp > Nastavení > Chat box > Chat kód
Upravit kód
Je potřeba trochu upravit náš základní kód.
Čtěte pozorně, jinak to nebude fungovat.
Z našeho kódu odstraňte tyto řádky.
<!-- Smartsupp Live Chat script -->
<script type="text/javascript">
</script>
Původní kód ... 
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
... by měl po úpravě vypadat takto. POUZE PŘÍKLAD = NEKOPÍROVAT!
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
window.smartsupp||(function(d) {
 var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
 s=d.getElementsByTagName('script')[0];c=d.createElement('script');
 c.type='text/javascript';c.charset='utf-8';c.async=true;
 c.src='//www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
Vložit kód
Stránky můžete začít upravovat. Dole na stránce je Scripts n Styles, kam vložíte upravený kód.
Klikněte na Update Scripts a dejte Aktualizovat stránku.
Smartsupp na WordPress.com
Smartsupp nelze instalovat na WordPress.com 
Náš kód nelze instalovat na WordPress.com a obecně JavaScript je na této platformě blokován.
Poznámka: Pokud k přihlášení do Smartsupp používáte účet Google, nebude možné se přihlásit k pluginu WordPress stejným způsobem. Chat kód můžete vložit buď ručně, nebo můžete ve Smartsupp kliknout na „zapomenuté heslo“ a nastavit si přihlašování přes email.
Stále si nevíte rady? Kontaktujte nás prostřednictvím chatu po přihlášení se do vašeho Smartsupp účtu. Rádi vám pomůžeme. Upozorňujeme, že zákaznický servis je dostupný pouze v placených balíčcích.

