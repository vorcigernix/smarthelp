# Smartsupp — Gruppen
## Diese Funktion ist nur im PRO-Paket verfügbar.
  Was sind Gruppen? Gruppen sind eine Funktion von Smartsupp, die sehr nützlich ist, wenn Sie mehrere Agente
Diese Funktion ist nur im PRO-Paket verfügbar.
Was sind Gruppen?
Gruppen sind eine Funktion von Smartsupp, die sehr nützlich ist, wenn Sie mehrere Agenten haben und Chats von bestimmten Teilen Ihres Webs an den bestimmten Agenten weiterleiten möchten.
Wenn Sie eine mehrsprachige Webseite haben, können Sie Chats vom englischen Teil Ihrer Website an Ihren englischsprachigen Agenten weiterleiten und so weiter.
Sie verwenden Smartsupp auf mehreren Webseiten und haben für jede dieser Webseiten unterschiedliche Agenten.
Sie verkaufen verschiedene Produkte auf Ihrer Webseite und möchten, dass Ihre Besucher immer von einem Spezialisten auf diesem Gebiet bedient werden.
Wie stelle ich Gruppen ein?
Gruppen einstellen
Sie finden Gruppeneinstellungen unter Einstellungen → Gruppen 
Erstellen Sie anschließend mindestens zwei Gruppen, indem Sie oben rechts auf die Schaltfläche Gruppe hinzufügen klicken.
Fügen Sie den Gruppen Agenten hinzu
Ordnen Sie alle Ihre Agenten den erstellten Gruppen zu. Selbst ein nicht zugewiesener Agent kann den Status des Chats auf Ihrer gesamten Website ändern, was Sie wahrscheinlich nicht möchten. Sie können Agenten ganz einfach einer bestimmten Gruppe zuweisen, indem Sie in den Gruppeneinstellungen auf deren Foto klicken. Die Anzahl der Agenten für jede Gruppe ist unbegrenzt.
Nachdem Sie alle Ihre Agenten zugewiesen haben, können Sie in folgenden Einstellungen sehen, wer in welcher Gruppe ist:
Hinweis: Nachdem alle Ihre Agenten Gruppen zugewiesen wurden, müssen sie ihr Dashboard AKTUALISIEREN, damit die Änderungen wirksam werden.
Fügen Sie den Gruppencode zu Ihrer Website hinzu
Fügen Sie den Gruppencode direkt unter dem Chat-Code auf einer Ihrer Websites oder Seiten hinzu, um Chats an die Gruppe weiterzuleiten. Sie müssen den Gruppencode nach dem Smartsupp-ChatCode einfügen.
Ihr Code auf dieser bestimmten Website sieht dann folgendermaßen aus:
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
Überprüfen Sie die Einstellungen
Wenn alles richtig eingestellt ist und Ihre Agenten ihre Dashboards aktualisiert haben, sollten sie die Gruppe jedes neuen Besuchers in der Besucherliste sehen (sie können nur Besucher aus Gruppen sehen, denen sie zugewiesen sind).
Verwenden von Gruppen mit dem Kontaktformular
Sie können die Gruppen in Kombination mit einem Kontaktformular verwenden, sodass Ihre Besucher auswählen können, mit welcher Gruppe von Agenten sie kommunizieren möchten. Sie finden die Option unter Einstellungen → Chat-Box (1) → Kontaktformular (2) → Gruppenauswahl (3). Sie müssen mindestens eine Gruppe erstellt haben, bevor diese Option aktiviert werden kann.
So sieht die Chat-Box mit der Gruppenauswahl auf Ihrer Website aus:
Sind Sie noch verwirrt? Kontaktieren Sie uns über die Chat-Box in Ihrem Dashboard und wir werden uns gerne mit Ihnen in Verbindung setzen. Bitte beachten Sie, dass der Kundenservice nur in kostenpflichtigen Paketen enthalten ist.

