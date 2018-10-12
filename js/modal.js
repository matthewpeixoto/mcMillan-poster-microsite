var $poster = $('.poster')
var $btnCloseModal = $('.btn-close-modal');
var $html = $('html');
var $body = $('body');
var $modal = $('.modal');

$poster.click(function () {
  var offset = $(document).scrollTop();
  var viewportHeight = $(window).height();
  $modal.css('top', (offset  + (viewportHeight/2)) - ($modal.outerHeight()/2));
  $modal.show();
  $html.add($body).css({
    overflow: 'hidden',
    position: 'relative'
  });
});

$btnCloseModal.click(function () {
  $modal.hide();
  $html.add($body).css({
    overflow: 'visable',
    position: 'static'
  });
})
