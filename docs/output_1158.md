# Smartsupp — Staré automatické zprávy - pokročilé nastavení
## Poznámka: Stará pokročilá nastavení jsou dostupná pouze pro vybrané uživatele, kteří si vytvořili účet v květnu 2021 a dříve.
  Po kliknutí na automatickou
Poznámka: Stará pokročilá nastavení jsou dostupná pouze pro vybrané uživatele, kteří si vytvořili účet v květnu 2021 a dříve.
Po kliknutí na automatickou zprávu umístěnou v sekci Brzy přesouváme se zobrazí staré pokročilé nastavení.
V pokročilém nastavení můžete zvolit podmínku, za které se zpráva odešle (Spustit zprávu), a způsob vyhodnocení podmínek (Odeslat zprávu návštěvníkovi, pokud). Ze seznamu můžete vybrat i další podmínky.
Volba	Možná hodnota	Popis funkce	
Spustit zprávu	když se načte chat box	Automatické zprávy se spouští pokud je Smartsupp detekován na stránce	
	když návštěvník pošle zprávu	Spouští se po odeslání zprávy uživatelem	
	když návštěvník otevře chat box	Zprávy se spouští po kliknutí na chat a jeho otevření	
Odeslat zprávu pokud	jsou všechny podmínky splněny	Pro spuštění chatu musí být splněny všechny podmínky, např. A, zároveň B i C	
	je alespoň jedna podmínka splněna	Stačí, aby alespoň jedna podmínka byla pro spuštění automatických zpráv splněna. 
A nebo B nebo C.
	
Přehled pokročilých podmínek
Podmínka	Možné operátory	Příklad hodnoty	Popis	
Url stránky	= equals 
!= not equals
? contains
!? not contains
$ matches regular expression
	www.mujeshop.cz/kamery	Webová adresa stránky, na které se návštěvník nachází. Podmínka je splněna, pokud URL obsahuje zadaný text. Ten může být v URL kdekoli.	
Titulek stránky	= equals 
!= not equals
? contains
!? not contains
$ matches regular expression
	Canon kamery | Můj eshop	Titulek stránky, na které se návštěvník nachází. 
Titulek stránky se zobrazuje v záložce prohlížeče.
Hodnota musí být zadaná přesně, tak jak je obsažená i v titulku.
	
Referer (zdroj)	= equals 
!= not equals
? contains
!? not contains
$ matches regular expression
	google.com	Stránka, odkud přišel návštěvník, např. Vyhledávač, blog článek nebo konkrétní marketingová kampaň. 
Pozor: Referer nemusí být vždy k dispozici, např. pokud návštěvník zadá adresu vaší stránky přímo. Některé stránky také nemusí hodnotu Referer předávat.
	
Počet návštěv	= equals 
!= not equals
< is smaler than
> is higher than
<= is smaller or equals
>= is higher or equals
	2	Kolikrát návštěvník zobrazil danou stránku. Informace o počtu návštěv je závislá na cookies. Automatické zprávy proto testujte v anonymním okně, nebo cookies předem smažte.	
Počet chatů	= equals 
!= not equals
< is smaler than
> is higher than
<= is smaller or equals
>= is higher or equals
	1	Počet chatů s daným návštěvníkem.	
Návštěvník odeslal zprávu	is true 
is false
		Spouští se v moment odeslání zprávy návštěvníkem na chatu.	
Návštěvník je/byl obsloužen	is true 
is false
		Jako obsloužen se bere návštěvník, kterému byla odeslána zpráva operátorem.	
IP adresa	= equals 
!= not equals
? contains
!? not contains
$ matches regular expression
	88.90.91.92	IP adresa návštěvníka	
Město	= equals 
!= not equals
? contains
!? not contains
$ matches regular expression
	Brno	Město návštěvníka (na základě Maxmind geolokace) 
Určení města může být nepřesné, zpravidla u menších obcí, která jsou vyhodnocena jako větší sídla v okolí. Chybné vyhodnocení může nastat také u přístupu přes mobilní připojení.
	
Kód státu	= equals 
!= not equals
? contains
!? not contains
$ matches regular expression
	cs	Kód státu dle ISO 3166-1 alpha-2 code. 
Seznam všech států a jejich kódů: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
	
Skupina	= equals 
!= not equals
	Pjn9eUo61D	Skupina návštěvníka (pouze Pro balíčky mohou používat skupiny) 
Jako hodnota musí být uvedeno ID skupiny.
	
Denní hodina	= equals 
!= not equals
< is smaller than
> is higher than
<= is smaller or equals
>= is higher or equals
	0-23	Čas, kdy se vyvolá automatická zpráva.	
Den v týdnu	= equals 
!= not equals
< is smaler than
> is higher than
<= is smaller or equals
>= is higher or equals
	Monday - Sunday	Den v týdnu, kdy se vyvolá automatická zpráva.	
Měsíc	= equals 
!= not equals
< is smaler than
> is higher than
<= is smaller or equals
>= is higher or equals
	January-December	Měsíc, kdy se vyvolá automatický zpráva.	
Prohlížeč	= equals 
!y= not equals
? contains
!? not contains
$ matches regular expression
	Chrome	Prohlížeč návštěvníka. Hodnota je stejná jako v informacích u uživatele daného chatu.	
Operační systém	= equals 
!= not equals
? contains
!? not contains
$ matches regular expression
	Windows 10, OS X	Operační systém návštěvníka. Hodnota je stejná jako v informacích u uživatele daného chatu.	
Platforma	= equals 
!= not equals
? contains
!? not contains
$ matches regular expression
	Windows, Apple Mac	Platforma návštěvníka.	
Návštěvník již obdržel auto-zprávu	s true 
is false
		Určuje zda daný návštěvník již obdržel automatickou zprávu.	
Chatbox stav	online 
offline
		Určuje, zda je chatbox v offline nebo online stavu.	
Stále si nevíte rady? Kontaktujte nás prostřednictvím chatu po přihlášení se do vašeho Smartsupp účtu. Rádi vám pomůžeme. Upozorňujeme, že zákaznický servis je dostupný pouze v placených balíčcích.

