# Smartsupp — Jak používat Smartsupp s Content security policy (CSP)?
## Content Security Policy (CSP) je dodatečný bezpečnostní prvek, který chrání Váš web a uživatele před útoky jako např. Cross Site Scripting (XSS) nebo data 
Content Security Policy (CSP) je dodatečný bezpečnostní prvek, který chrání Váš web a uživatele před útoky jako např. Cross Site Scripting (XSS) nebo data injections. Tyto útoky se používají pro všechno od krádeže dat až po distribuci škodlivého softwaru.
Pokud na svých webových stránkách používáte CSP, budete muset přidat následující pravidla, aby Smartsupp live chat fungoval správně:
CSP v3 - strict, kompatibilní s Google
Content-Security-Policy:
object-src 'none';
script-src 'nonce-{random}' 'strict-dynamic' 'unsafe-inline' https: http:;
base-uri 'self';
report-uri https://your-report-collector.example.com/

CSP v2
Content-Security-Policy: 
    connect-src: 
        wss://*.smartsupp.com
        https://*.smartsupp.com 
        https://*.smartsuppchat.com
        https://*.smartsuppcdn.com
    font-src: 
        https://*.smartsuppcdn.com
    media-src: 
        https://*.smartsuppcdn.com
    img-src: 
        data: 
        https://*.smartsuppcdn.com
    script-src: 
        'unsafe-inline' 
        https://*.smartsuppchat.com 
        https://*.smartsuppcdn.com
    style-src: 
        'unsafe-inline' 
        https://*.smartsuppcdn.com

Changelog 2020-04-17: Přidáno 
connect-src:
    https://*.smartsuppchat.com
    https://*.smartsuppcdn.com

2020-09-22: Removed following 
   connect-src: 
        https://smartsupp-widget-161959.c.cdn77.org
    font-src: 
        https://smartsupp-widget-161959.c.cdn77.org
    media-src: 
        https://smartsupp-widget-161959.c.cdn77.org
    img-src: 
        https://smartsupp-widget-161959.c.cdn77.org
    script-src: 
        https://smartsupp-widget-161959.c.cdn77.org
    style-src:
        https://smartsupp-widget-161959.c.cdn77.org

Stále si nevíte rady? Kontaktujte nás prostřednictvím chatu po přihlášení se do vašeho Smartsupp účtu. Rádi vám pomůžeme. Upozorňujeme, že zákaznický servis je dostupný pouze v placených balíčcích.

