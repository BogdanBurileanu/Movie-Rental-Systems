var category = document.getElementById('categoryPopup');
var categoryArrow = document.getElementById('thirdSwitch');
var accountButton = document.getElementById("accountButton");

var currentCategory = "";

function showCategories(){
    category.style.display = "block";
    categoryArrow.innerHTML = currentCategory + " <i class='fas fa-chevron-up' style='margin-left: 5px;'></i>";
    accountButton.style.display = "none";
}

function hideCategories(){
    category.style.display = "none";
    categoryArrow.innerHTML = currentCategory + " <i class='fas fa-chevron-down' style='margin-left: 5px;'></i>";

}

class Category{
    constructor(categoryName, movies, upcomingMovies, backgroundColor){
        this.categoryName = categoryName;
        this.introPhoto = '/Users/milovanarsul/Documents/Movie-Rental-Systems/MovieRental/Dependencies/ImageAssets/Categories_Main/' + this.categoryName + ".jpeg";
        this.movies = movies;
        this.upcomingMovies = upcomingMovies;
        this.backgroundColor = "#" + backgroundColor;
    }
}

let categories = [
    new Category('Action', "Movie","Upcoming Movie", "0D141C"),
    new Category('Adventure', "Movie","Upcoming Movie", "23140F"),
    new Category('Animation', "Movie","Upcoming Movie", "572E3D"),
    new Category('Comedy', "Movie","Upcoming Movie", "1F2338"),
    new Category('Crime', "Movie","Upcoming Movie", "11393F"),
    new Category('Documentary', "Movie","Upcoming Movie", "72756D"),
    new Category('Drama', "Movie","Upcoming Movie", "083965"),
    new Category('Family', "Movie","Upcoming Movie", "4B2A01"),
    new Category('Fantasy', "Movie","Upcoming Movie", "796E67"),
    new Category('History', "Movie","Upcoming Movie", "8A9F90"),
    new Category('Horror', "Movie","Upcoming Movie", "5C010A"),
    new Category('Music', "Movie","Upcoming Movie", "06293D"),
    new Category('Mystery', "Movie","Upcoming Movie", "1A2828"),
    new Category('Romance', "Movie","Upcoming Movie", "683829"),
    new Category('SF',"Upcoming Movie", "560100"),
    new Category('Thriller',"Upcoming Movie", "15282C")
] 

var categoryTitle = document.getElementById('categoryTitle');
var categoryNavButton = document.getElementById('thirdSwitch');
var categoryImage = document.getElementById('categoryImage');
var categoryBackground = document.getElementById('mainBackground');
var categoryURL = window.location.href;

function goBack(){
    var goBackButton = document.getElementById('goBack');
    goBackButton.style.backgroundColor = "transparent";


}

function findCategoryInArray(categoryName){
    for (let index = 0; index < categories.length; index++){
        if (categories[index].categoryName == categoryName){
            return categories[index];
        }
    }
}

function getCategory(){
    return show
}

function updateCategory(category){
    var categoryObject = findCategoryInArray(category);

    categoryTitle.innerHTML = categoryObject.categoryName;
    categoryNavButton.innerHTML = categoryObject.categoryName + "<i class='fas fa-chevron-down' style='margin-left: 5px;''>"
    categoryImage.src = categoryObject.introPhoto;
    categoryBackground.style.backgroundColor = categoryObject.backgroundColor;

}

function showCategory(category){
    switchCounter = 3;

    switchSlider();
    document.getElementById('third_toggle').checked = true;
    document.getElementById('wrapper').style.marginLeft = 30 + "%";

    updateCategory(category);
    currentCategory = category;

}