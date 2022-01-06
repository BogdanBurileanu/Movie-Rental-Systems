var myNav = document.getElementById('navMenu');

var accountButton = document.getElementById('buttonAccount');
var delimitator = document.getElementById('delimitator');


window.onscroll = function () { 
  "use strict";
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
      myNav.classList.add("nav-colored");
      myNav.classList.remove("nav-transparent");

      delimitator.style.display = "none";
      accountButton.style.color = "white";
      accountButton.style.borderColor = "white";
  } 
  else {
      myNav.classList.add("nav-transparent");
      myNav.classList.remove("nav-colored");

      delimitator.style.display = "block";
      accountButton.style.color = "white";
      accountButton.style.borderColor = "white";
  }
};
