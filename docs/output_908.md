# Smartsupp — Grupos
## Esta función solo está disponible en el paquete PRO.   ¿Qué son los grupos? Los grupos son una característica de Smartsupp, que es extremadamente útil cuan
Esta función solo está disponible en el paquete PRO.
¿Qué son los grupos?
Los grupos son una característica de Smartsupp, que es extremadamente útil cuando tienes varios agentes y deseas enrutar chats desde partes específicas de tu web al agente específico.
Si tienes un sitio web multilingüe, puedes dirigir los chats desde la sección en inglés de tu sitio web a tu agente de habla inglesa, etc.
Estás utilizando Smartsupp en varios sitios web y tienes diferentes agentes para cada uno de estos sitios web.
Vendes diferentes productos en tu sitio web y deseas que tus visitantes siempre sean atendidos por un especialista en ese campo en particular.
¿Cómo configurar grupos?
Creando grupos
Encontrarás la configuración de grupos en Ajustes → Grupos
Después de eso, crea al menos 2 grupos haciendo clic en el botón Agregar grupo en la esquina superior derecha de tu pantalla.
Agregar agentes a los grupos
Asigna todos tus agentes a los grupos creados. Incluso un agente no asignado puede cambiar el estado del chat en todo tu sitio web, lo que probablemente no desees. Puedes asignar agentes fácilmente a un grupo específico, simplemente haciendo clic en su foto en la configuración del grupo. El número de agentes para cada grupo es ilimitado.
Después de asignar todos tus agentes, puedes ver quién está en qué grupo en ajustes así:
Nota: Después de que todos tus agentes estén asignados a grupos, deben ACTUALIZAR su panel para que los cambios surtan efecto.
Agregar el código de grupo a tu sitio web
Agrega el código de grupo justo debajo del código de chat en uno de tus sitios web o páginas para dirigir los chats al grupo. Debes insertar el código de grupo después del código de chat de Smartsupp.
Tu código en ese sitio web específico se verá así:
<script>
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'YOUR_SMARTSUPP_CHAT_CODE';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
</script>

<script>
smartsupp('group', 'GROUP_ID'); //group Support EN
</script>
Comprueba la configuración
Si todo está configurado correctamente y tus agentes actualizaron sus paneles, deberían ver el grupo de cada nuevo visitante en la lista de visitantes (solo pueden ver los visitantes de los grupos a los que están asignados).
Puedes utilizar los grupos en combinación con un Formulario de contacto, por lo que tus visitantes podrán elegir con qué grupo de agentes necesitan comunicarse. Encontrarás la opción en Ajustes → Cuadro de chat (1) → Formulario de contacto (2) → Selección de grupo (3). Debes tener al menos un grupo creado antes de poder habilitar esta opción.
Así es como se verá la caja de chat con la selección de grupo en tu sitio web:
¿Sigues confundido? Contáctanos a través de la caja de chat en tu panel de conversaciones y estaremos encantados de comunicarnos cotigo. Ten en cuenta que el servicio al cliente está incluido solo en los paquetes pagos.

