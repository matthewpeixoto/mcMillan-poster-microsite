var $btnReveal = $('.btn-reveal');
var $btnRevealBlock = $('.btn-reveal-block');

$btnReveal.mouseenter(function () {
  $(this).find($btnRevealBlock).removeClass('js-block-out');
  $(this).find($btnRevealBlock).addClass('js-block-enter');
});

$btnReveal.mouseleave(function () {
  $(this).find($btnRevealBlock).removeClass('js-block-enter');
  $(this).find($btnRevealBlock).addClass('js-block-out');
});