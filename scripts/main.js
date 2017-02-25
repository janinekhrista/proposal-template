$(document).ready(function() {

  var headerHeight = $('header').height();

  $(window).scroll(function() {

    if ($(this).scrollTop() > (headerHeight-47)) {
      $('.main-nav').addClass('main-nav-scrolled');
    } else {
      $('.main-nav').removeClass('main-nav-scrolled');
    }

  });

});
