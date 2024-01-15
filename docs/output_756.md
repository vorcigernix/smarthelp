# Smartsupp — WordPress
## Smartsupp Live Chat Integration Sie haben noch kein Smartsupp-Konto? Melden Sie sich kostenlos  in nur 2 Minuten an.   Es gibt drei Möglichkeiten, wie Sie 
Smartsupp Live Chat Integration
Es gibt drei Möglichkeiten, wie Sie Smartsupp auf Ihrer Website installieren können. Wählen Sie eine aus, die für Sie am bekanntesten klingt.
1. Mit unserem Plugin
Am einfachsten ist es, unser Plugin zu installieren und sich bei Ihrem Konto anzumelden.
PIugin installieren
Plugins> Neues Plugin hinzufügen, nach Smartsupp Live Chat suchen und auf Jetzt installieren klicken.
Melden Sie sich bei Smartsupp an
Sie können ein kostenloses Konto erstellen oder ein vorhandenes Konto verbinden.
Wenn alles in Ordnung ist, sehen Sie diese Seite.
2. Code manuell einfügen
Wenn Sie das Plugin nicht verwenden möchten, können Sie den Chat-Code direkt in das WordPress-Theme einfügen.
Seien Sie vorsichtig: Sie können Ihre Website zerstören! Senden Sie dieses Tutorial an Ihren Webmaster.
Code kopieren
Ihr Code befindet sich in Smartsupp - Einstellungen - Chat-Box - Chat-Code.
Code einfügen
Appearance > Editor > Theme Header (header.php) > Code einfügen > Datei aktualisieren
3. Erweiterte benutzerdefinierte Änderungen
Möchten Sie das Plugin nicht verwenden oder haben Sie Code manuell eingefügt und benötigen erweiterte benutzerdefinierte Änderungen? Die folgenden Schritte sind genau für Sie.
Installieren Sie "Scripts n Styles"
Wenn Sie unser Plugin installieren oder unseren Code in den Header einfügen, wird er standardmäßig auf allen Seiten angezeigt. Wenn Sie unseren Code auf bestimmten Seiten oder nur auf einer Seite anzeigen müssen, installieren Sie 3rd party WordPress plugin Scripts n Styles.
Copy kopieren
Ihr Code befindet sich in Smartsupp - Einstellungen - Chat-Box - Chat-Code.
Code anpassen
Sie müssen einige kleine Änderungen an unserem Standardcode vornehmen.
Lesen Sie sorgfältig durch, sonst funktioniert es nicht.
Entfernen Sie diese Zeilen aus unserem Code.
<!-- Smartsupp Live Chat script -->
<script type="text/javascript">
</script>
Ihr Originalcode ...
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
... muss so aussehen, wie Sie unten sehen. NUR BEISPIEL. NICHT KOPIEREN!
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
window.smartsupp||(function(d) {
 var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
 s=d.getElementsByTagName('script')[0];c=d.createElement('script');
 c.type='text/javascript';c.charset='utf-8';c.async=true;
 c.src='//www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
Code einfügen
Gehen Sie zu Pages, bearbeiten Sie die gewünschte Seite und fügen Sie in Scripts n Styles geänderten Code ein.
Klicken Sie auf Skripte aktualisieren und aktualisieren Sie Ihre Seite.
Smartsupp kann nicht auf WordPress.com installiert werden
Der Chat-Code kann nicht auf einer kostenlosen gehosteten WordPress.com-Website installiert werden, da benutzerdefinierte Plugins nicht auf der Plattform installiert werden können. Benutzerdefiniertes JavaScript kann auch nicht in diese Art von Websites eingebettet werden.
Hinweis: Wenn Sie ein Google-Konto verwenden, um sich bei Smartsupp anzumelden, ist es nicht möglich, sich auf die gleiche Weise beim WordPress-Plugin anzumelden.
Sie können den Chat-Code entweder manuell eingeben, oder Sie klicken in Smartsupp auf „Passwort vergessen“ und richten Ihren Login per E-Mail ein.
Sind Sie noch verwirrt? Kontaktieren Sie uns über die Chat-Box in Ihrem Dashboard und wir werden uns gerne mit Ihnen in Verbindung setzen. Bitte beachten Sie, dass der Kundenservice nur in kostenpflichtigen Paketen enthalten ist.

