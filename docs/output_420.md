# Smartsupp — Souhlas s ukládáním cookies
## Pokud Obecné nařízení o ochraně osobních údajů GDPR vyžaduje, abyste na vaší webové stránce požádali o souhlas s ukládáním cookies, je třeba si v nastavení
Pokud Obecné nařízení o ochraně osobních údajů GDPR vyžaduje, abyste na vaší webové stránce požádali o souhlas s ukládáním cookies, je třeba si v nastavení chat boxu povolit Správu souhlasu se zpracováním cookies. 
Níže jsme pro vás připravili návod, jak si můžete nastavit, které typy cookies budete ukládat a podle toho si následně přizpůsobit nastavení a texty vaší cookie lišty. 
Abyste návod níže dobře pochopili, je potřeba mít již pokročilejší znalosti programování. V případě, že tomu tak není, zašlete jej svému vývojáři nebo správci webu, který má na starosti vaši cookie lištu. 
Pokud používáte ke správě cookies zařízení Cookiebot, přejděte na konec článku, kde uvidíte, několik příkladů, jakým způsobem můžete cookies spravovat. 
Kde povolit Správu souhlasu se zpracováním cookies?
Přejděte do Nastavení > Nastavení účtu > Zabezpečení a Soukromí
Ve výchozím stavu je Správa souhlasu vypnuta. Po jejím zapnutí ukládá Smartsupp chat pouze cookies nezbytné pro svou funkci. Seznam funkčních cookies naleznete zde: 
Help - Funkční cookies 
Pro povolení statistických a marketingových cookies je pak nezbytné odeslat speciální kód. Výchozí hodnota souhlasu s marketingovými a analytickými cookies je prázdná. Dokud tedy nebude návštěvníkem udělen souhlas, statistické ani marketingové cookies se neukládají. Seznamy statistických a analytických cookies chat boxu naleznete zde:
Help - Statistické cookies Help - Marketingové cookies
Vložte správu souhlasu na vaši stránku
Správu souhlasu lze jednoduše implementovat JavaScriptem. K přijetí statistických a marketingových cookies použijte tlačítka ve vaší cookie liště.
Ignorování souhlasu
Pokud návštěvník ignoruje vaši cookie lištu a souhlas nepotvrdí ani nezamítne, je situace následující:
ssupp.visit cookie zůstane na předchozí hodnotě, na jaké byla před povolením Správy souhlasu a do udělení souhlasu nebude navyšována (tzn. neovlivní hodnotu v Dashboardu viditelnou operátory, jen se tato hodnota v Dashboardu a v cookies bude lišit)
Nahrávání návštěvníka na webu bude vypnuté
Nebudou se odesílat žádné Google Analytics eventy
Chatboti a automatické zprávy budou nadále fungovat normálně
Přijetí souhlasu
Statistické cookies
Pokud návštěvník akceptuje analytické (statistické) cookies, pošlete:
smartsupp('analyticsConsent', true);
Tento kód povolí cookies, které se ukládají při používání nahrávek návštěvníků na webu a odesílání Google Analytics eventů.
Marketingové cookies
Pokud návštěvník akceptuje marketingové cookies, pošlete:
smartsupp('marketingConsent', true);
Tento kód povolí cookies, které se používají pro ukládání počtu předchozích návštěv, které návštěvník provedl. Jsou nezbytné pro získání informací o počtu návštěv pro operátory. Nicméně pokud souhlas návštěvník neudělí, neovlivní to funkčnost chatbotů a automatických zpráv.
Všechny cookies
Pokud návštěvník akceptuje obojí / všechny cookies, pošlete:
smartsupp('analyticsConsent', true);
smartsupp('marketingConsent', true);
Odmítnutí souhlasu
Statistické cookies
Pokud návštěvník odmítne souhlas se statistickými (analytickými) cookies, pošlete:
smartsupp('analyticsConsent', false); Odmítnutím souhlasu se okamžitě pozastaví nahrávání návštěvníka na webu a odesílání eventů do Google Analytics (v případě opětovného povolení bude nahrávka kontinuálně pokračovat a spustí se i odesílání Google Analytics eventů) 
Marketingové cookies
Pokud návštěvník souhlas odmítne marketingové cookies, pošlete:
smartsupp('marketingConsent', false);
Odmítnutím souhlasu se okamžitě vymaže ssupp.visit cookie pro zjišťování počtu návštěv návštěvníka webu. Neovlivní to funkčnost chatbotů a automatických zpráv.
Všechny cookies
Pokud návštěvník odmítne souhlas se všemi cookies, pošlete:
smartsupp('analyticsConsent', false);
smartsupp('marketingConsent', false);
Příklad pro Cookiebota
Tento příklad zajistí přijetí požadovaných souhlasů, pokud vaše stránka spravuje cookies pomocí služby Cookiebot:
window.addEventListener('CookiebotOnAccept', function (e) {
if (Cookiebot.consent.marketing) {
smartsupp('marketingConsent', true);
}
if (Cookiebot.consent.statistics) {
smartsupp('analyticsConsent', true);
}
})
window.addEventListener('CookiebotOnDecline', function (e) {
smartsupp('marketingConsent', false);
smartsupp('analyticsConsent', false);
})
Stále si nevíte rady? Kontaktujte nás prostřednictvím chatu po přihlášení se do vašeho Smartsupp účtu. Rádi vám pomůžeme. Upozorňujeme, že zákaznický servis je dostupný pouze v placených balíčcích.

