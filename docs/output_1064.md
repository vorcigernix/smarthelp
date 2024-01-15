# Smartsupp — Zgoda na pliki cookie
## Jeśli przepisy RODO wymagają, aby Twoja strona internetowa była opatrzona informacjami na temat wykorzystania plików cookie oraz odpowiednim banerem (grafi
Jeśli przepisy RODO wymagają, aby Twoja strona internetowa była opatrzona informacjami na temat wykorzystania plików cookie oraz odpowiednim banerem (graficznym elementem mającym postać paska) informującym odwiedzających o wykorzystywaniu tychże plików, należy aktywować zgodzę na pliki cookie w sekcji dashboard usługi Smartsupp.
Przygotowaliśmy dla Ciebie instrukcję wyjaśniającą, jak skonfigurować różne typy plików cookie, które chcesz przechowywać oraz jak odpowiednio dostosować ustawienia i tekst paska plików cookie.
Poniższe instrukcje zakładają pewną techniczną wiedzę z zakresu technologii informacyjnych. Jeśli zatem nie czujesz się na siłach, zalecamy zwrócenie się do do programisty lub osoby, która stara się o działanie Twojej strony. 
Jeśli natomiast używasz usługi Cookiebot do zarządzania plikami cookie, przewiń do końca tego artykułu, gdzie znajdziesz kilka praktycznych przykładów zarządzania tymi plikami.
Gdzie mogę włączyć zgodę na pliki cookie w Smartsupp?
Ustawienia zgody na używanie plików cookie znajdują się w zakładce Ustawienia >> Ustawienia konta >> Prywatność i bezpieczeństwo. 
W trybie domyślnym pliki cookie nie są aktywne. Po ich aktywowaniu, dochodzi do przechowywania wyłącznie niezbędnych plików cookie. Listę funkcjonalnych (niezbędnych) plików cookie można znaleźć tutaj:
Pomoc – funkcjonalne pliki cookie
Aby zezwolić na statystyczne i marketingowe pliki cookie, należy wysłać określony kod. Domyślna wartość zgody na analityczne i marketingowe pliki cookie jest pusta. Dlatego też statystyczne i marketingowe pliki cookie nie są przechowywane, dopóki odwiedzający nie wyrazi na to zgody. Listę tego rodzaju plików cookie używanych w oknie czatu można znaleźć tutaj:
Pomoc – statystyczne pliki cookie Pomoc – marketingowe pliki cookie
Wstaw kod dotyczący zgody na pliki cookie na swojej stronie
Zgodę na przechowywanie plików cookie łatwo wdrożysz na stronie za pomocą kodu JavaScript. Przyciski w banerze plików cookie służą do zarządzania statystykami Smartsupp i marketingowymi plikami cookie.
Zignorowanie zapytania o zgodę
Jeśli odwiedzający zignoruje pasek plików cookie i tym samym nie wyrazi ani zgody ani sprzeciwu na korzystanie z tych plików, scenariusz jest następujący:
Plik cookie ssupp.visit zachowa swoją pierwotną wartość, czyli taką jaka była przed włączeniem zgody na zarządzanie plikami cookie. Wartość nie będzie zwiększana do czasu udzielenia zgody (tzn. nie wpłynie to na wartość, którą w dashboardzie ujrzą operatorzy, zatem ta konkretna wartość widoczna w Dashboardzie będzie się różnić od tej, która widnieje w plikach cookie)
Nagrywanie przebiegu wizyty danego odwiedzającego jest wyłączone
Do Google Analytics nie są wysyłane informacje o żadnych zdarzeniach
Czatboty i automatyczne wiadomości będą działać bez zmian
Wyrażenie zgody
Statystyczne pliki cookie
Jeśli odwiedzający akceptuje statystyczne pliki cookie, zastosuj:
smartsupp('analyticsConsent', true);
Ten kod uruchamia pliki cookie, które są przechowywane w celu dokonywania nagrań oraz do wysyłania Google Analytics informacji o zdarzeniach.
Marketingowe pliki cookie
Jeśli odwiedzający akceptuje marketingowe pliki cookie, zastosuj:
smartsupp('marketingConsent', true);
Ten kod umożliwia stosowanie plików cookie służących do przechowywania liczby wizyt wykonanych dotychczas przez odwiedzającego. Są one niezbędne do uzyskania przez operatorów informacji o liczbie wizyt. Jeśli jednak odwiedzający nie wyrazi zgody, nie wpłynie to na funkcjonalność czatbotów i automatycznych wiadomości.
Wszystkie pliki cookie
Jeśli odwiedzający akceptuje wszystkie pliki cookie, zastosuj:
smartsupp('analyticsConsent', true);
smartsupp('marketingConsent', true);
Niewyrażenie zgody
Statystyczne pliki cookie
Jeśli odwiedzający nie wyrazi zgody na statystyczne pliki cookie, zastosuj: 
smartsupp('analyticsConsent', false);
Niewyrażenie zgody spowoduje natychmiastowe wstrzymanie dokonywania nagrań wizyt osoby odwiedzającej, jak również wysyłania informacji o zdarzeniach do Google Analytics. W przypadku ponownej autoryzacji dojdzie do uruchomienia obu czynności.
Marketingowe pliki cookie
W razie jeśli odwiedzający nie wyrazi zgody na marketingowe pliki cookie, zastosuj:
smartsupp('marketingConsent', false);
Odmówienia zgody, spowoduje natychmiastowe usunięcie plik ssupp.visit używanego do określenia liczby wizyt. Nie ma to jednak wpływu na funkcjonalność Czatbotów i automatycznych wiadomości.
Wszystkie pliki cookie
Jeśli odwiedzający nie wyrazi zgody na żadne pliki cookie, zastosuj:
smartsupp('analyticsConsent', false);
smartsupp('marketingConsent', false);
Korzystanie z Cookiebot
Przykładowy kod poniżej pomoże Ci wdrożyć zgodę na pliki cookie na stronach, na których korzystasz z Cookiebot.
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
Nadal masz wątpliwości? Skontaktuj się z nami za pomocą czatu w panelu administracyjnym, a my z przyjemnością się z Tobą skontaktujemy. Pamiętaj, że obsługa klienta jest dostępna tylko w płatnych pakietach.

