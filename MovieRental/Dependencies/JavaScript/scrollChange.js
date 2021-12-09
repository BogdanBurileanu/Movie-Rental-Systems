var myNav = document.getElementById('navMenu');

var moviesButton = document.getElementById('moviesButton');
var tvShowsButton = document.getElementById('tvshowsButton');
var accountButton = document.getElementById('buttonAccount');
var delimitator = document.getElementById('delimitator');


window.onscroll = function () { 
  "use strict";
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
      myNav.classList.add("nav-colored");
      myNav.classList.remove("nav-transparent");

      delimitator.style.display = "none";
      moviesButton.style.backgroundColor = "black";
      moviesButton.style.color = "white";
      tvShowsButton.style.color = "black";
      accountButton.style.color = "black";
      accountButton.style.borderColor = "black";
  } 
  else {
      myNav.classList.add("nav-transparent");
      myNav.classList.remove("nav-colored");

      delimitator.style.display = "block";
      moviesButton.style.backgroundColor = "white";
      moviesButton.style.color = "black";
      tvShowsButton.style.color = "white";
      accountButton.style.color = "white";
      accountButton.style.borderColor = "white";
  }
};
