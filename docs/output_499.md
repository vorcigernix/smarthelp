# Smartsupp — ¿Cómo usar Smartsupp con la Política de Seguridad de Contenidos (CSP)?
## Política de Seguridad de Contenidos (CSP) es una capa de seguridad añadida que ayuda a detectar y mitigar ciertos tipos de ataques, incluyendo Cross Site S
Política de Seguridad de Contenidos (CSP) es una capa de seguridad añadida que ayuda a detectar y mitigar ciertos tipos de ataques, incluyendo Cross Site Scripting (XSS) y ataques de inyección de datos. Estos ataques se utilizan para todo, desde el robo de datos hasta la desfiguración del sitio y la distribución de malware.
Si estás usando CSP en tu sitio web, tendrás que añadir las siguientes reglas para que Smartsupp funcione correctamente:
CSP v3 - strict, compatible con Google
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

¿Sigues confundido? Contáctanos a través de la caja de chat en tu panel de conversaciones y estaremos encantados de comunicarnos cotigo. Ten en cuenta que el servicio al cliente está incluido solo en los paquetes pagos.

