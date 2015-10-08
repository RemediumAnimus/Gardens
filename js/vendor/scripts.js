angular.module('MyApp')

.controller('AppCtrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.title4 = '';
  $scope.isDisabled = true;
  $scope.googleUrl = 'http://google.com';
   $scope.clearValue = function() {
    $scope.myModel = undefined;
  };

});

window.onload = function(){

$(function() {
    FastClick.attach(document.body);
});

$('input, textarea').placeholder();

if (document.all) {
    var elem = "<select class='select-m'>" +
               "<option>Москва</option>" +
               "<option>Сергиев Посад</option>" +
               "</select>"
    $('.select-wrap md-input-container').remove();
    $('.select-wrap').html(elem);
}

var placehol = "Поиск по сайту";

function isMobileWidth() {
    return $('#mobile-indicator').is(':visible');
}

function isMiddleWidth() {
    return $('#middle-indicator').is(':visible');
}

function isMenu() {
    return $('#menu-indicator').is(':visible');
}

function isSearch() {
    return $('#search-indicator').is(':visible');
}

if ($('#page input').hasClass("phone-mask")) {
  $("#page .phone-mask").mask("+7 (999) 999-9999");
};

$('.bucket-m .t-close').click(function(){
    $(this).parent().parent().parent().remove();
});

$('.cab-history .t-hide').click(function(){
    $(this).next().css('display') != 'none' ?
    ($(this).next().slideUp('fast'),$(this).removeClass('thead-active')) :
    ($(this).next().slideDown('fast'),$(this).addClass('thead-active'));

});

$('.count-block .right span').click(function(){
    $(this).parent().find('input').prop('checked') == true ?
    $(this).parent().find('input').prop('checked',false):
    $(this).parent().find('input').prop('checked',true);
});

$('.pop-up-order .right span').click(function(){
    $(this).parent().find('input').prop('checked') == true ?
    $(this).parent().find('input').prop('checked',false):
    $(this).parent().find('input').prop('checked',true);
});

$('.my-tooltip').qtip({
  content: {
        text: 'В избранное'
  },
  style: {
      classes: 'mytool'
  },
  position: {
      my: 'bottom center',
      at:'top center',
      adjust: {
            y: -10
      },
  },
  show: {
      effect: function(offset) {
      $(this).slideDown(100);
     }
  },
  hide: {
      effect: function(offset) {
      $(this).slideUp(100); // "this" refers to the tooltip
     }
  }
});

$('.pop-up-item .close-it').click(function(){
    $(this).parent().parent().hide('fast');
});

$('.item .stat').click(function(){
    if (!isMobileWidth()) {
        $('.pop-up-item').show('fast');
        setTimeout(function(){
           $('.pop-up-item').hide('fast');
        },5000);
    } else {
        $('.pop-up-item').hide('fast');
    }
})

$('.menu-part .search input').focus(function(){
    if (isSearch()) {
        $('.menu-part .search').addClass('search-full');
        $('.menu-part .table-t .it').hide();
    }
});

$('.menu-part .search').click(function(){
    if (isSearch()) {
        $(this).find('input').addClass('search-full-show');
        $(this).find('input').focus();
        $('.menu-part .search').addClass('search-full');
        $('.menu-part .table-t .it').hide();
    }
});

$('.menu-part .search input').blur(function(){
    $(this).removeClass('search-full-show');
    $('.menu-part .search').removeClass('search-full');
    $('.menu-part .table-t .it').show();
    $(this).val('');
    $(this).prop('placeholder',placehol);
});

$('.plus').click(function(){
    var value = parseInt($(this).parent().find('input').prop('value'));
    $(this).parent().find('input').prop('value',++value);
});

$('.minus').click(function(){
    var value = parseInt($(this).parent().find('input').prop('value'));
    value > 0 ? $(this).parent().find('input').prop('value',--value) : 0;
});

if ($('.main-slider').length) {

    jQuery('#page .main-slider .slider-in').rhinoslider({
      animateActive: true,
      effect: 'fade',
      autoPlay: true,
      cycled: true,
      showTime: 5000,
      showBullets:'never',
      pauseOnHover: false,
      controlsMousewheel: false,
      controlsPrevNext: true,
      showControls: true,
    });

}

$('.rhino-container').css('width','100%');
$('.rhino-item').css('width','100%');

$('.main-slider .arrow-r').click(function(){
 $('#page .main-slider .slider-in').data('rhinoslider').next();
});

$('.main-slider .arrow-l').click(function(){
 $('#page .main-slider .slider-in').data('rhinoslider').prev();
});

$('#page .main-slider .slider-in').swipe({
  swipeLeft:function() {
     $('#page .main-slider .slider-in').data('rhinoslider').next();
   },
  swipeRight:function() {
     $('#page .main-slider .slider-in').data('rhinoslider').prev();
  }
});


if ($('#slider1 .items').length) {
      $('#slider1 .items').on('jcarousel:create jcarousel:reload', function() {
            var element = $(this),
                width = element.innerWidth();
                if (width>1225) {
                    width = width/5;
                }

                if (width>1025) {
                    width = width/4;
                }

                if (width>825) {
                    width = width/3;
                }

                if (width>525) {
                    width = width/2;
                }

                element.jcarousel('items').css('width', width + 'px');
            }).jcarousel({
        wrap: 'circular'
      });

      $('#slider1 .arr-r').click(function(){
        $('#slider1 .items').jcarousel('scroll','+=1');
      });

      $('#slider1 .arr-l').click(function(){
        $('#slider1 .items').jcarousel('scroll','-=1');
      });

      $('#slider1 .items').swipe({
          swipeLeft:function() {
              $('#slider1 .items').jcarousel('scroll','+=1');
          },
          swipeRight:function() {
              $('#slider1 .items').jcarousel('scroll','-=1');
          }

       });

}

if ($('#slider2 .items').length) {
      $('#slider2 .items').on('jcarousel:create jcarousel:reload', function() {
            var element = $(this),
                width = element.innerWidth();
                if (width>1225) {
                    width = width/5;
                }

                if (width>1025) {
                    width = width/4;
                }

                if (width>825) {
                    width = width/3;
                }

                if (width>525) {
                    width = width/2;
                }

                element.jcarousel('items').css('width', width + 'px');
            }).jcarousel({
        wrap: 'circular'
      });

      $('#slider2 .arr-r').click(function(){
        $('#slider2 .items').jcarousel('scroll','+=1');
      });

      $('#slider2 .arr-l').click(function(){
        $('#slider2 .items').jcarousel('scroll','-=1');
      });

      $('#slider2 .items').swipe({
          swipeLeft:function() {
              $('#slider2 .items').jcarousel('scroll','+=1');
          },
          swipeRight:function() {
              $('#slider2 .items').jcarousel('scroll','-=1');
          }

       });
}

if ($('#slider3 .items').length) {
      $('#slider3 .items').on('jcarousel:create jcarousel:reload', function() {
            var element = $(this),
                width = element.innerWidth();
                if (width>1225) {
                    width = width/4;
                }

                if (width>1025) {
                    width = width/4;
                }

                if (width>825) {
                    width = width/3;
                }

                if (width>525) {
                    width = width/2;
                }

                element.jcarousel('items').css('width', width + 'px');
            }).jcarousel({
        wrap: 'circular',
        scroll: 1,
      });

      $('#slider3 .arr-r').click(function(){
        $('#slider3 .items').jcarousel('scroll','+=1');
      });

      $('#slider3 .arr-l').click(function(){
        $('#slider3 .items').jcarousel('scroll','-=1');
      });
      $('#slider3 .items').swipe({
          swipeLeft:function() {
              $('#slider3 .items').jcarousel('scroll','+=1');
          },
          swipeRight:function() {
              $('#slider3 .items').jcarousel('scroll','-=1');
          }

       });
}

if ($('#slider4 .items').length) {
      $('#slider4 .items').on('jcarousel:create jcarousel:reload', function() {
            var element = $(this),
                width = element.innerWidth();
                if (width>1225) {
                    width = width/4;
                }

                if (width>1025) {
                    width = width/4;
                }

                if (width>825) {
                    width = width/3;
                }

                if (width>525) {
                    width = width/2;
                }

                element.jcarousel('items').css('width', width + 'px');
            }).jcarousel({
        wrap: 'circular'
      });

      $('#slider4 .arr-r').click(function(){
        $('#slider4 .items').jcarousel('scroll','+=1');
      });

      $('#slider4 .arr-l').click(function(){
        $('#slider4 .items').jcarousel('scroll','-=1');
      });

      $('#slider4 .items').swipe({
          swipeLeft:function() {
              $('#slider4 .items').jcarousel('scroll','+=1');
          },
          swipeRight:function() {
              $('#slider4 .items').jcarousel('scroll','-=1');
          }

       });
}

if ($('#slider5 .items').length) {
      $('#slider5 .items').on('jcarousel:create jcarousel:reload', function() {
            var element = $(this),
                width = element.innerWidth();
                if (width>1225) {
                    width = width/4;
                }

                if (width>1025) {
                    width = width/4;
                }

                if (width>825) {
                    width = width/3;
                }

                if (width>525) {
                    width = width/2;
                }

                element.jcarousel('items').css('width', width + 'px');
            }).jcarousel({
        wrap: 'circular'
      });

      $('#slider5 .arr-r').click(function(){
        $('#slider5 .items').jcarousel('scroll','+=1');
      });

      $('#slider5 .arr-l').click(function(){
        $('#slider5 .items').jcarousel('scroll','-=1');
      });

      $('#slider5 .items').swipe({
          swipeLeft:function() {
              $('#slider5 .items').jcarousel('scroll','+=1');
          },
          swipeRight:function() {
              $('#slider5 .items').jcarousel('scroll','-=1');
          }

       });
}

if ($('#slider6 .items').length) {
      $('#slider6 .items').on('jcarousel:create jcarousel:reload', function() {
            var element = $(this),
                width = element.innerWidth();
                if (width>1060) {
                    width = width/2;
                }

                if (width>525) {
                    width = width/1;
                }

                element.jcarousel('items').css('width', width + 'px');
            }).jcarousel({
        wrap: 'circular'
      });

      $('#slider6 .arr-r').click(function(){
        $('#slider6 .items').jcarousel('scroll','+=1');
      });

      $('#slider6 .arr-l').click(function(){
        $('#slider6 .items').jcarousel('scroll','-=1');
      });

      $('#slider6 .items').swipe({
          swipeLeft:function() {
              $('#slider6 .items').jcarousel('scroll','+=1');
          },
          swipeRight:function() {
              $('#slider6 .items').jcarousel('scroll','-=1');
          }

       });
}

if ($('#slider7 .items').length) {
      $('#slider7 .items').on('jcarousel:create jcarousel:reload', function() {
            var element = $(this),
                width = element.innerWidth();
                if (width>1060) {
                    width = width/2;
                }

                if (width>525) {
                    width = width/1;
                }

                element.jcarousel('items').css('width', width + 'px');
            }).jcarousel({
        wrap: 'circular'
      });

      $('#slider7 .arr-r').click(function(){
        $('#slider7 .items').jcarousel('scroll','+=1');
      });

      $('#slider7 .arr-l').click(function(){
        $('#slider7 .items').jcarousel('scroll','-=1');
      });

      $('#slider7 .items').swipe({
          swipeLeft:function() {
              $('#slider7 .items').jcarousel('scroll','+=1');
          },
          swipeRight:function() {
              $('#slider7 .items').jcarousel('scroll','-=1');
          }

       });
}
function news() {
    if ($('.news-slider-m').length) {
        if (isMobileWidth()) {
              $('.news-slider-m').on('jcarousel:create jcarousel:reload', function() {
                    var element = $(this),
                        width = element.innerWidth();
                        if (width>1060) {
                            width = width/2;
                        }

                        if (width>525) {
                            width = width/1;
                        }

                        element.jcarousel('items').css('width', width + 'px');
                    }).jcarousel({
                wrap: 'circular'
              });

              $('.news-slider-m').swipe({
                  swipeLeft:function() {
                      $('.news-slider-m').jcarousel('scroll','+=1');
                  },
                  swipeRight:function() {
                      $('.news-slider-m').jcarousel('scroll','-=1');
                  }

               });

           }
    }
}
news();
if ($('#comparing-slider').length) {
    $('#comparing-slider .slider-in').on('jcarousel:create jcarousel:reload', function() {
            var element = $(this);
            var width;
            width = element.innerWidth();

                if (width>900) {
                    width = width/4;
                    if ($('#comparing-slider .slider-in .item').length < 4) {
                        $('#comparing-slider .arr-r').hide();
                    }
                    else {
                        $('#comparing-slider .arr-r').show();
                    }
                }

                if (width>750) {
                    width = width/3;
                    if ($('#comparing-slider .slider-in .item').length < 3) {
                        $('#comparing-slider .arr-r').hide();
                    }
                    else {
                        $('#comparing-slider .arr-r').show();
                    }
                }
                if (width>450) {
                    width = width/2;
                    if ($('#comparing-slider .slider-in .item').length < 2) {
                        $('#comparing-slider .arr-r').hide();
                    }
                    else {
                        $('#comparing-slider .arr-r').show();
                    }
                }

                element.jcarousel('items').css('width', width + 'px');
            }).jcarousel({
        wrap: 'circular'
      });

      $('#comparing-slider .arr-r').click(function(){
          $('#comparing-slider .slider-in').jcarousel('scroll','+=1');
      });

      $('#comparing-slider .slider-in').swipe({
          swipeLeft:function() {
              $('#comparing-slider .slider-in').jcarousel('scroll','+=1');
          },
          swipeRight:function() {
              $('#comparing-slider .slider-in').jcarousel('scroll','-=1');
          }

       });
};

$('#comparing-slider .slider-in .del').click(function() {
    $(this).parent().remove();
    $('#comparing-slider .slider-in').jcarousel('reload');
})

var _SlideshowTransitions = [
  //Zoom- in
  {$Duration: 1200, $Zoom: 1, $Easing: { $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseOutQuad }, $Opacity: 2 },
  //Zoom+ out
  {$Duration: 1000, $Zoom: 11, $SlideOut: true, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
  //Rotate Zoom- in
  {$Duration: 1200, $Zoom: 1, $Rotate: 1, $During: { $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Easing: { $Zoom: $JssorEasing$.$EaseSwing, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseSwing }, $Opacity: 2, $Round: { $Rotate: 0.5} },
  //Rotate Zoom+ out
  {$Duration: 1000, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.8} },

  //Zoom HDouble- in
  {$Duration: 1200, x: 0.5, $Cols: 2, $Zoom: 1, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
  //Zoom HDouble+ out
  {$Duration: 1200, x: 4, $Cols: 2, $Zoom: 11, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },

  //Rotate Zoom- in L
  {$Duration: 1200, x: 0.6, $Zoom: 1, $Rotate: 1, $During: { $Left: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Easing: { $Left: $JssorEasing$.$EaseSwing, $Zoom: $JssorEasing$.$EaseSwing, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseSwing }, $Opacity: 2, $Round: { $Rotate: 0.5} },
  //Rotate Zoom+ out R
  {$Duration: 1000, x: -4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.8} },
  //Rotate Zoom- in R
  {$Duration: 1200, x: -0.6, $Zoom: 1, $Rotate: 1, $During: { $Left: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Easing: { $Left: $JssorEasing$.$EaseSwing, $Zoom: $JssorEasing$.$EaseSwing, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseSwing }, $Opacity: 2, $Round: { $Rotate: 0.5} },
  //Rotate Zoom+ out L
  {$Duration: 1000, x: 4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.8} },

   //Rotate HDouble- in
  {$Duration: 1200, x: 0.5, y: 0.3, $Cols: 2, $Zoom: 1, $Rotate: 1, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseOutQuad, $Rotate: $JssorEasing$.$EaseInCubic }, $Opacity: 2, $Round: { $Rotate: 0.7} },
  //Rotate HDouble- out
  {$Duration: 1000, x: 0.5, y: 0.3, $Cols: 2, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.7} },
  //Rotate VFork in
  {$Duration: 1200, x: -4, y: 2, $Rows: 2, $Zoom: 11, $Rotate: 1, $Assembly: 2049, $ChessMode: { $Row: 28 }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseOutQuad, $Rotate: $JssorEasing$.$EaseInCubic }, $Opacity: 2, $Round: { $Rotate: 0.7} },
  //Rotate HFork in
  {$Duration: 1200, x: 1, y: 2, $Cols: 2, $Zoom: 11, $Rotate: 1, $Assembly: 2049, $ChessMode: { $Column: 19 }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseOutQuad, $Rotate: $JssorEasing$.$EaseInCubic }, $Opacity: 2, $Round: { $Rotate: 0.8} }
];

