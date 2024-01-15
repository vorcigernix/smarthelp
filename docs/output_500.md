# Smartsupp — Come utilizzare Smartsupp con Content security policy (CSP)?
## Content Security Policy (CSP) è un ulteriore livello di sicurezza che aiuta a rilevare e mitigare certi tipi di attacchi, tra cui Cross Site Scripting (XSS
Content Security Policy (CSP) è un ulteriore livello di sicurezza che aiuta a rilevare e mitigare certi tipi di attacchi, tra cui Cross Site Scripting (XSS) e attacchi di iniezione dei dati. Questi attacchi vengono utilizzati per tutto, dal furto di dati al defacing del sito alla distribuzione di malware.
Se utilizzi la CSP sul tuo sito, è necessario aggiungere le regole seguenti affinché Smartsupp funzioni correttamente: 
CSP v3 - strict, compatibile con Google
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

Sei ancora confuso? Contattaci tramite la chat box nella tua dashboard e saremo felici di aiutarti. Si prega di notare che il servizio clienti è incluso solo nei pacchetti a pagamento.

