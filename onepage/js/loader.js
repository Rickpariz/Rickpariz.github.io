$(document).ready(function() {
  var load = true;
  $(window).bind('scroll', setTopo);
  // $("body").css({"overflow":"hidden"});

  function setTopo() {
    if (load) {
      $(window).scrollTop(0);
    }
  }

  $(window).on('load', function() {
    $(".loader").fadeOut(1000);
    load = false;
  });


});