var options = {
    //$AutoPlay: true ,
    $AutoPlayInterval: 2500,
    $ArrowKeyNavigation: true,
    $PauseOnHover: 1,
    $SlideDuration: 600,

    $ArrowNavigatorOptions: {
       $Class: $JssorArrowNavigator$,
       $ChanceToShow: 2,
       $AutoCenter: 0,
       $Steps: 1
    },
    $ThumbnailNavigatorOptions: {
       $Class: $JssorThumbnailNavigator$,
       $ChanceToShow: 2,
       $ActionMode: 1,
       $Lanes: 1,
       //$SpacingX: 14,
       $SpacingY: 0,
       $DisplayPieces: 5,
       $ParkingPosition: 0,
       $Orientation: 2,

       $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$,
          $ChanceToShow: 2,
          $AutoCenter: 0,
          $Steps: 6
        }

     }
};

var options2 = {
    $AutoPlay: false ,
    $AutoPlayInterval: 2500,
    $ArrowKeyNavigation: true,
    $PauseOnHover: 1,
    $SlideDuration: 600,
    $SlideSpacing: 30,

    $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      $Transitions: _SlideshowTransitions,
      $TransitionsOrder: 1,
      $ShowLink: true
    },

    $ArrowNavigatorOptions: {
       $Class: $JssorArrowNavigator$,
       $ChanceToShow: 2,
       $AutoCenter: 0,
       $Steps: 1
    },
    $ThumbnailNavigatorOptions: {
       $Class: $JssorThumbnailNavigator$,
       $ChanceToShow: 2,
       $ActionMode: 1,
       $Lanes: 1,
       //$SpacingX: 14,
       $SpacingY: 0,
       $DisplayPieces: 5,
       $ParkingPosition: 0,
       $Orientation: 2,

       $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$,
          $ChanceToShow: 2,
          $AutoCenter: 0,
          $Steps: 4
        }

     }
};

