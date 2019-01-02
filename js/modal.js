var $posterBtn = $('.poster-btn')
var $btnCloseModal = $('.btn-close-modal');
var $modal = $('.modal');
var $modalVideo = $('#modal-video');

$posterBtn.on('click', function () {
  $(this).next().addClass('js-open-modal');
  $('html').addClass("modal-open");
  $(this).parent().find('#modal-video').trigger('play');
});

$btnCloseModal.on('click', function () {
  $modal.removeClass('js-open-modal');
  $('html').removeClass("modal-open");
});