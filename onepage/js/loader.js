$(document).ready(function() {
  var load = true;
  $(window).bind('scroll', setTopo);
  // $("body").css({"overflow":"hidden"});

  function setTopo() {
    if (load) {
      $(window).scrollTop(0);
    }
  }

  setTimeout(function() {
    $(".loader").fadeOut(1000);
    load = false;
    // $("body").css({"overflow":"scroll"});
  }, 800);


});
