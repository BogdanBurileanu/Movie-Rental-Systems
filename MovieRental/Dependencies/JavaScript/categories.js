var category = document.getElementById('categoryPopup');
var categoryArrow = document.getElementById('category');
var accountButton = document.getElementById("accountButton");

function showCategories(){
    category.style.display = "block";
    categoryArrow.innerHTML = "Documentary <i class='fas fa-chevron-up' style='margin-left: 5px;'></i>";
    accountButton.style.display = "none";
}

function hideCategories(){
    category.style.display = "none";
    categoryArrow.innerHTML = "Documentary <i class='fas fa-chevron-down' style='margin-left: 5px;'></i>";

}

class Category{
    constructor(url, categoryName, movies, upcomingMovies, backgroundColor){
        this.url = url;
        this.categoryName = categoryName;
        this.introPhoto = 'MovieRental/Dependencies/ImageAssets/Categories_Main/' + this.categoryName + ".jpeg";
        this.movies = movies;
        this.upcomingMovies = upcomingMovies;
        this.backgroundColor = backgroundColor;
    }
}

let categories = [
    new Category('Movie-Rental-Systems/MovieRental/category.html?action','action', "Movie","Upcoming Movie", "Black"),
    new Category('Movie-Rental-Systems/MovieRental/category.html?adventure','adventure', "Movie","Upcoming Movie", "Black"),
    new Category('Movie-Rental-Systems/MovieRental/category.html?animation','animation', "Movie","Upcoming Movie", "Black"),
    new Category('Movie-Rental-Systems/MovieRental/category.html?comedy','comedy', "Movie","Upcoming Movie", "Black"),
    new Category('Movie-Rental-Systems/MovieRental/category.html?crime','crime', "Movie","Upcoming Movie", "Black"),
    new Category('Movie-Rental-Systems/MovieRental/category.html?documentary','documentary', "Movie","Upcoming Movie", "Black"),
    new Category('Movie-Rental-Systems/MovieRental/category.html?drama','drama', "Movie","Upcoming Movie", "Black"),
    new Category('Movie-Rental-Systems/MovieRental/category.html?family','fantisy', "Movie","Upcoming Movie", "Black"),
    new Category('Movie-Rental-Systems/MovieRental/category.html?history','history', "Movie","Upcoming Movie", "Black"),
    new Category('Movie-Rental-Systems/MovieRental/category.html?horror','horror', "Movie","Upcoming Movie", "Black"),
    new Category('Movie-Rental-Systems/MovieRental/category.html?music','music', "Movie","Upcoming Movie", "Black"),
    new Category('Movie-Rental-Systems/MovieRental/category.html?mystery','mystery', "Movie","Upcoming Movie", "Black"),
    new Category('Movie-Rental-Systems/MovieRental/category.html?romance','romance', "Movie","Upcoming Movie", "Black"),
    new Category('Movie-Rental-Systems/MovieRental/category.html?sf','sf', "Movie","Upcoming Movie", "Black"),
    new Category('Movie-Rental-Systems/MovieRental/category.html?thriller','thriller', "Movie","Upcoming Movie", "Black")
]  


var currentURL = window.location.href;
console.log(currentURL.includes("action"));