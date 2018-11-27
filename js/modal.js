var $posterBtn = $('.poster-btn')
var $btnCloseModal = $('.btn-close-modal');
var $html = $('html');
var $body = $('body');
var $modal = $('.modal');

$posterBtn.on('click', function () {
  $(this).next().addClass('js-open-modal');
  $html.add($body).css({
    overflow: 'hidden',
    position: 'relative'
  });
});

$btnCloseModal.on('click', function () {
  $modal.removeClass('js-open-modal');
  $html.add($body).css({
    overflow: '',
    position: ''
  });
});

