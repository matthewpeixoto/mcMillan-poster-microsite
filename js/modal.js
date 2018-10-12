var $poster = $('.poster')
var $btnCloseModal = $('.btn-close-modal');
var $html = $('html');
var $body = $('body');
var $modal = $('.modal');
const targetElement = document.querySelector('.modal');

$poster.click(function () {
  var offset = $(document).scrollTop();
  var viewportHeight = $(window).height();
  $modal.css('top', (offset  + (viewportHeight/2)) - ($modal.outerHeight()/2));
  $modal.show();
  $html.add($body).css({
    overflow: 'hidden',
    position: 'relative'
  });
  bodyScrollLock.disableBodyScroll(targetElement);
});

$btnCloseModal.click(function () {
  $modal.hide();
  $html.add($body).css({
    overflow: '',
    position: ''
  });
  bodyScrollLock.enableBodyScroll(targetElement);
})
