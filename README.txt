A jQuery badge for http://lanyrd.com

Note: This is a very brittle solution. The badge screen scrapes the HTML from Lanyrd using YQL, so may break without warning if the HTML changes.


To add to any page:
* include jQuery
* include the lanyrd-badge.js file
* include an HTML element with a class of 'lanyrd-badge'
* Add an attribute of 'data-type' to that element with a space-separated value including any or all of 'speaking', 'attending', 'involved', 'tracking'.
* Add to that element an attribute of 'data-user' with a value equaling the Lanyrd username.

You may also add the small CSS file:
* Include the lanyrd-badge.css file