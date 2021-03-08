// CSS Loading....
require('../../node_modules/bootstrap/dist/css/bootstrap-reboot.css');
require('../../node_modules/bootstrap/dist/css/bootstrap-grid.css');
require('../css/main.css');
require('../css/nav.css');

// Javascript Loading....
window.$ = require('jquery');
const Masonry = require('masonry-layout');
const Typed = require('typed.js');

// Preloader
(function loader() {
  $('#preloader').delay(500).fadeOut('slow')
}());

$(function () {
  // Masonry
  new Masonry(document.querySelector('.masonary-grid'), {
    itemSelector: '.masonary-grid-item'
  })
  // Typed
  new Typed('#role-typed', {
    strings: ["Web Development"],
    stringsElement: null,
    typeSpeed: 70,
    startDelay: 150,
    backSpeed: 40,
    backDelay: 350,
    loop: true,
    loopCount: 550,
    showCursor: true,
    cursorChar: "|",
    attr: null,
    contentType: "html",
  })
})
// Clicking on bars icon to oopen menu
$(".menu-toggle .fa-bars").on("click", function (e) {
  $(".nav-container").css('display', 'block');
  $(this).removeClass('show');
  $(this).removeClass('hide');
  $(this).addClass('hide');
  $(".menu-toggle .fa-times").removeClass('hide');
  $(".menu-toggle .fa-times").removeClass('show');
  $(".menu-toggle .fa-times").addClass('show');
});

// Click on close button to close the menu
$(".menu-toggle .fa-times").on("click", function (e) {
  $(".nav-container").css('display', 'none');
  $(this).removeClass('show');
  $(this).removeClass('hide');
  $(this).addClass('hide');
  $(".menu-toggle .fa-bars").removeClass('hide');
  $(".menu-toggle .fa-bars").removeClass('show');
  $(".menu-toggle .fa-bars").addClass('show');
})

// reset the styles and classes once the window resized to > 578.
$(window).on('resize', function () {
  const win = $(this);
  if (win.width() > 578) {
    $(".nav-container").css('display', '');
    $(".menu-toggle .fa-times").removeClass('show');
    $(".menu-toggle .fa-times").removeClass('hide');
    $(".menu-toggle .fa-times").addClass('hide');
    $(".menu-toggle .fa-bars").removeClass('hide');
    $(".menu-toggle .fa-bars").removeClass('show');
    $(".menu-toggle .fa-bars").addClass('show');
  }
})

// navbar
$(".navbar .navbar-item").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    var tabNum = $(this).index();
    var nthChild = tabNum + 2;
    $(".navbar .navbar-item").removeClass("active");
    $(this).addClass("active");
    $("#main > section.active").removeClass("active");
    $(`#main > section:nth-child(${nthChild})`).addClass("active");
  }
  // close the nav, when clicked on item
  if (window.innerWidth < 578) {
    $(".nav-container").css('display', 'none');
    $(".menu-toggle .fa-times").removeClass('show');
    $(".menu-toggle .fa-times").removeClass('hide');
    $(".menu-toggle .fa-times").addClass('hide');
    $(".menu-toggle .fa-bars").removeClass('hide');
    $(".menu-toggle .fa-bars").removeClass('show');
    $(".menu-toggle .fa-bars").addClass('show');
  }
  e.preventDefault();
});
