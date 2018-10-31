var $toggleMenu = $('#toggle-menu');
var $body = $('.body');

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