var options3 = {
    $AutoPlay: false ,
    $AutoPlayInterval: 2500,
    $ArrowKeyNavigation: true,
    $PauseOnHover: 1,
    $SlideDuration: 600,

    $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      $Transitions: _SlideshowTransitions,
      $TransitionsOrder: 1,
      $ShowLink: true
    },

    $ArrowNavigatorOptions: {
       $Class: $JssorArrowNavigator$,
       $ChanceToShow: 2,
       $AutoCenter: 0,
       $Steps: 1
    },
    $ThumbnailNavigatorOptions: {
       $Class: $JssorThumbnailNavigator$,
       $ChanceToShow: 2,
       $ActionMode: 1,
       $Lanes: 1,
       //$SpacingX: 14,
       $SpacingY: 6,
       $DisplayPieces: 5,
       $ParkingPosition: 0,
       $Orientation: 2,

       $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$,
          $ChanceToShow: 2,
          $AutoCenter: 0,
          $Steps: 4
        }

     }
};
if ($('#slides-container1').length) {

    var jssor_slider1 = new $JssorSlider$('slides-container1', options);

    function ScaleSlider() {
       var parentWidth = $('#slides-container1').parent().width();
       if (parentWidth) {

           jssor_slider1.$ScaleWidth(Math.max(Math.min(parentWidth, 672), 100));

           if (isMiddleWidth()) {
               jssor_slider1.$ScaleWidth(Math.max(Math.min(parentWidth, 1080), 175));
           }
       }
       else
           window.setTimeout(ScaleSlider, 30);
    }

    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);

}

