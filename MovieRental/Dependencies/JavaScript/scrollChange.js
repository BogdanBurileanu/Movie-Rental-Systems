function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("navmenu").style.background = "rgba(255, 255, 255, 0.69)";
      document.getElementById("navmenu").style.top = "0px";
      document.getElementById("navmenu").style.height = "100px";

    } else {
        document.getElementById("navmenu").style.background = "transparent";
        document.getElementById("navmenu").style.top = "35px";
        document.getElementById("navmenu").style.height = "80px";
    }
  }