# Smartsupp — Warum kann ich den Chat auf meiner Website nicht sehen?
## Chat in Einstellungen ausgeblendet In den Einstellungen> Chat-Box >  Optionen  stellen Sie sicher, dass die Chat-Box nicht in den Offline-Status (1) 
Chat in Einstellungen ausgeblendet
In den Einstellungen> Chat-Box > Optionen stellen Sie sicher, dass die Chat-Box nicht in den Offline-Status (1) oder vollständig (2) ausgeblendet ist
Sie sind blockiert
Stellen Sie sicher, dass Sie in Ihrem Smartsupp-Konto nicht als Besucher blockiert sind.
Überprüfen Sie Ihre Einstellungen, ob Ihre IP-Adresse nicht in der Liste der blockierten IP-Adressen enthalten ist.
Versuchen Sie außerdem, den Filter für "blockierte Besucher" in der Besucherliste zu verwenden und festzustellen, ob blockierte Besucher vorhanden sind. Wenn Sie unter ihnen sind, können Sie sich entsperren.
Der Chat-Code wird nicht oder nicht richtig eingefügt
Öffnen Sie den Quellcode Ihrer Website oder Konsole. Öffnen Sie die Seitenquelle (in Chrome lautet die Verknüpfung STRG + U) und versuchen Sie nach SmartSupp zu suchen (STRG + F). Wenn keine Ergebnisse vorliegen, bedeutet dies, dass der Chat-Code nicht in den Code der Website eingefügt wird. In diesem Fall müssen Sie sich an Ihren Entwickler wenden, um den Chat-Code einzufügen. 
Wenn Sie einen Tag-Manager verwenden, z. B. Google Tag Manager, stellen Sie sicher, dass es ordnungsgemäß funktioniert. In den meisten Fällen sollten Sie in der Lage sein, den Chat-Code in den Elementen Ihrer Website zu finden (Drücken Sie STRG + UMSCHALT + J, klicken Sie auf die Registerkarte Elements (1) und suchen Sie nach smartsupp (2)).
Stellen Sie außerdem sicher, dass Sie nicht mehr als einen Chat-Code auf Ihrer Website verwenden.
Fehler im Code
Stellen Sie sicher, dass im Chat-Code keine Zeichen fehlen. Im Idealfall kopieren Sie den Chat-Code direkt aus den Einstellungen. Sie können z. B. Diffchecker probieren, um zu überprüfen, ob der Code von Ihrer Website mit dem Originalcode übereinstimmt. Das häufigste Problem ist, dass dem Code ein Unterstrich (_) fehlt und Sie einen Fehler in der Browserkonsole sehen können (STRG + UMSCHALT + J).
Problem mit Website-CSS
Ein typischer Fall, in dem der Chat auf Ihrer Website nicht angezeigt wird, obwohl der Chat-Code ordnungsgemäß eingefügt wurde, besteht darin, dass Sie die Anzeigeeingenschaft für den Iframe auf none festgelegt haben (display: none). Ein Beispiel ist in der Abbildung unten dargestellt. In diesem Fall muss Ihr Entwickler das CSS der Website ändern.
Z-Index eines Elements auf der Website mehr als 1000000
Die Eigenschaft z-index gibt die Stapelreihenfolge eines Elements an. Ein Element mit größerer Stapelreihenfolge steht immer vor einem Element mit einer niedrigeren Stapelreihenfolge.
Wenn Sie also ein Element mit einem Z-Index von mehr als 1 MB haben, kann es das Widget abdecken.
Javascript ist im Browser deaktiviert
Javascript ist standardmäßig in allen Browsern aktiviert. Falls Sie es jedoch deaktiviert haben, müssen Sie es erneut aktivieren. In diesem Tutorial erfahren Sie, wie Sie Javascript in verschiedenen Browsern aktivieren können.
Testumgebung
Ihre Website befindet sich in einer Testumgebung (a.k.a. localhost), einer eingeschränkten Website, einem Intranet oder in einem privaten VPN. Die Website muss vollständig über das Internet zugänglich sein, um die 100% ige Funktionalität von Smartsupp zu gewährleisten.
Wenn Sie eine benutzerdefinierte Chat-Box Position über die API verwenden und den Versatz des Widgets ändern möchten, stellen Sie sicher, dass er auch auf kleineren Displays sichtbar ist. Wenn der Versatz zu groß (oder zu klein) ist, ist der Chat möglicherweise teilweise oder vollständig unsichtbar.
Content security policy
Wenn Sie auf Ihrer Webseite Content security policy verwenden, stellen Sie sicher, dass alle unsere Domains in Ihrem CSP auf der Whitelist stehen.
smartsupp.com
smartsuppchat.com
cdn77.org
smartsuppcdn.com
Wenn es ein Problem mit Content security policy gibt, sollten Sie in der Chrome-Konsole (STRG + UMSCHALT + J) sehen, dass das Skript gegen Content security policy verstößt.
Magie
Falls Sie das Problem nicht finden konnten, Bitte kontaktieren Sie uns über die Chat-Box in Ihrem Dashboard und geben Sie so viele Informationen wie möglich an (wir benötigen die Adresse Ihrer Website und Ihre Smartsupp-Registrierungs-E-Mail). Wir werden es uns ansehen.
Sind Sie noch verwirrt? Kontaktieren Sie uns über die Chat-Box in Ihrem Dashboard und wir werden uns gerne mit Ihnen in Verbindung setzen. Bitte beachten Sie, dass der Kundenservice nur in kostenpflichtigen Paketen enthalten ist.

