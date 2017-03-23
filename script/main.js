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


  /* load html fragment onto index page */
  function loadPage(){
    event.preventDefault(); // for anchor tag, don't navigate

    /* unhide home nav */
    //$('#nav-home').show();

    // play random cat sound
    var fileindex = getRandomInt(0, 5);
    var filename = './audio/cat_' + fileindex + '.mp3'
    var audio = new Audio(filename);
    audio.play();


    /* get the filename from the anchor tag */
    var file = this.href;

    /* load the html fragment into main div */
    $("#main").load(file, function(response, status){
      // status='fail'; for verifying failure message
      if (status == "success"){
        /* now that the partial page has loaded, wireup links on the partial page */
        $('.specific-booking').on('click', loadPage);
      } else {
        $("#main").text("Failed to load page.");
      }
    });

  }

  /* generate random number between two given numbers (inclusive) */
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

});
