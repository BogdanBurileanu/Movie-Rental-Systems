var switchCounter = 0;
function switchSlider(){

    var movies = document.getElementById("moviesLayer");
    var tvshows = document.getElementById("tvshowsLayer");
    var categories = document.getElementById('categoriesLayer')

    var firstSwitch = document.getElementById('firstSwitch');
    var secondSwitch = document.getElementById('secondSwitch');
    var thirdSwitch = document.getElementById('thirdSwitch');

    var wrapper = document.getElementById('wrapper');
    var mainBackground = document.getElementById('mainBackground');


    if (switchCounter == 1){
        movies.style.display = "block";
        tvshows.style.display = "none";
        categories.style.display = "none";

        firstSwitch.style.color = "black";
        secondSwitch.style.color = "white";
        thirdSwitch.style.display = "none";

        wrapper.style.marginLeft = 35 + "%";
        mainBackground.style.backgroundColor = "black";
    }
    
    if (switchCounter == 2){
        movies.style.display = "none";
        tvshows.style.display = "block";
        categories.style.display = "none";

        firstSwitch.style.color = "white";
        secondSwitch.style.color = "black";
        thirdSwitch.style.display = "none";

        mainBackground.style.backgroundColor = "black";

    } 
    
    if (switchCounter == 3){
        movies.style.display = "none";
        tvshows.style.display = "none";
        categories.style.display = "block";

        firstSwitch.style.color = "white";
        secondSwitch.style.color = "white";
        thirdSwitch.style.display = "block";
        thirdSwitch.style.color = "black";
    }
}

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