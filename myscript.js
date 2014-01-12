console.log("Test!");
$(document).on("mouseenter", "div.user a", function() {
    var url = $(this).attr('href');
    $(this).parent().parent().append("<div class='results'></div>");
    $(".results").load("https://www.fanduel.com" + url+ " table");
});

$(document).on("mouseleave", "div.user a", function() {
  $(".results").remove();
});

