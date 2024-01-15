# Smartsupp — Wie verwende ich Smartsupp mit Content Security Policy (CSP)?
## Content Security Policy (CSP) ist eine zusätzliche Sicherheitsebene, mit deren Hilfe bestimmte Arten von Angriffen erkannt und gemindert werden können, ein
Content Security Policy (CSP) ist eine zusätzliche Sicherheitsebene, mit deren Hilfe bestimmte Arten von Angriffen erkannt und gemindert werden können, einschließlich Cross Site Scripting (XSS) - und Dateninjektionsangriffen. Diese Angriffe werden für alles verwendet, vom Datendiebstahl über die Verunstaltung von Websites bis hin zur Verbreitung von Malware.
Wenn Sie CSP auf Ihrer Website verwenden, müssen Sie die folgenden Regeln hinzufügen, damit Smartsupp ordnungsgemäß funktioniert:
CSP v3 - strikt, kompatibel mit Google
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

Changelog 2020-04-17: Folgendes hinzugefügt 
connect-src:
      https://*.smartsuppchat.com
      https://*.smartsuppcdn.com

2020-09-22: Folgendes entfernt 
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

Sind Sie noch verwirrt? Kontaktieren Sie uns über die Chat-Box in Ihrem Dashboard und wir werden uns gerne mit Ihnen in Verbindung setzen. Bitte beachten Sie, dass der Kundenservice nur in kostenpflichtigen Paketen enthalten ist.

