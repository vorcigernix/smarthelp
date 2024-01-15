# Smartsupp — Why can’t I see the chat on my website?
## Chat hidden in settings Make sure, that you don’t have the chat box hidden while offline(1), or completely hidden(2) in the Settings > Chat box > Opt
Chat hidden in settings
Make sure, that you don’t have the chat box hidden while offline(1), or completely hidden(2) in the Settings > Chat box > Options
You are blocked
Make sure that you’re not blocked as a visitor in your Smartsupp account.
Check your settings and see if your IP address is not on the list of blocked IP addresses.
Also, try to use the filter for “blocked visitors” in the visitor list and see if there are any blocked visitors. If you are among them, you can unblock yourself.
Chat code isn’t inserted or inserted improperly
Open the source code of your website or console. Open the page source (In Chrome the shortcut is CTRL+U) and try to search (CTRL+F) for smartsupp. If there are no results, it means that the chat code isn’t inserted in the website’s code. In this case, you will need to contact your developer to insert the chat code. 
If you are using some tag manager, e.g. Google tag manager, make sure that it’s working correctly. In most cases, you should be able to find the chat code in the elements of your website (Press CTRL+SHIFT+J, click on Elements(1) tab and search for smartsupp(2))
Also, make sure that you aren’t using more than one chat code on your website.
Mistake in the code
Make sure that there are no missing signs in the chat code. Ideally, copy the chat code directly from the Settings. You can try e.g. Diffchecker to check if the code from your website is the same as the original code. The most common issue is that the code is missing an underscore(_), and you can see an error in the browser console (CTRL+SHIFT+J)
Problem with website CSS’s
A typical case when the chat isn’t displayed on your website, even though the chat code is inserted properly, is that you have set up the display property for the iframe to none (display: none). An example is shown in the picture below. If that’s the case, your developer will need to change the CSS of the website.
Z-index of some element on the website more than 1000000
The z-index property specifies the stack order of an element.
An element with greater stack order is always in front of an element with a lower stack order.
So, if you have some element which has z-index more than 1M, it can cover the widget.
Javascript is disabled in the browser
Javascript is enabled in all browsers by default, but in case you have disabled it, you will need to enable it again. You can read about options on how to enable the Javascript in different browsers in this tutorial.
Testing environment
Your website is in a test environment (a.k.a. localhost), a restricted website, an intranet, or located on a private VPN. The website must be fully accessible from the Internet to ensure the 100% functionality of Smartsupp.
Offset of the widget
If you use a custom chat box position via API, and you decided to change the offset of the widget, make sure that it is visible even on smaller displays. If the offset is too big (or small) then the chat may be partially or completely invisible.
Content security policy
If you are using Content security policy on your website, make sure that all of our domains are whitelisted in your CSP.
smartsupp.com
smartsuppchat.com
cdn77.org
smartsuppcdn.com
If there is a problem with Content security policy, you should see in the Chrome console (CTRL+SHIFT+J), that the script violates the Content security policy directive.
Magic
In case you couldn’t find the problem, please contact us via the chat box in your Dashboard and provide as many information as you can (we will need the address of your website and your Smartsupp registration email). We will look into it.
Still confused? Contact us via the chat box in your dashboard and we’ll be happy to get in touch with you. Please note that customer service is included only in paid packages.

