$(function(){

  /* load home page */
  $("#main").load("main.html", function(response, status) {
    if (status != "success") {
      $("#main").text("failed to load page.");
    }
  });

  $("nav a").click(function(){
    event.preventDefault(); // for anchor tag, don't navigate
    var file = this.href;
    $("#main").load(file, function(response, status){
      if (status = "success"){

      } else {
        $("#main").text = "failed to load page."
      }
    });
  });


});
