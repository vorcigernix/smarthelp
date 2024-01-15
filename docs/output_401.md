# Smartsupp — ¿Por qué no puedo ver el chat en mi página web?
## Chat oculto en los ajustes Asegúrate de que no tienes el chat oculto mientras estás desconectado(1), o completamente oculto(2) en la Ajustes > Caja de c
Chat oculto en los ajustes
Asegúrate de que no tienes el chat oculto mientras estás desconectado(1), o completamente oculto(2) en la Ajustes > Caja de chat > Opciones
Estás bloqueado
Asegúrate de no estar bloqueado como visitante en tu cuenta de Smartsupp.
Comprueba tu configuración y mira si tu dirección IP no está en la lista de direcciones direcciones IP´s bloqueadas. 
Además, trata de usar el filtro de "visitantes bloqueados" en la lista de visitantes y comprueba si hay algún visitante bloqueado. Si te encuentras entre ellos, desbloquéate.
El código del chat no está insertado o lo está incorrectamente
Abre el código fuente de tu web o consola. Abre el código fuente de la página (en Chrome pulsando CTRL+U) y busca (CTRL+F) "smartsupp". Si no se encuentran resultados, significa que el código del chat no está insertado en el código de la web. Deberás ponerte en contacto con tu desarrollador para insertar el código del chat. 
Si estás usando algún administrador de etiquetas, por ejemplo Google tag manager, asegúrate de que funciona correctamente. En la mayoría de los casos, deberías poder encontrar el código de chat en los elementos de tu web (pulsa CTRL+Mayús+J, haz clic en la pestaña Elementos(1) y busca smartsupp(2))
Además, asegúrate de no usar más de un código de chat en tu página web.
Error en el código
Asegúrate de que no falte ninguna carácter en el código del chat. Lo ideal es copiar el código del chat directamente de los Ajustes. Puedes intentar, por ejemplo, usar Diffchecker para comprobar si el código de tu web es el mismo que el original. El problema más común es que al código le falta un guión bajo (_), y puedes ver el error en la consola del navegador (CTRL+Mayús+J).
Problema con el CSS de la web
Un caso típico por el que el chat no se muestra en tu web, aunque el código del chat se inserte correctamente, es que ha configurado la propiedad de visualización del iframe a "ninguno" (display: none). En la siguiente imagen se muestra un ejemplo. Si ese es el caso, tu desarrollador tendrá que cambiar el CSS del sitio web.
El Z-index de algún elemento de la página web da más de 1000000
La propiedad del z-index especifica el orden de apilamiento de un elemento.
Un elemento con un orden de apilamiento mayor siempre está delante de un elemento con un orden de apilamiento menor.
Así, si tienes algún elemento que tiene el z-index a más de un millón, puede ocultar el widget.
El Javascript está deshabilitado en el navegador
El Javascript está habilitado en todos los navegadores de forma predeterminada, pero en el caso de que lo hayas desactivado, tendrás que volver a habilitarlo. Puedes leer acerca de las opciones para habilitar el Javascript en los diferentes navegadores existentes en el siguiente tutorial.
Entorno de prueba
Tu página web está en un dispositivo o servidor local (también conocido como localhost), un sitio web restringido, una intranet, o localizado en una VPN privada. El sitio web debe ser completamente accesible desde Internet para asegurar el 100% de funcionalidad de Smartsupp.
Si utilizas una posición de la caja de chat personalizada vía API y decides cambiar el desplazamiento del widget, asegúrate de que sea visible incluso en pantallas más pequeñas. Si el desplazamiento es demasiado grande (o pequeño), entonces el chat puede ser parcial o completamente invisible.
Política de seguridad del contenido
Si estás usando Política de seguridad del contenido en tu página web, asegúrate de que todos nuestros dominios estén en la lista blanca de tu CSP.
smartsupp.com
smartsuppchat.com
cdn77.org
smartsuppcdn.com
Si hay un problema con la política de seguridad del contenido, deberías ver en la consola de Chrome (CTRL+Mayúsculas+J), que el script viola la directiva de la política de seguridad del contenido.
Magia
En caso de que tu problema no se encuentre entre los ya enumerados, por favor comunícate con nosotros a través de la caja de chat en tu panel de conversaciones y facilítanos toda la información que puedas (necesitaremos la dirección de tu página web y la dirección de email con la que te registraste en Smartsupp). Lo investigaremos.
¿Sigues confundido? Contáctanos a través de la caja de chat en tu panel de conversaciones y estaremos encantados de comunicarnos cotigo. Ten en cuenta que el servicio al cliente está incluido solo en los paquetes pagos.