if ($('#slides-container2').length) {

    var jssor_slider2 = new $JssorSlider$('slides-container2', options2);

    function ScaleSlider2() {
       var parentWidth2 = $('#slides-container2').parent().width();
       if (parentWidth2) {

           jssor_slider2.$ScaleWidth(Math.max(Math.min(parentWidth2, 672), 100));

           if (isMiddleWidth()) {
               jssor_slider2.$ScaleWidth(Math.max(Math.min(parentWidth2, 1080), 175));
           }
           if (isMobileWidth()) {
               $('.slide').css('overflow','visible');
           }
               else {
                  $('.slide').css('overflow','hidden');
           }
       }
       else
           window.setTimeout(ScaleSlider2, 30);
    }

    ScaleSlider2();

    $(window).bind("load", ScaleSlider2);
    $(window).bind("resize", ScaleSlider2);
    $(window).bind("orientationchange", ScaleSlider2);

}

if ($('#slides-container3').length) {

    var jssor_slider3 = new $JssorSlider$('slides-container3', options3);

    function ScaleSlider3() {
       var parentWidth3 = $('#slides-container3').parent().width();
       if (parentWidth3) {

           jssor_slider3.$ScaleWidth(Math.max(Math.min(parentWidth3, 1028), 100));

           if (isMiddleWidth()) {
               jssor_slider3.$ScaleWidth(Math.max(Math.min(parentWidth3, 1080), 175));
           }
       }
       else
           window.setTimeout(ScaleSlider3, 30);
    }

    ScaleSlider3();

    $(window).bind("load", ScaleSlider3);
    $(window).bind("resize", ScaleSlider3);
    $(window).bind("orientationchange", ScaleSlider3);

}

