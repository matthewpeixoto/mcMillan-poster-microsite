$('.js-animate').each(function(){

  var self = $(this);

  $(this).waypoint(function () {
    self.addClass('js-animated');
  }, {offset: '100%'});

});

$('.thats-all-folks').each(function(){

  var self = $(this);

  $(this).waypoint(function () {
    self.addClass('js-thats-all-folks-animated');
  }, {offset: '90%'});

});
