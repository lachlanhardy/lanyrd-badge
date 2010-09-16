# Lanyrd Badge
A jQuery badge for http://lanyrd.com

Note: This is a very brittle solution and is only worth trying until Lanyrd releases an API. The badge screen scrapes the HTML from Lanyrd using YQL, so may break without warning if the HTML changes.

## Use it
To add to any page:
* include jQuery
  &lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"&gt;&lt;/script&gt;
* include the lanyrd-badge.js file
  &lt;script src="inc/js/lanyrd-badge.js"&gt;&lt;/script&gt;
* include an HTML element with a class of 'lanyrd-badge'
* Add an attribute of 'data-type' to that element with a space-separated value including any or all of 'speaking', 'attending', 'involved', 'tracking'.
* Add to that element an attribute of 'data-user' with a value equaling the Lanyrd username.
  &lt;div class="lanyrd-badge" data-type="attending speaking" data-user="tomcoates"&gt;&lt;p&gt;Lanyrd tracks my conferences&lt;/p&gt;&lt;/div&gt;

If you want some basic styling, include the lanyrd-badge.css file:
  &lt;link rel="stylesheet" href="lanyrd-badge.css" media="screen, projection" type="text/css"&gt;

## Copyright
Copyright (c) 2010 Lachlan Hardy. See LICENSE for details.