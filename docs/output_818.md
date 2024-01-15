# Smartsupp — Cookie-Einwilligung
## Wenn die DSGVO verlangt, dass Ihre Website über eine Cookie-Richtlinie und ein entsprechendes Cookie-Banner verfügt, um Besucher über die Cookies auf Ihrer
Wenn die DSGVO verlangt, dass Ihre Website über eine Cookie-Richtlinie und ein entsprechendes Cookie-Banner verfügt, um Besucher über die Cookies auf Ihrer Website zu informieren, sollten Sie die Cookie-Einwilligung in Ihrem Smartsupp-Dashboard aktivieren.
Wir haben ein Tutorial vorbereitet, wie Sie die verschiedenen Arten von Cookies einrichten können, die Sie speichern, und wie Sie die Einstellungen und den Text Ihrer Cookie-Leiste entsprechend anpassen können.
Um die folgenden Anweisungen zu verstehen, benötigen Sie fortgeschrittene Programmierkenntnisse. Wenn Sie sich nicht qualifiziert fühlen, empfehlen wir Ihnen, sich an Ihren Entwickler oder Webmaster zu wenden, der die Cookie-Leiste auf Ihrer Website verwaltet.
Wenn Sie einen Cookiebot verwenden, um Cookies zu verwalten, scrollen Sie bitte bis zum Ende dieses Artikels, um einige Beispiele zu sehen, wie Sie Ihre Cookies verwalten können.
Wo kann die Cookie-Zustimmung in Smartsupp aktiviert werden?
Sie finden die Einstellungen der Cookie-Zustimmung unter Einstellungen >> Kontoeinstellungen >> Sicherheit und Datenschutz
Standardmäßig ist der Cookie-Zustimmungsmodus deaktiviert. Wenn aktiviert, werden nur notwendige Cookies gespeichert. Eine Liste der funktionalen (notwendigen) Cookies finden Sie hier:
Help - Funktionale Cookies
Um Marketing-Cookies und statistische zu aktivieren, müssen Sie einen bestimmten Code auslösen. Der Standardwert der Zustimmung zu Marketing-Cookies und analytische Cookies ist leer. Daher werden statistische und Marketing-Cookies nicht gespeichert, bis der Besucher zustimmt. Listen mit statistische und Marketing-Cookies der Chat-Box finden Sie hier:
Help - Analytische Cookies Help - Marketing-Cookies
Fügen Sie den Cookie-Zustimmungscode zu Ihrer Website hinzu
Die Cookie-Einwilligung lässt sich einfach mit JavaScript implementieren. Verwenden Sie Schaltflächen in Ihrem Cookie-Banner, um Smartsupp-Statistiken und Marketing-Cookies zu verwalten.
Zustimmung ignorieren
Wenn ein Besucher Ihre Cookie-Leiste ignoriert und die Zustimmung nicht bestätigt oder ablehnt, ist das Szenario wie folgt:
Das ssupp.visit-Cookie behält seinen vorherigen Wert, den es ursprünglich hatte, bevor die Cookie-Einwilligung verwalten aktiviert wurde. Er wird nicht erhöht, bis die Zustimmung erteilt wird (dies wirkt sich nicht auf den Wert im Dashboard aus, der für die Bediener sichtbar ist, nur dieser bestimmte Wert im Dashboard und die Cookies werden unterschiedlich sein).
Die Aufnahmen sind deaktiviert
Es werden keine Google Analytics-Ereignisse gesendet
Chatbots und automatische Nachrichten funktionieren unverändert weiter
Zustimmung akzeptieren
Statistische Cookies
Wenn ein Besucher Statistik-Cookies akzeptiert, fügen Sie Folgendes hinzu:
smartsupp('analyticsConsent', true);
Dieser Code aktiviert Cookies, die für Aufzeichnungen und zum Senden von Google Analytics-Ereignissen gespeichert werden.
Marketing-Cookies
Wenn der Besucher Marketing-Cookies akzeptiert, fügen Sie Folgendes hinzu:
smartsupp('marketingConsent', true);
Dieser Code aktiviert Cookies, die verwendet werden, um die Anzahl der vorherigen Besuche des Besuchers zu speichern. Sie sind notwendig, um Informationen über die Anzahl der Besuche für die Bediener zu erhalten. Wenn der Besucher jedoch keine Zustimmung erteilt, hat dies keinen Einfluss auf die Funktionalität von Chatbots und automatischen Nachrichten.
Alle Cookies
Wenn ein Besucher beide / alle Cookies akzeptiert, fügen Sie Folgendes hinzu:
smartsupp('analyticsConsent', true);
smartsupp('marketingConsent', true);
Zustimmung verweigern
Statistische Cookies
Wenn ein Besucher statistische Cookies ablehnt, fügen Sie Folgendes hinzu:
smartsupp('analyticsConsent', false);
Durch die Ablehnung der Zustimmung werden die Aufzeichnungen des Besuchers sowie das Senden von Ereignissen an Google Analytics sofort ausgesetzt (im Falle einer erneuten Autorisierung wird die Aufzeichnung zusammen mit dem Senden von Google Analytics-Ereignissen aktiviert).
Marketing-Cookies
Wenn ein Besucher Marketing-Cookies ablehnt, fügen Sie Folgendes hinzu:
smartsupp('marketingConsent', false);
Durch die Verweigerung der Einwilligung wird das zur Ermittlung der Visits verwendete Cookie ssupp.visit unverzüglich gelöscht. Die Funktionalität von Chatbots und automatischen Nachrichten ist davon nicht betroffen.
Alle Cookies
Wenn ein Besucher alle Cookies ablehnt, fügen Sie Folgendes hinzu:
smartsupp('analyticsConsent', false);
smartsupp('marketingConsent', false);
Beispiel mit Cookiebot
Das folgende Beispielskript hilft Ihnen dabei, die Cookie-Einwilligung auf Ihrer Website mit Cookiebot hinzuzufügen:
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
Sind Sie noch verwirrt? Kontaktieren Sie uns über die Chat-Box in Ihrem Dashboard und wir werden uns gerne mit Ihnen in Verbindung setzen. Bitte beachten Sie, dass der Kundenservice nur in kostenpflichtigen Paketen enthalten ist.

