class movieTV{
    constructor(trailer, posterImage, title, shortDescription, about, description){
        this.trailer = trailer;
        this.posterImage = posterImage;
        this.title = title;
        this.shortDescription = shortDescription;
        this.about = about;
        this.description = description;
    }

    changeMovieTVData(){
        document.getElementById('movieTVTrailer').src = this.trailer;
        document.getElementById('movieTVPoster').style.backgroundImage = this.posterImage;
        document.getElementById('movieTVTitle').innerHTML = this.title;
        document.getElementById('movieTVShortDescription').innerHTML = this.shortDescription
        document.getElementById('movieTVAbout').innerHTML = this.shortAbout;
        document.getElementById('movieTVDescription').innerHTML = this.description
    }
}