function placeholder() {

  $('input[type="text"],input[type="search"], textarea').focus(function(){
    if ($(this).prop('readonly')==false) {
       var plac = $(this).prop('placeholder');
       $(this).prop('placeholder',' ');

       $('input[type="text"],input[type="search"], textarea').blur(function(){
           $(this).prop('placeholder',plac);
           $('.menu-part .search input').prop('placeholder',placehol);
       });
    }
  });

};

placeholder();

if ($('.selectpicker').length){
  $('.selectpicker').selectBox();
}

$('.table-t .it').hover(function(){
    if (!isMobileWidth()) {
        $(this).find('ul').stop().slideDown('fast');
        $(this).children('a').css('background','#fff');
    }
},function(){
    if (!isMobileWidth()) {
        $(this).find('ul').stop().slideUp(200);
        var $elem = $(this);
        $(this).removeClass('togs');
        setTimeout(function(){
           $elem.children('a').css('background','transparent');
        },200);
    }
});

$('.table-t .it').click(function(){
    if (isMobileWidth()) {
        $(this).find('ul').css('display') != 'none' ?
        $(this).find('ul').stop().slideUp('fast') :
        ($(this).find('ul').removeAttr('style'),$(this).find('ul').stop().slideDown('fast'));
        $(this).toggleClass('togs');
    }
    if (!isMobileWidth()) {
        if ($(this).find('ul').css('display') == 'none') {
            $(this).find('ul').slideDown('fast');
            $(this).children('a').css('background','#fff');
        } else {
        $(this).find('ul').slideUp('fast');
        }
    }
});

