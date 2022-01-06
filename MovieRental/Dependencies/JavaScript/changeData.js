var switchCounter = 0;
function switchSlider(){

    var movies = document.getElementById("moviesLayer");
    var tvshows = document.getElementById("tvshowsLayer");
    var categories = document.getElementById('categoriesLayer')

    var firstSwitch = document.getElementById('firstSwitch');
    var secondSwitch = document.getElementById('secondSwitch');
    var thirdSwitch = document.getElementById('thirdSwitch');

    var wrapper = document.getElementById('wrapper');


    if (switchCounter == 1){
        movies.style.display = "block";
        tvshows.style.display = "none";
        categories.style.display = "none";

        firstSwitch.style.color = "black";
        secondSwitch.style.color = "white";
        thirdSwitch.style.display = "none";

        wrapper.style.marginLeft = 35 + "%";
    }
    
    if (switchCounter == 2){
        movies.style.display = "none";
        tvshows.style.display = "block";
        categories.style.display = "none";

        firstSwitch.style.color = "white";
        secondSwitch.style.color = "black";
        thirdSwitch.style.display = "none";
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