# Smartsupp — How to use Smartsupp with Content security policy (CSP)?
## Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS
Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement to distribution of malware.
If you are using CSP on your website, you will need to add the following rules for Smartsupp live chat to work correctly: 
CSP v3 - strict, compatible with Google
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

Still confused? Contact us via the chat box in your dashboard and we’ll be happy to get in touch with you. Please note that customer service is included only in paid packages.

