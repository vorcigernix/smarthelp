# Smartsupp — WordPress
## Integracja Smartsupp Live czata i czatbotów Nie masz jeszcze konta Smartsupp? Zarejestruj się za darmo  w ciągu 2 minut.   1. Użyj naszej wtyczki Najłatwie
Integracja Smartsupp Live czata i czatbotów
1. Użyj naszej wtyczki
Najłatwiejszą opcją jest zainstalowanie naszej wtyczki i zalogowanie do Twojego konta.
Zainstaluj wtyczkę
Plugins > Add new, wyszukaj Smartsupp Live Chat i kliknij Install Now. Gdy wtyczka zostanie zainstalowana, kliknij Activate.
Zaloguj się do konta Smartsupp
Możesz Utworzyć darmowe konto lub Połączyć istniejące konto.
Jeżeli wszystko jest w porządku, zobaczysz tę stronę.
2. Wprowadź kod manualnie
Jeżelil nie chcesz używać wtyczki, możesz wprowadzić kod bezpośrednio w motywie WordPress.
Ostrożnie! To może zepsuć Twoją stronę! Wyślij ten tutorial do swojego webmastera.
Skopiuj kod
Twój kod jest w Smartsupp > Ustawienia > Okno czatu > Kod czatu.
Wprowadź kod
Appearance > Editor > Theme Header (header.php) > wprowadź kod > Update File
3. Własne, zaawansowane zmiany
Nie chcesz używać wtyczki, albo wprowadziłeś kod manualnie i potrzebujesz dokonać własnych, zaawansowanych zmian.
Zainstaluj "Scripts n Styles"
Domyślnie po zainstalowaniu naszej wtyczki lub wprowadzeniu naszego kodu w sekcji header, jest on wyświetlany na wszystkich stronach. Jeśli potrzebujesz wyświetlić nasz kod na określonych stronach lub tylko na jednej stronie, zainstaluj zewnętrzną wtyczkę Scripts n Styles.
Skopiuj kod
Twój kod jest w Smartsupp > Ustawienia > Okno czatu > Kod czatu.
Dostosuj kod
Musisz wprowadzić kilka małych zmian w naszym domyślnym kodzie.
Przeczytaj uważnie, inaczej kod nie zadziała.
Usuń te linijki z naszego kodu.
<!-- Smartsupp Live Chat script -->
<script type="text/javascript">
</script>
Twój pierwotny kod ...
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
... powinien wyglądać, jak ten poniżej. JEDYNIE PRZYKŁAD, NIE KOPIUJ!
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
window.smartsupp||(function(d) {
 var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
 s=d.getElementsByTagName('script')[0];c=d.createElement('script');
 c.type='text/javascript';c.charset='utf-8';c.async=true;
 c.src='//www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
Wprowadź kod
Idź do Pages, edytuj żądaną stronę i w poniższą treść Scripts n Styles wstaw zmodyfikowany kod.
Kliknij Update Scripts i Odśwież swoją stronę.
Smartsupp nie może być zainstalowany na WordPress.com
Kod czatu nie może być zainstalowany na darmowej hostowanej stronie WordPress.com, ponieważ niestandardowe wtyczki nie mogą być instalowane na platformie. Ponadto niestandardowe skrypty JavaScript są blokowane przed osadzaniem w tych typach witryn.
Uwaga: Jeśli używasz konta Google do logowania się do Smartsupp, nie będzie możliwe zalogowanie się do wtyczki WordPress w ten sam sposób.
Możesz albo ręcznie wprowadzić kod czatu, albo kliknąć opcję „zapomniałem hasła” w Smartsupp i ustawić login przez e-mail.
Nadal masz wątpliwości? Skontaktuj się z nami za pomocą czatu w panelu administracyjnym, a my z przyjemnością się z Tobą skontaktujemy. Pamiętaj, że obsługa klienta jest dostępna tylko w płatnych pakietach.

