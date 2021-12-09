function BckLogin()
{
    document.body.style.backgroundImage="url(../Dependencies/ImageAssets/slideshow1.png)";
    
}
function BckSignin()
{
    document.body.style.backgroundImage="url(../Dependencies/ImageAssets/slideshow2.png)";
    
}

function change() 
{
    document.getElementById('b1').innerText = "To access all the features,please sign in."
}

function change2() 
{
    document.getElementById('b1').innerHTML = "To access all the features,please log in."
}

function HomePg()
{
    window.location.href="../main.html"
}

function yourAccount(){
    var accountButton = document.getElementById("accountButton");
    accountButton.style.display = "block";

    var movies = document.getElementById("moviesLayer");
    moviesLayer.style.filter = "blur(10px)";

    var yourAccountButton = document.getElementById("buttonAccount");
    var moviesTButton = document.getElementById("moviesButton");

    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        yourAccountButton.style.background = "black";
        yourAccountButton.style.color = "white";

        moviesTButton.style.borderRadius = "8px";
        moviesTButton.style.borderColor = "black";
        moviesTButton.style.background = "transparent";
        moviesTButton.style.color = "black";
    } 
    else {
        yourAccountButton.style.background = "black";
        yourAccountButton.style.color = "white";

        moviesTButton.style.borderRadius = "8px";
        moviesTButton.style.borderColor = "black";
        moviesTButton.style.background = "transparent";
        moviesTButton.style.color = "black";
    }

    disableScroll();
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    var accountButton = document.getElementById("accountButton");
    accountButton.style.display = "none";

    var movies = document.getElementById("moviesLayer");
    moviesLayer.style.filter = "blur(0px)";

    var account = document.getElementById("buttonAccount");
    account.style.background = "transparent";

    var moviesButton = document.getElementById("moviesButton");

    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        account.style.color = "black";
        moviesButton.style.background = "black";
    moviesButton.style.color = "white";
    }
    else{
        account.style.color = "white";
        moviesButton.style.background = "white";
        moviesButton.style.color = "black";
    }

    window.onscroll = function() {};
}