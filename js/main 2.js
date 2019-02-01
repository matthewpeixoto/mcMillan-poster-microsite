var $scrollText = $('.scroll-text');
var $mScrollHorizontal = $('.m-scroll-horizontal');
var $win = $(window);
var $toggleMenu = $('#toggle-menu');
var $body = $('body');
var $html = $('html');
var $posterBtn = $('.poster-btn')
var $btnCloseModal = $('.btn-close-modal');
var $modal = $('.modal');
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

// Header

$(document).ready(function(){

  $toggleMenu.click(function () {
    $('.menu-container').slideToggle(400);
    $('.menu-item').toggleClass('js-menu-item-active');
    $('.hamburger').toggleClass('is-active');
    $('.logo').toggleClass('js-logo-active');
    $('html').toggleClass('scroll-lock');
    $('body').toggleClass('scroll-lock');
    $('.menu-container').toggleClass('scroll-lock');
  });
});

// Posters

$('.js-animate').each(function(){

  var self = $(this);

  $(this).waypoint(function (direction) {
    if (direction == 'down') {
      self.addClass('js-animated');
    } else {
      self.removeClass('js-animated');
    }
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
  var top = $win.scrollTop() / -1;
  $scrollText.css('transform', 'translate(' + top + 'px, -50%)');
});

// Pivot

if(!isMobile) {
  pivot.init({
    selector: ".poster",
    invert: true,
    shine: true,
    scale: true,
    sensitivity: 50
  });
}

if(!isMobile) {
  pivot.init({
    selector: ".modal-img-wrap",
    invert: true,
    sensitivity: 150
  });
}

// Progress

$(function() {
  var $progress = $('#progress');
  $(document).ajaxStart(function() {
    //only add progress bar if not added yet.
    if ($progress.length === 0) {
      $progress = $('<div><dt/><dd/></div>').attr('id', 'progress');
      $("body").append($progress);
    }
    $progress.width((50 + Math.random() * 30) + "%");
  });

  $(document).ajaxComplete(function() {
    //End loading animation
    $progress.width("100%").delay(200).fadeOut(400, function() {
      $progress.width("0%").delay(200).show();
    });
  });

  $.getJSON('http://jsonip.com');
});

// Modal

var $posterBtn = $('.poster-btn')
var $btnCloseModal = $('.btn-close-modal');
var $modal = $('.modal');

$posterBtn.on('click', function () {
  $('body').addClass('modal-open');
  $(this).next().addClass('js-open-modal');
  // $('html,body').addClass("modal-open");
  if(!isMobile) {
    $(this).parent().find('#modal-video').trigger('play');
  }
});

$btnCloseModal.on('click', function () {
  $modal.removeClass('js-open-modal');
  // $('html,body').removeClass("modal-open");
});

// Intro

$('.intro').each(function(){

  var self = $(this);

  $(this).waypoint(function () {
    self.addClass('js-intro-animated');
  }, {offset: '90%'});

});

$('.indicator-inner').each(function(){

  var self = $(this);

  $(this).waypoint(function () {
    self.toggleClass('js-indicator-hide');
  }, {offset: '75%'});

});

// Smooth Scroll

$('.indicator-container').localScroll();


