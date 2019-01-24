$(document).ready(function() {
  var $docEl = $('html, body'),
    $wrap = $('.content'),
    scrollTop;

  $('.poster-btn').click(function(e) {
    overlayOpen();
    e.preventDefault();
  });

  $('.btn-close-modal').click(function(e) {
    overlayClose();
    e.preventDefault();
  });
  
  var overlayClose = function() {
    $.unlockBody();
    $('body').removeClass('overlay-open');
  }
  var overlayOpen = function() {
    $('body').addClass('overlay-open');
    $.lockBody();
  }

  $.lockBody = function() {
    if(window.pageYOffset) {
      scrollTop = window.pageYOffset;
      
      $wrap.css({
        top: - (scrollTop)
      });
    }

    $docEl.css({
      height: "100%",
      overflow: "hidden"
    });
  }

  $.unlockBody = function() {
    $docEl.css({
      height: "",
      overflow: ""
    });

    $wrap.css({
      top: ''
    });

    window.scrollTo(0, scrollTop);
    window.setTimeout(function () {
      scrollTop = null;
    }, 0);

  }
});
