# How to Add Live Chat to WordPress Website | Smartsupp
## Learn how to easily install live chat with chatbot on WordPress website. No coding required! Try Smartsupp live chat for free
Smartsupp Live Chat & Chatbots Integration
There are three options how to install Smartsupp to your website, choose one which sounds the most familiar for you.
1. Using our plugin
The easiest option is to install our plugin and login to your account.
Install plugin
Plugins > Add new, search for Smartsupp Live Chat and click Install Now.
Login to Smartsupp account
You can Create free account or Connect existing account.
If all is ok you will see this page.
2. Insert code manually
If you do not want to use plugin, you can insert code directly into WordPress theme.
Be careful: you can destroy your site! Send this tutorial to your webmaster.
Copy code
Your code is in Smartsupp - Settings - Chat box - Chat code.
Insert code
Appearance > Editor > Theme Header (header.php) > insert code > Update File
3. Advanced custom changes
Do not want to use plugin or you inserted code manually and need advanced custom changes? The steps below are exactly for you.
Install "Scripts n Styles"
By default when you install our plugin or insert our code into header it gets displayed in all pages. In case you need to display our code on certain specific pages or maybe just one page only, install 3rd party WordPress plugin Scripts n Styles.
Copy code
Your code is in Smartsupp - Settings - Chat box - Chat code.
Adjust code
You need to do a few small changes to our default code.
Read carefully or it will not work.
From our code remove these lines.
<!-- Smartsupp Live Chat script -->
<script type="text/javascript">
</script>
Your original code ...
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
... needs to look like you see below. EXAMPLE ONLY. DO NOT COPY!
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
window.smartsupp||(function(d) {
 var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
 s=d.getElementsByTagName('script')[0];c=d.createElement('script');
 c.type='text/javascript';c.charset='utf-8';c.async=true;
 c.src='//www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
Insert code
Go to Pages, edit page you want and below content in Scripts n Styles insert modified code.
Click Update Scripts and Update your page.
Smartsupp cannot be installed on WordPress.com
The chat code cannot be installed on a free hosted WordPress.com website due to the fact that custom plugins cannot be installed on the platform. In addition, custom JavaScript is blocked from being embedded within these types of sites.
Note: If you are using a Google account to log into Smartsupp, it won't be possible to log in to the WordPress plugin the same way.
You can either insert the chat code manually, or you can click on "forgotten password" in Smartsupp and set up your login via email.
Still confused? Contact us via the chat box in your dashboard and we’ll be happy to get in touch with you. Please note that customer service is included only in paid packages.

