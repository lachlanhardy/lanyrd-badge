# Lanyrd Badge
A jQuery badge for [http://lanyrd.com](http://lanyrd.com)

[See the Lanyrd Badge homepage](http://lachlanhardy.github.com/lanyrd-badge/)

Note: This is a very brittle solution and is only worth trying until Lanyrd releases an API. The badge screen scrapes the HTML from Lanyrd using YQL, so may break without warning if the HTML changes.

## Use it
To add to any page:

### 1. Include jQuery
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>

### 2. Include the lanyrd-badge.js file
    <script src="http://lachlanhardy.github.com/lanyrd-badge/lanyrd-badge.js"></script>

### 3. include an HTML element with a class of 'lanyrd-badge'

#### a. Add an attribute of 'data-type' to that element with a space-separated value including any or all of _'speaking'_, _'attending'_, _'involved'_, _'tracking'_.
  
#### b. Add to that element an attribute of 'data-user' with a value equaling the Lanyrd username.
    <div class="lanyrd-badge" data-type="attending speaking" data-user="tomcoates">
      <p>
        <a href="http://lanyrd.com/people/tomcoates/" rel="me">
          Lanyrd tracks my conferences
        </a>
      </p>
    </div>

### 4. If you want some basic styling, include the lanyrd-badge.css file:
    <link rel="stylesheet" href="http://lachlanhardy.github.com/lanyrd-badge/lanyrd-badge.css" media="screen, projection" type="text/css">

## Copyright
Copyright (c) 2010 Lachlan Hardy. See LICENSE for details.