var $posterBtn = $('.poster-btn')
var $btnCloseModal = $('.btn-close-modal');
var $html = $('html');
var $body = $('body');
var $modal = $('.modal');

$posterBtn.on('click', function () {
  $(this).next().addClass('js-open-modal');
  $body.addClass("modal-open");
});

$btnCloseModal.on('click', function () {
  $modal.removeClass('js-open-modal');
  $body.removeClass("modal-open");
});

