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

// Pivot

pivot.init({
  selector: ".poster",
  invert: true,
  shine: true,
  scale: true,
  sensitivity: 50,
  hoverClass: "poster-hover"
});

pivot.init({
  selector: ".modal-img-wrap",
  invert: true,
  sensitivity: 250,
  shine: true
});