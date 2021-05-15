"use strict";

//side bar
var toogle = document.querySelector(".toogle");
toogle.addEventListener("click", function () {
  document.getElementById("side-bar").classList.toggle("active");
});