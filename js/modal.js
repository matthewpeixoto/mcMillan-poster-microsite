var $posterBtn = $('.poster-btn')
var $btnCloseModal = $('.btn-close-modal');
var $html = $('html');
var $body = $('body');
var $modal = $('.modal');

$posterBtn.on('click', function () {
  $(this).next().removeClass('hide');
  $html.add($body).css({
    overflow: 'hidden',
    position: 'relative'
  });
});

$btnCloseModal.on('click', function () {
  $modal.addClass('hide');
  $html.add($body).css({
    overflow: '',
    position: ''
  });
});