$('.button-all').click(function(){
    $(this).find('.togg').toggleClass('button-all-active');
   if (parseInt($('.container-all').css('height')) >= 279) {
       $('.container-all').animate({'height':'246px'},1000);
   } else {
        var curHeight = $('.container-all').height();
        var autoHeight = $('.container-all').css('height', 'auto').height();
        $('.container-all').height(curHeight).animate({height: autoHeight}, 1000);
    }
});

$('.read-all').click(function(e){
    e.preventDefault();
    $(this).find('.togg2').toggleClass('button-all-active');
   if (parseInt($('.container-t .text').css('height')) >= 279) {
       $(this).find('.togg2').html('Читать далее');
       $('.container-t .text').animate({'height':'126px'},1000);
   } else {
        var curHeight = $('.container-t .text').height();
        var autoHeight = $('.container-t .text').css('height', 'auto').height();
        $(this).find('.togg2').html('Скрыть');
        $('.container-t .text').height(curHeight).animate({height: autoHeight}, 1000);
    }
});

$('.item').hover(function(){
    if($(this).hasClass('item-shad')) {
       $(this).addClass('item-shad-active');
    }
    if ($(window).width() >= 1180) {
        $(this).find('.flow-block').addClass('shadow');
        $(this).find('.flow-block').stop().animate({'margin-top':'87'},'fast',function(){
            $(this).find('.order').show();
            $(this).find('.order').animate({'opacity':'1'},200);
        });
    }
},function(){
    $(this).removeClass('item-shad-active');
    if ($(window).width() >= 1180) {
        $elem = $(this);
        $(this).find('.order').hide();
        $(this).find('.flow-block').stop().animate({'margin-top':'135'},'fast');
        $(this).find('.flow-block').removeClass('shadow');
        $(this).find('.order').css({'opacity':'0'});
    }
});

