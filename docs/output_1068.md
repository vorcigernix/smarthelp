# Smartsupp — Grupy
## Ta funkcja dostępna jest tylko w pakiecie PRO.
  Czym są grupy? Grupy to funkcja Smartsupp, która jest niezwykle użyteczna, jeżeli masz wielu agentów i chc
Ta funkcja dostępna jest tylko w pakiecie PRO.
Czym są grupy?
Grupy to funkcja Smartsupp, która jest niezwykle użyteczna, jeżeli masz wielu agentów i chcesz przekazywać czaty z konkretnych części swojej strony do konkretnych agentów.
Masz wielojęzyczną stronę, możesz przekazywać czaty z angielskiej części swojej strony to anglojęzycznych agentów itd.
Używasz Smartsupp na wielu stronach i masz różnych agentów przypisanych do każdej ze stron.
Sprzedajesz różne produkty na swojej stronie i chcesz, aby odwiedzający byli obsługiwani przez specjalistów w danej dziedzinie.
Jak ustawić grupy?
Stworzenie grup
Ustawienia grup znajdziesz w Ustawienia > Grupy 
Potem utwórz przynajmniej 2 grupy poprzez kliknięcie przycisku Dodaj grupę w prawym, górnym rogu ekranu.
Dodaj agentów do grupy
Przypisz wszystkich swoich agentów do utworzonych grup. Nawet jeden nieprzypisany agent może zmienić status live czatu na całej Twojej stronie, czego prawdopodobnie nie chcesz. Możesz z łatwością przypisać agentów do konkretnej grupy, poprzez kliknięcie na ich zdjęcie w ustawieniach grup. Liczba agentów w każdej z grup jest nielimitowana.
Po przypisaniu wszystkich swoich agentów, powinieneś zobaczyć w której z grup jest każdy z nich, tak jak tutaj:
Uwaga: Po tym, jak przypiszesz agentów do grup, muszą oni ODŚWIEŻYĆ swój dashboard, aby zmiany zostały wdrożone.
Dodaj kod grupy do swojej strony
Dodaj kod grupy pod kodem czatu na swoich stronach, aby przekazywać czaty do grupy. Musisz umieścić kod grupy zaraz pod kodem czatu.
Twój kod na konkretnej podstronie powinien wyglądać tak:
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
Sprawdź ustawienia
Jeżeli wszystko jest ustawione prawidłowo i Twoi agenci odświeżyli dashboard, powinni widzieć każdego nowego odwiedzającego na stronie grupy, w swojej liście odwiedzających (każdy zobaczy odwiedzających strony grup, do których jest przypisany).
Użycie grup w Formularzu kontaktowym
Możesz używać grup w połączeniu z formularzem kontaktowym, dzięki czemu odwiedzający będą mogli wybrać, z którą grupą agentów chcą rozmawiać. Tę opcję znajdziesz w Ustawieniach → Okno czatu (1) → Formularz kontaktowy (2) → Wybór grupy (3). Aby aktywować tę opcję, musisz mieć utworzoną co najmniej jedną grupę.
Tak będzie wyglądało okno czatu z aktywnym wyborem grupy na Twojej stronie:
Nadal masz wątpliwości? Skontaktuj się z nami za pomocą czatu w panelu administracyjnym, a my z przyjemnością się z Tobą skontaktujemy. Pamiętaj, że obsługa klienta jest dostępna tylko w płatnych pakietach.

