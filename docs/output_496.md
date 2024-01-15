# Smartsupp — Comment utiliser Smartsupp avec la politique de sécurité du contenu (CSP)?
## La politique de sécurité du contenu (CSP)  est une couche de sécurité supplémentaire qui permet de détecter et d'atténuer certains types d'attaques, notamm
La politique de sécurité du contenu (CSP) est une couche de sécurité supplémentaire qui permet de détecter et d'atténuer certains types d'attaques, notamment les attaques Cross Site Scripting (XSS) et les attaques par injection de données. Ces attaques sont utilisées pour tout, du vol de données à la dégradation du site, en passant par la diffusion de logiciels malveillants.
Si vous utilisez CSP sur votre site Web, vous devrez ajouter les règles suivantes pour que Smartsupp fonctionne correctement:
CSP v3 - strict, compatible avec Google
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

Vous ne savez toujours pas quoi faire ? Contactez-nous via le chat box de votre tableau de bord et nous nous ferons un plaisir de vous contacter. Veuillez noter que le service clientèle n’est inclus que dans les formules payantes.