$('.catalog-button').click(function(){
   $('.menu-part').show('fast');
   $('#page').css('height','100%');
});

$('.menu-part .tab').click(function(){
    $('.menu-part').hide('fast');
    $('#page').css('height','auto');
});

$('.cons-block .close-m').click(function(){
    $('.cons-block').hide('fast');
});

$('.burger').click(function(){
    $(this).find('.menu').css('display') != 'none' ?
    $(this).find('.menu').hide('fast'):
    $(this).find('.menu').show('fast');
});

$('.filter .part .val').find('input').click(function(){
    $(this).parent().parent().parent().find('input').prop('checked',false);
    $(this).prop('checked',true);
})

$('.value-ch').click(function(){
    $(this).parent().parent().parent().find('input').prop('checked',false);
    $(this).parent().find('input').prop('checked',true);
});

$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'

    });
    $(document).on('click', '.modal-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(function () {
    $('.pop-up-order2').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom2'

    });
    $(document).on('click', '.modal-close2', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

//!check-field//
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

    $(function() {
     $('.rf').each(function(){
     // Объявляем переменные (форма и кнопка отправки)
      var form = $(this),
      btn = form.find('.disabled');

     // Добавляем каждому проверяемому полю, указание что поле пустое
      form.find('.rfield').addClass('empty_field');
      form.find('.email').addClass('empty_field-red');

     // Функция проверки полей формы
      function checkInput(){
         form.find('.rfield').each(function(){
             if($(this).val() != ''){
         // Если поле не пустое удаляем класс-указание
                $(this).removeClass('empty_field');
                $(this).addClass('filled');
             } else {
         // Если поле пустое добавляем класс-указание
                $(this).addClass('empty_field');
             }
         });
         form.find('.email').each(function(){
             if(($(this).val() != '') && (IsEmail($(this).val()))){
         // Если поле не пустое удаляем класс-указание
                $(this).removeClass('empty_field-red');
             } else {
         // Если поле пустое добавляем класс-указание
                $(this).addClass('empty_field-red');
             }
         });
       }

      // Функция подсветки незаполненных полей
      function lightEmpty(){
        var img = form.find('.empty_field').css('background-image');
        var img2 = form.find('.empty_field-red').css('background-image');
        var img3 = form.find('.filled').css('background-image');
        form.find('.empty_field').css({'border-bottom':'2px solid #cf2929'});
        form.find('.empty_field').next().show();
        form.find('.empty_field-red').css({'border-bottom':'2px solid #cf2929',"color":"#cf2929"});
        form.find('.empty_field-red').next().show();
        form.find('.filled').css({'border-bottom':'2px solid #84c33a'});

      // Через полсекунды удаляем подсветку
        setTimeout(function(){
           form.find('.empty_field').removeAttr('style');
           form.find('.empty_field-red').removeAttr('style');
           form.find('.filled').removeAttr('style');
           $('.field-war').hide();
        },1500);
       }

      // Проверка в режиме реального времени
        setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
           checkInput();
      // Считаем к-во незаполненных полей
           var sizeEmpty = form.find('.empty_field').size();
           var sizeEmpty2 = form.find('.empty_field-red').size();
      // Вешаем условие-тригер на кнопку отправки формы
           if(sizeEmpty > 0){
              if(btn.hasClass('disabled')){
                  return false
              } else {
                btn.addClass('disabled')
               }
            } else {
               btn.removeClass('disabled')
              }
          if(sizeEmpty2 > 0){
              if(btn.hasClass('disabled')){
                  return false
              } else {
                btn.addClass('disabled');
               }
            } else {
               btn.removeClass('disabled')
              }
         },500);

      // Событие клика по кнопке отправить
         btn.click(function(){
           if($(this).hasClass('disabled')){
      // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
              lightEmpty();
              return false
           } else {
     // Все хорошо, все заполнено, отправляем форму
              form.submit();
             }
         });
        });
      });

