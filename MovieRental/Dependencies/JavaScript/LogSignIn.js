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

    var account = document.getElementById("buttonAccount");
    account.style.background = "white";
    account.style.color = "black"

    var moviesButton = document.getElementById("moviesButton");
    moviesButton.style.background = "transparent";
    moviesButton.style.color = "white";

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
    account.style.color = "white"

    var moviesButton = document.getElementById("moviesButton");
    moviesButton.style.background = "white";
    moviesButton.style.color = "black";

    window.onscroll = function() {};
}