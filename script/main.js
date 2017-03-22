$(function(){

  /* load home page - since user hasnt clicked anything yet */
  $("#main").load("main.html", function(response, status) {
    if (status != "success") {
      $("#main").text("failed to load page.");
    }

    /* now that the partial page has loaded, wireup links on the partial page */
    $('.specific-booking').click(function(){
      event.preventDefault(); // for anchor tag, don't navigate
      var file = this.href;
      $("#main").load(file);
    });

  });

  /* click event handler for nav anchors and booking anchors */
  $('nav a, .general-booking').click(function(){
    event.preventDefault(); // for anchor tag, don't navigate
    var file = this.href;
    $("#main").load(file, function(response, status){
      if (status == "success"){
        /* if there are links in content pages, may need to wire up here */
      } else {
        $("#main").text = "failed to load page."
      }
    });
  });


});
