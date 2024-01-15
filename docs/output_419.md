# Smartsupp — Jak używać Smartsupp z Content security policy (CSP)?
## Content Security Policy (CSP) to dodatkowa warstwa ochrony, która pozwala na wykrywanie i odpieranie niektórych typów ataków, w tym Cross Site Scripting (X
Content Security Policy (CSP) to dodatkowa warstwa ochrony, która pozwala na wykrywanie i odpieranie niektórych typów ataków, w tym Cross Site Scripting (XSS) oraz ataków wprowadzania danych. Te ataki są używane do czynności takich jak: wykradanie danych, uszkodzenia strony, dystrybucja złośliwego oprogramowania.
Jeżeli używasz CSP na swojej stronie, powinieneś dodać następujące zasady dla Smartsupp live czata, aby działał poprawnie:
CSP v3 - strict, zgodne z Google
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

Nadal masz wątpliwości? Skontaktuj się z nami za pomocą czatu w panelu administracyjnym, a my z przyjemnością się z Tobą skontaktujemy. Pamiętaj, że obsługa klienta jest dostępna tylko w płatnych pakietach.

