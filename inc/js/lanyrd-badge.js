(function() {
   $(".lanyrd-badge").each(function() {
        var $badge = $(this),
            username = $badge.attr("data-user"),
            type = $badge.attr("data-type").split(" "),
            xpath = "",
            results = "";

            $.each(type, function(index, value) {
              if (value == "all") {
                xpath = "//div[@class='split']/ul";
              } else {
                if (index != 0){
                  xpath = xpath + "|"
                }
                xpath = xpath + "%2F%2Fdiv%5B%40class%3D'split'%5D%2Fh2%5Bcontains(.%2C'" + value +"')%5D%2Ffollowing-sibling%3A%3Aul%5B1%5D"
              }
            });

        $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Flanyrd.com%2Fpeople%2F" + username +"%2F%22%20and%20xpath%3D%22" + xpath + "%22&format=xml&callback=?", function (data){

          for (i = 0, ii = type.length - 1; i <= ii; i++) {
            var thisType = type[i],
                heading = "<h2>" + thisType + "</h2>";
            results = results + '<div class="type '+ thisType +'">' + heading + data.results[i] + "</div>";
          }

          $badge.append(results.replace(/="\//g, '="http://lanyrd.com/'));
          $badge.append('<p class="pimpage"><a href="http://github.com/lachlanhardy/lanyrd-badge">Want your own Lanyrd badge?</a></p>');
        });
    });
})();