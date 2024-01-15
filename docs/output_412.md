# Smartsupp — Proč nevidím chat na svém webu?
## Chat je skrytý v nastaveních Ujistěte se, že chat máte zobrazen v režimu offline (1) nebo že nemáte povolenou možnost skrýt chat box (2) v okně Nastavení&g
Chat je skrytý v nastaveních
Ujistěte se, že chat máte zobrazen v režimu offline (1) nebo že nemáte povolenou možnost skrýt chat box (2) v okně Nastavení> Chat box > Nastavení
Jste zablokovaní
Ujistěte se, že nejste zablokováni jako návštěvník.
Zkontrolujte nastavení, zda není adresa IP v seznamu blokovaných adres IP.
Pokuste se také použít filtr pro "zablokované návštěvníky" v seznamu návštěvníků a zjistěte, zda jsou na webu nějací blokovaní návštěvníci. Pokud jste mezi nimi, můžete se odblokovat
Chat kód není vložen, nebo je vložen nesprávně
Otevřete zdrojový kód vašeho webu. Poté otevřete zdroj stránky (v Chrome pomocí CTRL+U) a zkuste vyhledat (CTRL+F) smartsupp. Pokud nejsou k dispozici žádné výsledky, znamená to, že chat kód není vložen do kódu webu. V takovém případě budete muset kontaktovat svého vývojáře a vložit chat kód. 
Používáte-li např. Google tag manager, ujistěte se, že funguje správně. Ve většině případů byste měli hledat kód chatu v prvcích vašeho webu (stiskněte klávesy CTRL+SHIFT+J, klikněte na záložku “Elements” a vyhledejte smartsupp). 
Také se ujistěte, že na webu nemáte více chat kódů.
Chyba v chat kódu
Ujistěte se, že v chat kódu nejsou žádné chybějící značky. V ideálním případě zkopírujte kód chatu přímo z nastavení. Můžete zkusit např. Diffchecker pro kontrolu, abyste ověřili, že je kód z vašeho webu stejný jako původní kód. Nejčastějším problémem je, že v kódu chybí znak podtržítka (_) a v tomto případě se v konzoli prohlížeče (CTRL+SHIFT+J) může zobrazit chyba.
Problém s CSS na webu
Typický případ, kdy není chat na vašem webu zobrazen, přestože je kód chatu vložen správně, je nastavení CSS, např. zobrazení pro iframe none (display:none). Příklad je uveden na následujícím obrázku. Pokud tomu tak je, váš vývojář bude muset změnit CSS webové stránky.
Z-index nějakého prvku na webu více než 1000000
Vlastnost z indexu určuje pořadí zobrazení prvků. Element s větším indexem je vždy před prvkem s nižším indexem. Pokud tedy máte nějaký prvek, který má z-index více než 1M, může překrývat widget.
Javascript je zakázán v prohlížeči
Javascript je ve výchozím nastavení povolen ve všech prohlížečích, ale v případě, že jste jej deaktivoval/a, je třeba jej znovu povolit. Návod, jak na to v různých prohlížečích, najdete zde.
Testovací prostředí
Vaše webové stránky jsou v testovacím prostředí (např. Localhost), intranetu, umístěné na soukromé VPN, nebo mají omezený přístup. Web musí být plně přístupný z internetu, aby byla zajištěna 100% funkčnost Smartsuppu.
Pokud jste měnil/a pozici chatu pomocí API, ujistěte se, že je viditelný i na menších displejích. Pokud je offset příliš velký (nebo malý), může být chat zcela nebo částečně neviditelný.
Content security policy
Jestliže používáte na webu tzv. Content security policy, ujistěte se, že máte povoleny všechny naše domény (ideálně kontaktujte svého developera, aby naše domény povolil):
smartsupp.com
smartsuppchat.com
cdn77.org
smartsuppcdn.com
Pokuď je problém s CSP, vidíte to i v Chrome konzoli (CTRL+SHIFT+J) například takhle:
Čáry máry
V případě, že jste problém nenalezl/a, kontaktujte nás prosím pomocí chatu ve Vašem Dashboardu a poskytněte co nejvíce informací (potřebujeme adresu vašeho webu a registrační e-mail do Smartsupp). Prozkoumáme to.
Stále si nevíte rady? Kontaktujte nás prostřednictvím chatu po přihlášení se do vašeho Smartsupp účtu. Rádi vám pomůžeme. Upozorňujeme, že zákaznický servis je dostupný pouze v placených balíčcích.

