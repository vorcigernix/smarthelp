# Smartsupp — WordPress
## Integración de Chat en vivo de Smartsupp ¿Aún no tienes cuenta de Smartsupp? Regístrate gratis  en sólo 2 minutos.   1. Usando nuestro plugin La opción más
Integración de Chat en vivo de Smartsupp
1. Usando nuestro plugin
La opción más fácil es instalar nuestro plugin e iniciar la sesión en tu cuenta.
Instala el plugin
Plugins > Agregar nuevo, busca el Smartsupp Live Chat y haz clic a Instalar ahora. Una vez instalado el complemento, haz clic en Activar.
Inicia la sesión en tu cuenta Smartsupp
Puedes Crear una cuenta nueva o Conectar una cuenta existente.
Si todo está bien, verás esta página.
Para chatear con los visitantes de tu web, inicia la sesión en Smartsupp.
2. Insertar el código de forma manual
Si no deseas utilizar el complemento (plugin), puedes insertar el código directamente en el tema de WordPress.
Ten cuidado: puedes destruir tu sitio web! Envía este tutorial a tu webmaster.
Copia el código
Tu código se encuentra en Smartsupp > Ajustes > Caja de chat > Código de chat.
Inserta el código
Apariencia > Editor > Encabezado de tema (header.php) > Insertar código > Actualizar archivo
Para chatear con los visitantes de tu web, inicia la sesión en Smartsupp.
3. Cambios personalizados avanzados
¿No quieres usar el complemento o has insertado el código manualmente y necesitas cambios personalizados avanzados?
Instala "Scripts n Styles"
De forma predeterminada, cuando instalas nuestro complemento o insertas nuestro código en el encabezado, se muestra en todas las páginas. En caso de que necesites mostrar nuestro código en ciertas páginas específicas o tal vez sólo una página, instalala el complemento (plugin) de tercero de WordPress Scripts n Styles.
Copia el código
Tu código se encuentra en Smartsupp > Ajustes > Caja de chat > Código de chat.
Modifica el código
Necesitas hacer algunos pequeños cambios en nuestro código predeterminado.
Lee cuidadosamente o no funcionará.
Quita estas líneas de nuestro código:
<!-- Smartsupp Live Chat script -->
<script type="text/javascript">
</script>
Tu código original...
<!-- Smartsupp Live Chat script -->
<script type="text/javascript">
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
window.smartsupp||(function(d) {
 var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
 s=d.getElementsByTagName('script')[0];c=d.createElement('script');
 c.type='text/javascript';c.charset='utf-8';c.async=true;
 c.src='//www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
</script>
... tiene que ser tal como se ve a continuación. EJEMPLO SOLAMENTE. ¡NO LO COPIES!
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
window.smartsupp||(function(d) {
 var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
 s=d.getElementsByTagName('script')[0];c=d.createElement('script');
 c.type='text/javascript';c.charset='utf-8';c.async=true;
 c.src='//www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
Inserta el código
Ve a Páginas, edita la página que deseas y por debalo del contenido en Scripts n Styles inserta el código modificado.
Haz clic en Actualizar secuencias de comandos y Actualiza tu página. Click Update Scripts and Update your page.
Para chatear con los visitantes de tu web, inicia la sesión en Smartsupp.
El Smartsupp no se puede instalar en WordPress.com
El código de seguimiento no se puede instalar en un sitio web gratuito alojado en WordPress.com debido al hecho de que los complementos personalizados no se pueden instalar en la plataforma. Además, JavaScript personalizado está bloqueado de ser incrustado dentro de estos tipos de sitios.
Nota: Si estás utilizando tu cuenta de Google para iniciar sesión en Smartsupp, no será posible iniciar la sesión en el plugin de WordPress de la misma manera. Puedes insertar el código de chat manualmente, o puedes hacer clic en "He olvidado la contraseña" en Smartsupp y configurar tu inicio de sesión por correo electrónico.
¿Sigues confundido? Contáctanos a través de la caja de chat en tu panel de conversaciones y estaremos encantados de comunicarnos cotigo. Ten en cuenta que el servicio al cliente está incluido solo en los paquetes pagos.