//!/check-field//


var status = true;
var change = false;
$(window).resize(function(){
    //$('#page').css('height','auto');
    news();
    //$.magnificPopup.close();
    setTimeout(function(){
        $('#comparing-slider .slider-in').jcarousel('reload');
    },100);
    $('.read-all').find('.togg2').html('Читать далее');
    $('.read-all').find('.togg2').removeClass('button-all-active');

    $('.menu-part .search').removeClass('search-full');
    $('.menu-part .table-t .it').show();
    if ($(window).width() < 1180) {
        $('.item .flow-block').removeClass('shadow');
        $('.item .flow-block').css('margin-top','87');
        $('.item .order').css({'opacity':'1'});
        $('.item .order').show();
    }
    if ($(window).width() > 1180) {
        $('.item .flow-block').css('margin-top','135');
        $('.item .order').css({'opacity':'0'});
        $('.item .order').hide();
    }
    if (!isMobileWidth()) {
        $('.table-t .it').find('ul').hide();
        $('.menu-part').show();
        $('.container-t .text').css('height','auto');
        status = false;
        change = true;
    }
    if (isMobileWidth()) {
        $('.table-t .it').removeClass('togs');
        $('.pop-up-item').hide();
        $('.container-t .text').css('height','120px');
        status = true;
    }
    if (status && change) {
         $('.menu-part').hide();
         status = false;
         change = false;
    }
    if (isMenu()) {
        $('.burger .menu').show();
    } else {
        $('.burger .menu').hide();
    }
})
};
