var myNav = document.getElementById('navMenu');

var moviesButton = document.getElementById('moviesButtonNav');
var tvShowsButton = document.getElementById('tvshowsButton');
var accountButtonT = document.getElementById('buttonAccount');
var delimitator = document.getElementById('delimitator');
var categoryButton = document.getElementById('category');
var goBackButton = document.getElementById('goBack');

window.onscroll = function () { 
  "use strict";
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
      myNav.classList.add("nav-colored");
      myNav.classList.remove("nav-transparent");

      delimitator.style.display = "none";
      moviesButton.style.color = "black";
      categoryButton.style.backgroundColor = "black";
      categoryButton.style.color = "white";
      tvShowsButton.style.color = "black";
      accountButtonT.style.color = "black";
      accountButtonT.style.borderColor = "black";
      goBackButton.style.color="black";
  } 
  else {
      myNav.classList.add("nav-transparent");
      myNav.classList.remove("nav-colored");

      delimitator.style.display = "block";
      moviesButton.style.color = "white";
      categoryButton.style.backgroundColor = "white";
      categoryButton.style.color = "black";
      tvShowsButton.style.color = "white";
      accountButtonT.style.color = "white";
      accountButtonT.style.borderColor = "white";
      goBackButton.style.color = "white";
  }
};