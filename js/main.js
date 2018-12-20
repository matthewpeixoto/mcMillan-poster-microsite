var $scrollText = $('.scroll-text');
var $mScrollHorizontal = $('.m-scroll-horizontal');
var $win = $(window);
var $toggleMenu = $('#toggle-menu');
var $body = $('body');
var $html = $('html');
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

// Header

$(document).ready(function(){

  $toggleMenu.click(function () {
    $('.menu-container').slideToggle(400);
    $('.menu-item').toggleClass('js-menu-item-active');
    $('.hamburger').toggleClass('is-active');
    $('.logo').toggleClass('js-logo-active');
    $('html').toggleClass('scroll-lock');
    $('body').toggleClass('scroll-lock');
    $('.menu-container').toggleClass('scroll-lock');
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

// Pivot

if(!isMobile) {
  pivot.init({
    selector: ".poster",
    invert: true,
    shine: true,
    scale: true,
    sensitivity: 50
  });
}

if(!isMobile) {
  pivot.init({
    selector: ".modal-img-wrap",
    invert: true,
    sensitivity: 150
  });
}