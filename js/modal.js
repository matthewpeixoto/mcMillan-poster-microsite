var $posterBtn = $('.poster-btn')
var $btnCloseModal = $('.btn-close-modal');
var $modal = $('.modal');

$posterBtn.on('click', function () {
  $(this).next().addClass('js-open-modal');
  $('html').addClass("modal-open");
});

$btnCloseModal.on('click', function () {
  $modal.removeClass('js-open-modal');
  $('html').removeClass("modal-open");
});