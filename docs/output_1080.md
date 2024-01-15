# Smartsupp — Jak aktivovat Google analytics 4
## Info: Tato funkce je k dispozici pouze v balíčcích STANDARD a PRO.   Poznámka: Google Analytics 4 podporuje pouze nová verze widgetu 3   Zapnutí Google ana
Info: Tato funkce je k dispozici pouze v balíčcích STANDARD a PRO.
Poznámka: Google Analytics 4 podporuje pouze nová verze widgetu 3
Zapnutí Google analytics v dashboardu Smartsupp
Vliv služby Smartsupp na míru konverze a chování návštěvníků můžete měřit v nástroji Google Analytics. Ve svém účtu můžete nastavit, zda chcete data do služby Google Analytics odesílat, nebo ne.
Otevřete sekci Nastavení > Nastavení účtu > Google Analytics > Klikněte na tlačítko Připojit.
Po aktivaci integrace služby Google Analytics se zobrazí 2 možnosti.
Automatická detekce Property ID
Automaticky zjistí všechna ID měření na webové stránce a použije je k odeslání událostí Smartsupp do služby Google Analytics.
Pokud používáte pouze 1 účet Google Analytics, vyberte tuto možnost. Pro většinu lidí je to nejlepší možnost.
Ruční definice ID
V případě, že používáte více ID měření, vyberte, které ID měření chcete používat pro sledování událostí Smartsupp. Tato možnost nebude fungovat, pokud jste již dříve aktivovali integraci s Google Analytics prostřednictvím API podle tohoto návodu.
Pokud máte pokročilejší případ použití a používáte na svých webových stránkách více účtů Google analytics, můžete si vybrat, na který účet Google analytics máme události ze Smartsupp odesílat.
Vyberte, který z nich je pro vás nejvhodnější, a klikněte na tlačítko uložit. Od této chvíle bude Smartsupp odesílat události do služby Google Analytics 4. Zbývá ještě jeden krok, abyste získali úplný přehled o tom, jak Smartsupp ovlivňuje vaše cíle.
Definujte vlastní definice
Pro úplný přehled je třeba přejít do vlastností Google analytics 4 a definovat 2 vlastní rozměry. Nebojte se, je to velmi snadné.
Otevřete Google analytics 4 > Klikněte na admin >Klikněte na vlastní definice > Klikněte na Vytvořit vlastní dimenzi
Nyní je nutné přidat 2 vlastní definice
Kategorie události
Nyní zadejte název dimenze. Ten může být vlastní, ale doporučujeme jej pojmenovat: event_category 
Oblast použití: ujistěte se, že je nastavena na hodnotu Událost 
Přidejte vlastní definici popis. Opět záleží na vás. Doporučujeme něco ve smyslu: Smartsupp kategorie událostí.
Vyberte parametr události. Ujistěte se, že jste vybrali event_category
Poznámka: Pokud nevidíte event_category, je buď již definována, nebo služba Google analytics ještě neobdržela žádnou událost od Smartsupp. Přesto ji můžete definovat
Štítek události
Nyní je třeba zopakovat postup pro dimenzi event_label.
Název dimenze: event_label 
Rozsah působnosti: Událost 
Popis: Smartsupp event label
Parametr události: event_label
Měli byste mít definovány alespoň 2 dimenze, může jich být i více, ale pro správné sledování událostí ze Smartsupp v Google analytics 4 musí být tyto 2 dimenze definovány v nastavení.
Jak měřit dopad Smartsupp v Google analytics
Právě teď pracujeme na podrobném návodu o různých způsobech, jak můžete zjistit, jaký vliv má Smartsupp na vaše metriky. Brzy jej zveřejníme.
Stále si nevíte rady? Kontaktujte nás prostřednictvím chatu po přihlášení se do vašeho Smartsupp účtu. Rádi vám pomůžeme. Upozorňujeme, že zákaznický servis je dostupný pouze v placených balíčcích.

