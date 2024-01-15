# Smartsupp — Stare wiadomości automatyczne - Ustawienia zaawansowane
## Notatka: Ustawienia zaawansowane są dostępne tylko dla użytkowników, którzy utworzyli konto w maju 2021 r. i wcześniej.
  Po kliknięciu na automatyczną wia
Notatka: Ustawienia zaawansowane są dostępne tylko dla użytkowników, którzy utworzyli konto w maju 2021 r. i wcześniej.
Po kliknięciu na automatyczną wiadomość znajdującą się w sekcji Wkrótce zostaną przeniesione, pojawią się stare ustawienia zaawansowane.
W ustawieniach zaawansowanych możesz ustawić warunki, na podstawie których są wiadomości wysyłane (Wyślij wiadomość) i sposób sprawdzania warunków (Wyślij wiadomość do gościa jeżeli) Możesz również wybrać więcej warunków z listy
Warunek	Możliwości	Opis	
Wyślij wiadomość	Kiedy czat jest uruchomiony	Wiadomość automatyczna jest wysyłana, kiedy Smartsupp jest wykryty na Twojej stronie.	
	Kiedy odwiedzający wyśle wiadomość	Wiadomość jest wysłana, kiedy odwiedzający wyśle wiadomość.	
	Kiedy odwiedzający otworzy czat	Wiadomość jest wysyłana, kiedy odwiedzający otworzy czat	
Wyślij wiadomość do gościa jeżeli	Wszystkie warunki są spełnione	Wszystkie warunki muszą być spełnione, aby wysłać wiadomość (zarówno A, B i C).	
	Jakikolwiek warunek jest spełniony	Przynajmniej jeden warunek musi być spełniony (tylko A, albo B, albo C).	
Lista zaawansowanych warunków
Oprócz prostych warunków dostępne są zaawansowane warunki i możliwości.
Warunek	Możliwości	Przykład wartości	Opis	
URL strony	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	www.myeshop.cz/cameras	Adres strony odwiedzony przez gościa. Warunek jest spełniony, jeżeli URL zawiera wprowadzony tekst, który może być w jakiejkolwiek części URL.	
Tytuł strony internetowej	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	Canon cameras | My e-shop	Tytuł strony, którą odwiedzający przegląda w danej chwili. 
Jest wyświetlany w karcie przeglądarki. Wartość musi być dokładnie taka sama, jak tytuł strony.
	
Źródło	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	google.com	Strona, z której odwiedzający wszedł na Twoją stronę (np. wyszukiwarka internetowa, artykuł na blogu, kampania marketingowa). Informacja o źródle nie zawsze jest dostępna (np. kiedy użytkownik wpisze adres bezpośrednio w przeglądarce). Niektóre strony również nie wysyłają informacji o źródle.	
Liczba wizyt	= equals 
!= doesn’t equal
< is fewer than
> is more than
<= is fewer than or equals
>= is more than or equals
	2	Liczba odwiedzin strony przez gościa. Ta informacja jest przechowywana w ich cookies. Zalecamy testowanie wiadomości automatycznych w oknie incognito.	
Liczba czatów	= equals 
!= doesn’t equal
< is fewer than
> is more than
<= is fewer than or equals
>= is more than or equals
	1	Liczba czatów z odwiedzającym.	
Odwiedzający wysłał wiadomość	is true 
is false
		Uruchamiany, gdy odwiedzający wyśle wiadomość (is true), albo nie (is false).	
Odwiedzający jest/został obsłużony	is true 
is false
		Odwiedzający jest obsłużony, kiedy agent wyśle do niego wiadomość. Is true, oznacza, że się to stało, is false oznacza, że nie.	
Adres IP	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	88.90.91.92	Adres IP odwiedzającego.	
Miasto	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	Brno	Miasto odwiedzającego na podstawie danych geolokalizaji Maxmind. Lokalizacja niektórych odwiedzających może być niedokładna, w szczególności małe miasta mogą być pokazywane jako większe miasta w ich pobliżu. Niedokładne informacje mogą być również wyświetlane dla użytkowników korzystających z urządzeń mobilnych.	
Kod kraju	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	DE, IT, ES	Kod kraju odwiedzającego zawarty w ISO 3166-1 alpha-2 form. Lista wszystkich krajów i ich kody znajdują się tutaj: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements 	
Grupa	= equals 
!= doesn’t equal
		Grupa odwiedzającego (Tylko użytkownicy Pro mogą używać grup.)	
Godzina	= equals 
!= doesn’t equal
< is earlier than
> is later than
<= is earlier than or equals
>= is later than or equals
	0-23	Godzina, w której wiadomość automatyczna jest wysyłana.	
Dzień tygodnia	= equals 
!= doesn’t equal
< is earlier than
> is later than
<= is earlier than or equals
>= is later than or equals
	Poniedziałek - Niedziela	Dzień tygodnia, kiedy wiadomość automatyczna jest wysyłana.	
Miesiąc	= equals 
!= doesn’t equal
< is earlier than
> is later than
<= is earlier than or equals
>= is later than or equals
	Styczeń - Grudzień	Miesiąc, w którym wiadomość automatyczna jest wysyłana.	
Przeglądarka	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	Chrome	Przeglądarka odwiedzającego. Wartość jest taka sama, jak w panelu informacji o odwiedzającym w Dashboard.	
System operacyjny	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	Windows, OS X, Android	System operacyjny odwiedzającego. Wartość jest taka sama, jak w panelu informacji o odwiedzającym w Dashboard.	
Platforma	= equals 
!= doesn’t equal
? contains
!? doesn’t contain
$ matches regular expression
	Windows, Apple Mac	Platforma odwiedzającego	
Odwiedzający otrzymał wiadomość automatyczną	is true 
is false
		Sprecyzuj, czy odwiedzający otrzymał wiadomość automatyczną.	
Status okna czatu	online 
offline
		Określ, czy okno czatu ma być w trybie online czy offline.	
Nadal masz wątpliwości? Skontaktuj się z nami za pomocą czatu w panelu administracyjnym, a my z przyjemnością się z Tobą skontaktujemy. Pamiętaj, że obsługa klienta jest dostępna tylko w płatnych pakietach.

