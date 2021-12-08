function switchToTVShows(){
    var movies = document.getElementById("movies");
    var tvshows = document.getElementById("tvshows");

    movies.style.display = "none";
    tvshows.style.display = "block";
}

function switchToMovies(){
    var movies = document.getElementById("movies");
    var tvshows = document.getElementById("tvshows");

    movies.style.display = "block";
    tvshows.style.display = "none";
}