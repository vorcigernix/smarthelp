# Smartsupp — Dlaczego nie widzę czatu na swojej stronie?
## Czat ukryty w ustawieniach Upewnij się, że czat nie jest ukryty, kiedy offline(1) lub całkowicie ukryty(2) w Ustawienia > Okno czatu >  Opcje    Zost
Czat ukryty w ustawieniach
Upewnij się, że czat nie jest ukryty, kiedy offline(1) lub całkowicie ukryty(2) w Ustawienia > Okno czatu > Opcje 
Zostałeś zablokowany
Upewnij się, że nie jesteś zablokowany jako odwiedzający na swoim koncie Smartsupp.
Sprawdź swoje ustawienia i sprawdź, czy Twój adres IP nie jest na liście zablokowanych adresów IP.
Możesz również spróbować wyfiltrować Zablokowanych odwiedzających. Jeżeli jesteś wśród nich, możesz się odblokować
Kod czatu nie jest wprowadzony, albo jest nieprawidłowy
Otwórz kod źródłowy swojej witryny lub konsoli. Otwórz źródło strony (w Chrome skrót to CTRL + U) i spróbuj wyszukać (CTRL + F) smartsupp. Jeśli nie ma wyników, oznacza to, że kod czatu nie jest wstawiany do kodu witryny. W takim przypadku należy skontaktować się z deweloperem, aby wstawić kod czatu 
Jeśli używasz menedżera tagów, np. Google Tag Manager, upewnij się, że działa poprawnie. W większości przypadków powinieneś być w stanie znaleźć kod czatu w elementach swojej witryny (naciśnij CTRL + SHIFT + J, kliknij Elements(1) i wyszukaj smartsupp (2))
Upewnij się również, że nie używasz więcej niż jednego kodu czatu w swojej witrynie.
Błąd w kodzie
Upewnij się, że nie ma brakujących znaków w kodzie. Najlepiej skopiować kod bezpośrednio z Ustawień. Możesz skorzystać np. z Diffchecker , aby sprawdzić, czy kod na Twojej stronie jest taki sam, jak oryginalny kod. Najczęstszym błędem w kodzie jest brakujący podkreślnik (_), który powoduje błąd w konsoli przeglądarki (CTRL+SHIFT+J)
Problem z CSS strony
Typowy przypadek, gdy czat nie jest wyświetlany na Twojej stronie, nawet jeśli kod czatu jest poprawnie wstawiony, oznacza, że ustawiłeś display property dla iframe na none (display: none). Przykład pokazano na poniższym screnshocie. Jeśli tak jest, Twój programista będzie musiał zmienić CSS witryny
Z-index któregoś z elementów na stronie jest większy niż 1000000
Właściwość z-index określa kolejność stosu elementu.
Element o większej kolejności stosów jest zawsze przed elementem z niższym porządkiem stosu.
Więc jeśli masz jakiś element, który ma indeks Z więcej niż 1M, może on pokryć widget.
Javascript jest wyłączony w przeglądarce
Domyślnie obsługa Javascript jest włączona we wszystkich przeglądarkach, ale w przypadku wyłączenia tej funkcji konieczne będzie jej ponowne włączenie. Możesz przeczytać o tym, jak włączyć Javascript w różnych przeglądarkach w tym tutorialu.
Środowisko testowe
Twoja witryna znajduje się w środowisku testowym (a.k.a. localhost), ograniczonej witrynie internetowej, intranecie lub znajduje się na prywatnej sieci VPN. Witryna musi być w pełni dostępna z Internetu, aby zapewnić 100% funkcjonalność Smartsupp.
Jeżeli używasz własne pozycji okna czatu API, i zdecydujesz się zmienić przesunięcie widgetu, upewnij się że jest on widoczny na mniejszych ekranach. Jeżeli przesunięcie jest zbyt duże (lub zbyt małe), czat może być częściowo lub całkowicie niewidoczny.
Polityka bezpieczeństwa treści
Jeżeli używasz Polityki bezpieczeństwa treści na swojej stronie, upewnij się, że wszystkie nasze domeny są dodane do whitelist w CSP.
smartsupp.com
smartsuppchat.com
cdn77.org
smartsuppcdn.com
Jeśli występuje problem z polityką bezpieczeństwa treści, powinieneś zobaczyć w konsoli Chrome (CTRL + SHIFT + J), że skrypt narusza dyrektywę dotyczącą polityki bezpieczeństwa treści.
Magia
Jeżeli nie znalazłeś tutaj problemu, skontaktuj się z nami za pomocą czatu w Dashboard. Prosimy o podanie jak najwięcej informacji (będziemy potrzebować adresu strony, na której zainstalowany jest Smartsupp i adresu email, użytego do rejestracji).
Nadal masz wątpliwości? Skontaktuj się z nami za pomocą czatu w panelu administracyjnym, a my z przyjemnością się z Tobą skontaktujemy. Pamiętaj, że obsługa klienta jest dostępna tylko w płatnych pakietach.

