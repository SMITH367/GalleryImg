"use strict";

var navToogle = document.querySelector(".toogle-init");
var navMenu = document.querySelector(".nav-menu");
var sidebar = document.querySelector(".toogle");
navToogle.addEventListener("click", function () {
  navMenu.classList.toggle("nav-phone-visible");
  sidebar.classList.toggle("hidden");
});