var $posterBtn = $('.poster-btn')
var $btnCloseModal = $('.btn-close-modal');
var $modal = $('.modal');

var ua = navigator.userAgent;
ua = ua.toString();
$('html').attr('id', ua);

$posterBtn.on('click', function () {
  $(this).next().addClass('js-open-modal');
  $('html').addClass('modal-open');
  e.preventDefault();
});

$btnCloseModal.on('click', function () {
  $modal.removeClass('js-open-modal');
  $('html').removeClass("modal-open");
});