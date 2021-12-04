window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navmenu").style.backgroundColor = "white";
  } else {
    document.getElementById("navmenu").style.backgroundColor = "transparent";
  }
}