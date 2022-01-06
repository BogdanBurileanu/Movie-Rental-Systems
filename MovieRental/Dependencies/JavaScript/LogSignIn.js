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

function yourAccount(pageType){
    var myNav = document.getElementById('navMenu');

    var accountButton = document.getElementById("accountButton");
    accountButton.style.display = "block";

    var movies = document.getElementById("moviesLayer");
    moviesLayer.style.filter = "blur(10px)";

    var yourAccountButton = document.getElementById("buttonAccount");
    var moviesTButton = document.getElementById("moviesButtonNav");

    if (pageType == "categories"){
        var categoryPopup = document.getElementById('categoryPopup');
        categoryPopup.style.display = "none";

        var categoryArrow = document.getElementById('category');
        categoryArrow.innerHTML = findCategoryURL() +  "<i class='fas fa-chevron-down' style='margin-left: 5px;'></i>"
    }

    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        yourAccountButton.style.background = "black";
        yourAccountButton.style.color = "white";

        moviesTButton.style.borderRadius = "8px";
        moviesTButton.style.borderColor = "black";
        moviesTButton.style.background = "transparent";
        moviesTButton.style.color = "black";
    } 
    else {
        yourAccountButton.style.background = "white";
        yourAccountButton.style.color = "black";
        moviesTButton.style.background = "transparent";
        moviesTButton.style.color = "white";

        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }

    disableScroll();
}

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll(pageType) {
    var accountButton = document.getElementById("accountButton");
    accountButton.style.display = "none";

    var movies = document.getElementById("moviesLayer");
    movies.style.filter = "blur(0px)";

    var account = document.getElementById("buttonAccount");
    account.style.background = "transparent";

    var moviesButton = document.getElementById("firstSwitch");

    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        account.style.color = "black";

        if (pageType == "categories"){
            moviesButton.style.background = "transparent";
            moviesButton.style.color = "black";
        }
        else{
            moviesButton.style.background = "black";
            moviesButton.style.color = "white";
        }
    }
    else{

        var myNav = document.getElementById('navMenu');

        account.style.color = "white";

        if (pageType == "categories"){
            moviesButton.style.background = "transparent";
            moviesButton.style.color = "white";
        }
        else{
            moviesButton.style.background = "white";
            moviesButton.style.color = "black";
        }

        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }

    window.onscroll = function() {};
}