# Smartsupp — Hogyan használható a Smartsupp a Tartalombiztonsági politikával (CSP)?
## A tartalombiztonsági politika (CSP) egy kiegészítő biztonsági réteg, amely elősegíti a támadások bizonyos típusainak felismerését és enyhítését, beleértve 
A tartalombiztonsági politika (CSP) egy kiegészítő biztonsági réteg, amely elősegíti a támadások bizonyos típusainak felismerését és enyhítését, beleértve a Cross Site Scripting (XSS) és az adatinjekciós támadásokat. Ezeket a támadásokat mindenkire alkalmazzák, az adatlopásoktól kezdve a webhely felmentéséig és a rosszindulatú programok terjesztéséig. 
Ha a weboldalon CSP-t használ, akkor a Smartsupp megfelelő működéséhez a következő szabályokat kell hozzáadnia:
CSP v3 - szigorú, kompatibilis a Google-vel
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

Changelog 2020-04-17: Added following 
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

Még mindig kérdése van? Lépjen kapcsolatba velünk az irányítópulton lévő chat dobozon keresztül, és örömmel felvesszük Önnel a kapcsolatot. Felhívjuk figyelmét, hogy az ügyfélszolgálatot csak a fizetős csomagok tartalmazzák.

