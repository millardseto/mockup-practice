$(function(){

  /* load home page - since user hasnt clicked anything yet */
  $("#main").load("main.html", function(response, status) {
    if (status != "success") {
      $("#main").text("Failed to load page.");
    }

    /* the home page doesnt need to see home menu item */
    //$('#nav-home').hide();

    /* now that the partial page has loaded, wireup links on the partial page */
    $('.specific-booking').on('click', loadPage);

  });

  /* click event handler for nav anchors and booking anchors */
  $('nav a, .general-booking').on('click', loadPage);


  function loadPage(){
    event.preventDefault(); // for anchor tag, don't navigate

    /* unhide home nav */
    //$('#nav-home').show();

    /* get the filename from the anchor tag */
    var file = this.href;

    $("#main").load(file, function(response, status){
      // status='fail'; for verifying failure message
      if (status == "success"){
        /* if there are links in content pages, may need to wire up here */
      } else {
        $("#main").text("Failed to load page.");
      }
    });

  }

});
