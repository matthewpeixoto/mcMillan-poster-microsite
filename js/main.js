var $scrollText = $('.scroll-text');
var $mScrollHorizontal = $('.m-scroll-horizontal');
var $win = $(window);
var $toggleMenu = $('#toggle-menu');
var $body = $('.body');

// Header

$(document).ready(function(){

  $toggleMenu.click(function () {
    $('.menu-container').slideToggle(400);
    $('.menu-item').toggleClass('js-menu-item-active');
    $('.hamburger').toggleClass('is-active');
    $('.logo').toggleClass('js-logo-active');
    $html.toggleClass('overflow-hidden');
    $html.toggleClass('relative');
    $body.toggleClass('overflow-hidden');
    $body.toggleClass('relative');
  });
});



// Posters

$('.js-animate').each(function(){

  var self = $(this);

  $(this).waypoint(function () {
    self.addClass('js-animated');
  }, {offset: '100%'});

});

// That's all folks

$('.thats-all-folks').each(function(){

  var self = $(this);

  $(this).waypoint(function () {
    self.addClass('js-thats-all-folks-animated');
  }, {offset: '90%'});

});

// Scroll text

$win.on('scroll', function () {
  var top = $win.scrollTop() / -1;
  $scrollText.css('transform', 'translate(' + top + 'px, -50%)');
});

// Dyonisius

jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 736) {
      $('.scroll-section').addClass('s-scroll-vertical'),
      $('.scroll-section').removeClass('m-scroll-horizontal');
    } else if (ww >= 736) {
      $('.scroll-section').addClass('m-scroll-horizontal'),
      $('.scroll-section').removeClass('s-scroll-vertical');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

$win.on('scroll', function () {
  var top = $win.scrollTop() / -1;
  $('.m-scroll-horizontal').css('transform', 'translateX(' + top + 'px)');
});