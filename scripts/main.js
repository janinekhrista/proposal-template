$(document).ready(function() {

  // ScrollTo
  var headerHeight = $('header').height();

  $(window).scroll(function() {

    if ($(this).scrollTop() > (headerHeight-47)) {
      $('.main-nav').addClass('main-nav-scrolled');
    } else {
      $('.main-nav').removeClass('main-nav-scrolled');
    }

  });

  // Timeline
  $('.flik-timeline').flikScrollEffect();
  $('.flik-slider-container .flik-slider').bxSlider();

});
