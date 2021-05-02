// CSS Loading....
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../css/index.css');
require('../css/timeline.css');

// Javascript Loading....
require('../../node_modules/bootstrap/js/dist/collapse');
window.$ = require('jquery');
const Typed = require('typed.js');
const Circles = require('./circle');

const selectors = {
  sun: '#float-theme-icon .fa-sun',
  moon: '#float-theme-icon .fa-moon',
  themeIconContainer: '#float-theme-icon',
  typed: '#role-typed',
  navItem: '#navbarToggler ul li',
  mainSection: '.main-section',
  softSkills: '.soft-skills',
  projectButton: '#projects .projects > button'
}

const colors = [
  ['#d32f2f', '#ff5252'],
  ['#c2185b', '#ff4081'],
  ['#7b1fa2', '#7b1fa2'],
  ['#512da8', '#7c4dff'],
  ['#00796b', '#64ffda'],
  ['#00838f', '#18ffff']
];

const skillCircles = [];

function setClassesForTheme(theme) {
  if (theme === 'theme-dark') {
    $(selectors.sun).removeClass('hide');
    $(selectors.moon).addClass('hide');
  } else {
    $(selectors.sun).addClass('hide');
    $(selectors.moon).removeClass('hide');
  }
}

function toggleThemeListener() {
  const theme = document.documentElement.className === 'theme-dark' ? 'theme-light' : 'theme-dark';
  document.documentElement.className = theme;
  localStorage.theme = theme;
  setClassesForTheme(theme);
}

function toggleSection() {
  $(selectors.navItem).removeClass('active');
  $(this).addClass('active');
  const dataId = $(this).attr('data-id');
  $(selectors.mainSection).removeClass('active');
  $(`.main-section#${dataId}`).addClass('active');  
  $('#navbarToggler').removeClass('show');
  skillCircles.forEach(c => {
    dataId === 'aboutme' ? c.update(100) : c.update(0)
  })
}

// Initialization.
$(function () {
  // preloader
  $('#preloader').delay(500).fadeOut('slow')

  // Theme setter
  document.documentElement.className = localStorage.theme || 'theme-dark';
  localStorage.theme = document.documentElement.className;
  $(selectors.themeIconContainer).on('click', toggleThemeListener);
  setClassesForTheme(localStorage.theme);

  // Nav item selector
  $(selectors.navItem).on('click', toggleSection);

  // Typed
  new Typed('#role-typed', {
    strings: ["A Web developer...", "I do React, Angular, Java...", "I love to work on fun projects..."],
    stringsElement: null,
    typeSpeed: 80,
    startDelay: 100,
    backSpeed: 40,
    backDelay: 350,
    loop: true,
    loopCount: 550,
    showCursor: true,
    cursorChar: "|",
    attr: null,
    contentType: "html",
  });

  // Soft skills
  $(selectors.softSkills).each(function (index) {
    skillCircles.push(Circles.create({
      id: $(this).attr('id'),
      radius: 85,
      value: 0,
      maxValue: 100,
      width: 12,
      text: $(this).attr('data-text'),
      colors: document.documentElement.className === 'theme-dark' ? ['#424242', colors[index][0]] : ['#C0C0C0', colors[index][1]],
      duration: 2000,
      wrpClass: 'progress-circle-wrap',
      textClass: 'progress-circle-text',
      valueStrokeClass: 'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke'
    }));
  });

  // Projects
  $(selectors.projectButton).on('click', function () {
    $('#projects .btn-group.projects button').removeClass('active');
    $('#projects .project-item').removeClass('active');
    const tabId = $(this).attr('data-id')
    $(this).addClass('active');
    $(`#${tabId}`).addClass('active')
  });
});
