# Smartsupp — Google Analytics napojení
## Tato funkce je dostupná pouze v balíčcích STANDARD a PRO.   Doporučujeme používat naši novou verzi chat boxu (vydána v roce 2023). Pokud jste Váš účet do n
Tato funkce je dostupná pouze v balíčcích STANDARD a PRO.
Doporučujeme používat naši novou verzi chat boxu (vydána v roce 2023). Pokud jste Váš účet do nového chat boxu ještě nepřepnuli, doporučujeme Vám kontaktovat náš zákaznický support přes chat v Dashboardu.
Poznámka: Pouze nová verze chat boxu podporuje Google Analytics 4.
Měření konverzí
Dopad Smartsupp na míru konverze a chování návštěvníků můžete měřit v nástroji Google Analytics. Ve svém účtu si můžete nastavit, zda chcete data do služby Google Analytics odesílat, nebo ne.
Otevřete sekci Nastavení > Nastavení účtu > Google Analytics > Klikněte na tlačítko Připojit.
Po aktivaci integrace služby Google Analytics se zobrazí 2 možnosti.
Automatická detekce Property ID
Automaticky zjistí všechna ID měření na webové stránce a použije je k odeslání událostí Smartsupp do služby Google Analytics.
Pokud používáte pouze 1 účet Google Analytics, vyberte tuto možnost. Pro většinu lidí je to nejlepší možnost.
Ruční definice ID
V případě, že používáte více ID měření, vyberte, které ID měření chcete používat pro sledování událostí Smartsupp. Tato možnost nebude fungovat, pokud jste již dříve aktivovali integraci s Google Analytics prostřednictvím API podle tohoto návodu. 
Pokud máte pokročilejší případ použití a používáte na svých webových stránkách více účtů Google analytics, můžete si vybrat, na který účet Google analytics máme události ze Smartsupp odesílat.
Vyberte, který z nich je pro vás nejvhodnější, a klikněte na tlačítko uložit. Od této chvíle bude Smartsupp odesílat události do služby Google Analytics 4. Zbývá ještě jeden krok, abyste získali úplný přehled o tom, jak Smartsupp ovlivňuje vaše cíle.
Základní informace
Smartsupp aktuálně podporuje nové GA4 (Google Analytics verze 4), tak i staré UA (universal Analytics). Záleží na verzi chatboxu kterou máte.
Můžete kombinovat více GA trackovacích kódů (GA tracking codes) > Smartsupp automaticky zasílá GA analytické události do všech GA trackovacích kódů na webu > pro specifické GA trackování použijte API (více info níže). 
Chat box (naše nejnovější verze) má novou Kategorii událostí - Smartsupp_v3 
Smartsupp rozděluje události na Chatbot, Auto messages, a Triggers - každá automatizace má svůj vlastní Štítek události 
Smartsupp také některé události přejmenoval - nově je místo mezer v události _ (více info níže).
GA události jsou zasílány, když je chat box zavřený, ale i otevřený.
GA události jsou zasílány jen jednou, pokud návštěvník otevře stejnou webovou stránku ve více oknech.
Google analytics verze 4
Jak na GA4 přejít? [GA4] Začněte používat Google Analytics 4.
Akce událostí
V Google Analytic jsou Akce událostí tvořené hierarchicky 4 elementy: Kategorie, Akce, Štítek, a Hodnota. Pro naše potřeby používáme jen první tři.
Smartsupp posílá data do Google Analytics jako Události. Zasíláme celkem 17 událostí (event actions) které Vám pomohou monitorovat chování chatujících návštěvníků. Tyto události naleznete pod: Kategorie události = Smartsupp_v3.
S naší novou verzí Smartsupp chat boxu (vydána v 2023) jsme aktualizovali a přidali další události GA. Všechny jsou odesílány pouze v angličtině.
Akce a štítky událostí
Poznámka: Pro vlastní implementaci GA (GTM) použijte naši API
Kategorie události
Akce události
Štítek události
Kdy událost nastane?
Smartsupp_v3
Chatbot_sent
Název chatbota
chatbot přišel do chat boxu
Chatbot_interaction
Název chatbota
první interakce s chatbotem
Chatbot_button interaction
Tlačítko chatbota
konkrétní interakce na tlačítko v chatbotovi
Chatbot_viewed
Název chatbota
otevření chat boxu po příchodu chatbota
Chatbot_visitor_reaction
Název chatbota
návštěvníkova reakce na konkrétního chatbota
Auto_message_sent
Název automatické zprávy
auto message přišla do chat boxu
Auto_message_viewed
Název automatické zprávy
otevření chat boxu po příchodu automatické zprávy
Auto_message_visitor_reaction
Název automatické zprávy
návštěvníkova reakce na konkrétní automatickou message
Visitor_started_conversation
(bez štítku)
návštěvník pošle zprávu do chatu (nastane pouze pokud do chatu nepřišel chatbot nebo jiná automatizace)
Agent_served_conversation
Jméno agenta
operátor se připojí do konverzace
Auth_form_filled
(bez štítku)
vyplněný a odeslaný kontaktní formulář
Offline_message_sent
(bez štítku)
návštěvník zasílá zprávu do chat boxu v offline stavu
Feedback_sent
Good/Normal/Bad
výběr smajlíka ve zpětné vazbě na konverzaci
Feedback_text_sent
Konkrétní text
vyplnění textu ve zpětné vazbě na konverzaci
Trigger_message_sent
Název triggeru
starý trigger přišel do chat boxu
Trigger_message_viewed
Název triggeru
otevření chat boxu po příchodu triggeru
Trigger_visitor_reaction
Název triggeru
návštěvníkova reakce na konkrétní trigger
Co tyto události znamenají?
Chatbot_sent
událost je odeslána, když návštěvník obdrží zprávu od chatbota do chat boxu
jednou pro každého chatbota, který přijde do chat boxu
Chatbot_interaction
událost se odešle, když návštěvník odpoví na konkrétního chatbota
platí pouze pro první interakci na konkrétního chatbota, maximálně jednou za danou relaci
Chatbot_button_interaction
událost se odešle při každém kliknutí na tlačítko v chatbotovi
možnost odeslání i vícekrát za relaci
Chatbot_viewed
událost se odešle, pokud návštěvník otevře chat box, nebo klikne na tlačítko “Let’s chat” ve vyskakovacím okně poté, co návštěvník obdrží chatbota
Chatbot_visitor_reaction
událost je odeslána, pokud návštěvník odpoví na zprávu od chatbota
v případě více chatbotů se odešle reakce na konkrétního chatbota
Auto_message_sent
událost je odeslána, když návštěvník obdrží automatickou zprávu do chat boxu
Auto_message_viewed
událost se odešle, pokud návštěvník otevře chat box, nebo klikne na tlačítko “Let’s chat” ve vyskakovacím okně poté, co návštěvník obdrží automatickou zprávu
Auto_message_visitor_reaction
událost je odeslána, pokud návštěvník odpoví na automatickou zprávu
v případě vícenásobné automatizace (chatboti, automatické zprávy) je událost reakce odeslána na poslední z nich
Visitor_started_conversation
událost je odeslána, pokud návštěvník odešle zprávu do chat boxu, ale konverzace je takto zahájena bez předchozího doručení jakékoli automatizace (chatbot, automatická zpráva)
Agent_served_conversation
událost je odeslána, když se agent připojí do konverzace
Auth_form_filled
událost je odeslána, když návštěvník vyplní a odešle kontaktní formulář
Offline_message_sent
událost je odeslána, když návštěvník odešle chatovou zprávu do chat boxu ve stavu offline
Feedback_sent
událost se odešle, když návštěvník vybere emotikon ve formuláři pro hodnocení konverzace
Feedback_text_sent
událost se odešle, když návštěvník vyplní a odešle textovou zpětnou vazbu ve formuláři hodnocení konverzace
Trigger_message_sent
událost je odeslána, když návštěvník obdrží trigger do chat boxu
Trigger_message_viewed
událost se odešle, pokud návštěvník otevře chat box, nebo klikne na tlačítko “Let’s chat” ve vyskakovacím okně poté, co návštěvník obdrží trigger
Trigger_visitor_reaction
událost je odeslána, pokud návštěvník odpoví zprávou na trigger
Vytvořte nový segment
Pro GA UA: Nyní vše, co musíte udělat, je vytvořit nový segment pro filtrování dat chatujících návštěvníků. Můžete vytvořit segment pro jakoukoli Smartsupp událost. Nejužitečnější metrika je Akce události “Konverzace".
Porovnávejte chování
Pro GA UA: Po vytvoření segmentu můžete vidět a porovnat chování chatujících návštěvníků oproti všem návštěvníkům. V příkladu vidíte, že chatujících návštěvníků bylo 71 oproti 3796 celkovým návštěvníkům. S tím si můžete spočítat, že 1,9 % návštěvníků s vámi konverzuje a další informace.
Konverze
Pro GA UA: Nejdůležitější věcí, kterou můžete měřit, je dopad chatu Smartsupp na konverze (cíle). Můžete vidět konverzní poměr chatujících návštěvníků v porovnání s celkovým konverzním poměrem.
API
Specifikuje konkrétní tracker ID pro GA4 nebo UA: https://docs.smartsupp.com/chat-box/google-analytics/ 
Souhlas se soubory cookie
Postupujte podle kroků popsaných zde: https://www.smartsupp.com/help/cookie-consent/ 
Události pro starší verzi Smartsuppu
Pro starší verzi Smartsupp (starší verze chat boxu), bude zobrazena jiná verze událostí (eventů):
Triggered message sent
Událost je odeslána pokaždé, když návštěvník obdrží automatickou zprávu (spouštěč/trigger). Číslo ukazuje, kolik lidí obdrželo automatickou zprávu. Pokud chcete vědět, kolik lidí odpovědělo na automatickou zprávu (spouštěč/trigger), podívejte se na událost: "Trigger started conversation".
- Štítek události = název (title) spouštěné zprávy (triggered message) ve vašem Dashboardu
Trigger message viewed
Když návštěvník zareaguje (otevře chatbox) na spouštěnou zprávu (triggered message).
- Štítek události = název (title) spouštěné zprávy (triggered message) ve vašem Dashboardu
Conversation served
Když si návštěvník a operátor/agent (nebo chatbot) vymění zprávu.
- Štítek události = operátorovo/agentovo jméno
Auth form filled
Když návštěvník vyplní kontaktní formulář.
- Není přiřazen žádný štítek události
Offline message sent
Když návštěvník odešle offline zprávu.
- Není přiřazen žádný štítek události
Feedback sent
Když návštěvník vyplní a odešle formulář zpětné vazby.
- Štítek události = úroveň hodnocení (1, 3, 5 = špatná, normální, dobrá)
Chatbot sent
Událost je odeslána, když návštěvník obdrží chatbota nebo automatickou zprávu do chat boxu
- Štítek události = jméno chatbota nebo automatické zprávy, se kterou uživatel interagoval
Chatbot button interaction
Událost je odeslána při každém kliknutí na tlačítko chatbota (možná i vícekrát za relaci)
- Štítek události = jméno chatbota nebo automatické zprávy, se kterou uživatel interagoval
Chatbot interaction
Událost je odeslána, když návštěvník odpoví na chatbota nebo automatickou zprávu (jedná se pouze o první interakci až 1x za relaci)
- Štítek události = jméno chatbota nebo automatické zprávy, se kterou uživatel interagoval
Chatbot started conversation
Událost je odeslána, pokud návštěvník odpoví chatovou zprávou chatbotovi nebo automatickou zprávou
- Štítek události = jméno chatbota nebo automatické zprávy, se kterou uživatel interagoval
Přejmenované staré události
Nové
Staré
Chatbot_sent
Chatbot_interaction
Chatbot_button_interaction
Chatbot_viewed
Chatbot message viewed
Chatbot_visitor_reaction
Chatbot started conversation
Auto_message_sent
Auto_message_viewed
Auto_message_visitor_reaction
Auto message started a conversation
Visitor_started_conversation
Agent_served_conversation
Conversation served
Auth_form_filled
Offline_message_sent
Feedback_sent
Feedback_text_sent
Feedback sent
Trigger_message_sent
Triggered message sent
Trigger_message_viewed
Triggered message viewed
Trigger_visitor_reaction
Trigger started conversation
Výborně! Vše je nastaveno a funguje jak má.
Máte nějaké otázky, návrhy pro další měřící eventy, nebo s námi chcete sdílet Vaše data z Google Analytics? Dejte nám vědět !
Stále si nevíte rady? Kontaktujte nás prostřednictvím chatu po přihlášení se do vašeho Smartsupp účtu. Rádi vám pomůžeme. Upozorňujeme, že zákaznický servis je dostupný pouze v placených balíčcích.

