console.log("Test!");
$(document).ready(function(){
  $("div.user a").each(
    function( index ){
      var url = $(this).attr('href');
      $(this).parent().parent().append("<div class='results" + index + "'></div>");
      $(".results" + index).load("https://www.fanduel.com" + url+ " table");
    });
});
