# Smartsupp — Consentimiento de cookies
## Si el RGPD requiere que tu sitio web tenga una política de cookies y un banner de cookies correspondiente para notificar a los visitantes sobre las cookies
Si el RGPD requiere que tu sitio web tenga una política de cookies y un banner de cookies correspondiente para notificar a los visitantes sobre las cookies en tu sitio, debes habilitar el consentimiento de cookies en tu panel de control de Smartsupp.
Hemos preparado un tutorial sobre cómo puedes configurar los diferentes tipos de cookies que almacenarás y cómo ajustar la configuración y el texto de tu barra de cookies en consecuencia.
Para comprender las instrucciones a continuación, necesitarás conocimientos avanzados en programación. Si no te sientes calificado, te recomendamos que lo envíes al desarrollador o webmaster que administra la barra de cookies en tu sitio web.
Si usas un dispositivo Cookiebot para administrar las cookies, desplázate hacia abajo hasta el final de este artículo para ver algunos ejemplos de cómo puedes administrar tus cookies.
¿Dónde habilitar el consentimiento de cookies en Smartsupp?
La configuración del consentimiento de cookies puedes encontrar en Ajustes >> Configuración de cuenta >> Seguridad y privacidad
De forma predeterminada, el modo de consentimiento de cookies está deshabilitado. Cuando está habilitado, solo se almacenan las cookies necesarias. Puedes encontrar una lista de cookies funcionales (necesarias) aquí:
Ayuda - Cookies funcionales
Para habilitar las estadísticas y las cookies de marketing, debes activar un código específico. El valor predeterminado del consentimiento de cookies analíticas y de marketing está vacío. Por lo tanto, las estadísticas y las cookies de marketing no se almacenan hasta que el visitante esté de acuerdo. Las listas de estadísticas y cookies de marketing de la caja de chat se pueden encontrar aquí:
Ayuda - Cookies de estadísticas Ayuda - Cookies de marketing
Agrega el código de consentimiento de cookies a tu sitio web
El consentimiento de cookies es fácil de implementar con JavaScript. Usa botones en tu banner de cookies para administrar las estadísticas de Smartsupp y las cookies de marketing.
Ignorando el consentimiento
Si un visitante ignora tu barra de cookies y no confirma o rechaza el consentimiento, el escenario es el siguiente:
La cookie ssupp.visit permanecerá en su valor anterior como era originalmente antes de que se activara Administrar consentimiento de cookies. No se incrementará hasta que se otorgue el consentimiento (esto no afectará el valor en el Tablero visible para los operadores, solo este valor particular en el Tablero y las cookies diferirán)
Las grabaciones están deshabilitadas
No se envían eventos de Google Analytics
Los chatbots y los mensajes automáticos seguirán funcionando sin cambios
Aceptando el consentimiento
Cookies de estadísticas
Si un visitante acepta cookies de estadísticas, añade:
smartsupp('analyticsConsent', true);
Este código habilita las cookies, que se almacenan para grabaciones y para enviar eventos de Google Analytics.
Cookies de marketing
Si el visitante acepta las cookies de marketing, agrega:
smartsupp('marketingConsent', true);
Este código habilita las cookies, que se utilizan para almacenar el número de visitas realizadas anteriormente por el visitante. Son necesarios para obtener información sobre el número de visitas de los operadores. Sin embargo, si el visitante no da su consentimiento, no afectará la funcionalidad de los chatbots y los mensajes automáticos.
Todas las cookies
Si un visitante acepta ambas / todas las cookies, agrega:
smartsupp('analyticsConsent', true);
smartsupp('marketingConsent', true);
Denegando el consentimiento
Cookies de estadísticas
Si un visitante rechaza las cookies de estadísticas, agrega:
smartsupp('analyticsConsent', false);
El rechazo del consentimiento suspenderá inmediatamente las grabaciones del visitante así como el envío de eventos a Google Analytics (en caso de reautorización, se habilitará la grabación junto con el envío de eventos de Google Analytics).
Cookies de marketing
Si un visitante rechaza las cookies de marketing, agrega:
smartsupp('marketingConsent', false);
Al negarse el consentimiento, la cookie ssupp.visit utilizada para determinar el número de visitas se elimina inmediatamente. Esto no afecta la funcionalidad de los chatbots y los mensajes automáticos.
Todas las cookies
Si un visitante rechaza todas las cookies, agrega:
smartsupp('analyticsConsent', false);
smartsupp('marketingConsent', false);
Ejemplo con Cookiebot
El siguiente script de ejemplo te ayudará a agregar el consentimiento de cookies en tu sitio web usando Cookiebot:
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
¿Sigues confundido? Contáctanos a través de la caja de chat en tu panel de conversaciones y estaremos encantados de comunicarnos cotigo. Ten en cuenta que el servicio al cliente está incluido solo en los paquetes pagos.

