var $toggleMenu = $('#toggle-menu');
var $body = $('.body');

$(document).ready(function(){

  $toggleMenu.click(function () {
    $('.menu-container').slideToggle(550);
    $('.menu-item').toggleClass('js-menu-item-active');
    $('.hamburger').toggleClass('is-active');
    $('.logo').toggleClass('js-logo-active');
    $html.toggleClass('overflow-hidden');
    $body.toggleClass('overflow-hidden');
  });

});

