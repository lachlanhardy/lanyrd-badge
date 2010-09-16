# Lanyrd Badge
A jQuery badge for [http://lanyrd.com](http://lanyrd.com)

[See the Lanyrd Badge homepage](http://lachlanhardy.github.com/lanyrd-badge/)

Note: This is a very brittle solution and is only worth trying until Lanyrd releases an API. The badge screen scrapes the HTML from Lanyrd using YQL, so may break without warning if the HTML changes.

## Install
To add to any page:

1. include jQuery
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
2. include the lanyrd-badge.js file
    <script src="inc/js/lanyrd-badge.js"></script>
3. include an HTML element with a class of 'lanyrd-badge'
  1. Add an attribute of 'data-type' to that element with a space-separated value including any or all of 'speaking', 'attending', 'involved', 'tracking'.
  2. Add to that element an attribute of 'data-user' with a value equaling the Lanyrd username.
      <div class="lanyrd-badge" data-type="attending speaking" data-user="tomcoates">
        <p>
          <a href="http://lanyrd.com/people/tomcoates/" rel="me">
            Lanyrd tracks my conferences
          </a>
        </p>
      </div>

If you want some basic styling, include the lanyrd-badge.css file:
    &lt;link rel="stylesheet" href="lanyrd-badge.css" media="screen, projection" type="text/css"&gt;

## Copyright
Copyright (c) 2010 Lachlan Hardy. See LICENSE for details.