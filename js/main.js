var $scrollText = $('.scroll-text');
var $win = $(window);

// Posters

$('.js-animate').each(function(){

  var self = $(this);

  $(this).waypoint(function () {
    self.addClass('js-animated');
  }, {offset: '100%'});

});

// That's all folks

$('.thats-all-folks').each(function(){

  var self = $(this);

  $(this).waypoint(function () {
    self.addClass('js-thats-all-folks-animated');
  }, {offset: '90%'});

});

// Scroll text

$win.on('scroll', function () {
  var top = $win.scrollTop() / -3 + 1000;
  $scrollText.css('transform', 'translateX(' + top + 'px)');
});