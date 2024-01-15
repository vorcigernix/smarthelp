# Smartsupp — Cookie consent
## If GDPR requires that your website have a cookie policy and corresponding cookie banner to notify visitors of the cookies on your site, you should enable c
If GDPR requires that your website have a cookie policy and corresponding cookie banner to notify visitors of the cookies on your site, you should enable cookie consent in your Smartsupp dashboard.
We’ve prepared a tutorial on how you can set up the different types of cookies you’ll be storing, and how to adjust the settings and text of your cookie bar accordingly.
To understand the instructions below, you’ll need advanced knowledge in programming. If you do not feel qualified, we recommend that you send it to the developer or webmaster who manages the cookie bar on your website.
If you use a Cookiebot device to manage cookies, please scroll down to the end of this article to see some examples of how you can manage your cookies.
Where to enable cookie consent in Smartsupp?
You will find the cookie consent settings at Settings >> Account settings >> Security and Privacy
By default, the cookie consent mode is disabled. When enabled only necessary cookies are stored. You can find a list of functional (necessary) cookies here:
Help - Functional cookies
To enable statistics and marketing cookies, you have to trigger a specific code. The default value of analytic and marketing cookie consent is empty. Therefore, statistics and marketing cookies are not stored until the visitor agrees. Lists of statistics and marketing cookies of the chat box can be found here:
Help - Statistics cookies Help - Marketing cookies
Add the cookie consent code to your website
The cookie consent is easy to implement with JavaScript. Use buttons in your cookie banner to manage Smartsupp statistics and marketing cookies.
Ignoring consent
If a visitor ignores your cookie bar and does not confirm or reject the consent, the scenario is as follows:
The ssupp.visit cookie will remain at its previous value as it originally was before the Manage cookie consent was turned on. It will not be increased until the consent is granted (this won’t affect the value in the Dashboard visible to operators, only this particular value in the Dashboard and the cookies will differ)
Recording is disabled
No Google Analytics events are sent
Chatbots and automatic messages will continue to function without changes
Acceptance of consent
Statistics cookies
If a visitor accepts statistics cookies, add:
smartsupp('analyticsConsent', true);
This code enables cookies, which are stored for recordings and for sending Google Analytics events.
Marketing cookies
If the visitor accepts marketing cookies, add:
smartsupp('marketingConsent', true);
This code enables cookies, which are used to store the number of visits previously made by the visitor. They are necessary to obtain information on the number of visits for operators. However, if the visitor does not give consent, it will not affect the functionality of chatbots and automatic messages.
All cookies
If a visitor accepts both / all cookies, add:
smartsupp('analyticsConsent', true);
smartsupp('marketingConsent', true);
Refusal of consent
Statistics cookies
If a visitor refuses statistics cookies, add:
smartsupp('analyticsConsent', false);
Rejecting consent will immediately suspend recordings of the visitor as well as the sending of events to Google Analytics (in case of re-authorization, the recording will be enabled along with the sending of Google Analytics events).
Marketing cookies
If a visitor refuses marketing cookies, add:
smartsupp('marketingConsent', false);
By refusing to consent, the ssupp.visit cookie used to determine the number of visits is immediately deleted. This does not affect the functionality of chatbots and automatic messages.
All cookies
If a visitor refuses all cookies, add:
smartsupp('analyticsConsent', false);
smartsupp('marketingConsent', false);
Example with Cookiebot
The example script below will help you add cookie consent on your website using Cookiebot:
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
Still confused? Contact us via the chat box in your dashboard and we’ll be happy to get in touch with you. Please note that customer service is included only in paid packages.

