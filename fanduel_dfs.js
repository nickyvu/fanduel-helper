$(document).on("mouseenter", "tr.lobbyitem div.user a", function() {
    var url = $(this).attr('href');
    $(this).parent().parent().append("<div class='results'></div>");
    $(".results").load("https://www.fanduel.com" + url+ " table");
});

$(document).on("mouseleave", "tr.lobbyitem div.user a", function() {
  $(".results").remove();
});

$(document).on("mouseenter", "li a.username", function() {
    var url = $(this).attr('href');
    $(this).append("<div class='results'></div>");
    $(".results").load(url+ " table");
});

$(document).on("mouseleave", "li a.username", function() {
  $(".results").remove();
});
