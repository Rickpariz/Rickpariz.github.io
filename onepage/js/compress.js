function debounce(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}}var transparent=!0,transparentDemo=!0,fixedTop=!1,navbar_initialized=!1;$(document).ready(function(){$(".scroll a").on("click",function(a){if(""!==this.hash){a.preventDefault();var b=this.hash;$("html, body").animate({scrollTop:$(b).offset().top-30+"px"},800,function(){window.location.hash=b})}}),$.material.init(),$('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(),0!=$(".datepicker").length&&$(".datepicker").datepicker({weekStart:1}),0!=$(".navbar-color-on-scroll").length&&$(window).on("scroll",materialKit.checkScrollForTransparentNavbar),$('[data-toggle="popover"]').popover(),$(".carousel").carousel({interval:4e5})}),materialKit={misc:{navbar_menu_visible:0},checkScrollForTransparentNavbar:debounce(function(){$(document).scrollTop()>40?transparent&&(transparent=!1,$(".navbar-color-on-scroll").removeClass("navbar-transparent"),$(".navbar-color-on-scroll").addClass("navbar-primary")):transparent||(transparent=!0,$(".navbar-color-on-scroll").removeClass("navbar-primary"),$(".navbar-color-on-scroll").addClass("navbar-transparent"))},10),initSliders:function(){$("#sliderRegular").noUiSlider({start:40,connect:"lower",range:{min:0,max:100}}),$("#sliderDouble").noUiSlider({start:[20,60],connect:!0,range:{min:0,max:100}})}},materialKitDemo={checkScrollForParallax:debounce(function(){$(this).scrollTop();oVal=$(window).scrollTop()/3,big_image.css({transform:"translate3d(0,"+oVal+"px,0)","-webkit-transform":"translate3d(0,"+oVal+"px,0)","-ms-transform":"translate3d(0,"+oVal+"px,0)","-o-transform":"translate3d(0,"+oVal+"px,0)"})},6)};$(document).ready(function(){function b(){a&&$(window).scrollTop(0)}var a=!0;$(window).bind("scroll",b),load(function(){$(".loader").fadeOut(1e3),a=!1})});
