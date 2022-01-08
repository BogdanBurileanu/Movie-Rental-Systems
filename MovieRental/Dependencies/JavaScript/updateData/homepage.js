class Intro{
    constructor(introTitle, introGenre, introDirector, introOther){
      this.introTitle = introTitle;
      this.introGenre = introGenre;
      this.introDirector = introDirector;
      this.introOther = introOther;
      //this.introVideo = introVideo;
      //this.introImage = introImage;
    }
  
    changeIntroData(){
    document.getElementById('introTitle').innerHTML = this.introTitle;
    document.getElementById('introGenre').innerHTML = "Genre: " + this.introGenre;
    document.getElementById('introDirector').innerHTML = "Director: " + this.introDirector;
    document.getElementById('introOther').innerHTML = this.introOther;
    document.getElementById('introLink'); 
    }
}

var introData = [new Intro("Blade Runner 2049","Mystery, Thriller, Science Fiction","Dennis Villaneouve", "2017, 2h 44m"),
                    new Intro("Paris, Texas","Drama","Wim Wendelrs", "1984"),
                    new Intro("Sicario","Action, Crime, Drama, Mystery, Thriller","Dennis Villaneuve", "2015"),
                    new Intro("Hell or High Water", "Crime, Drama, Thriller, Western", "2016")]

var introSuggestionsArray = [];

function introSuggestions(introImage){ //takes an array as parameter, lenght of 4
    var introImageSuggestion = document.getElementsByClassName('introImageSuggestion');

    for (var i=0; i< introImageSuggestion.length; i++){
        introImageSuggestion[i].src = introImage[i];
    }
}

function introSuggestionsPressed(suggestionIndex){ //called when clicked on intro suggestions
    var content = introSuggestionsArray[suggestionIndex];
    content.changeMovieData();
    contentLayer();
}

function watchNowButtonMainPressed(){
    var content = introSuggestionsArray[slideIndex-1];
    content.changeMovieData();
    contentLayer();
}

class newReleases{
    constructor(releaseTitle, releaseImage){
        this.releaseTitle = releaseTitle;
        this.releaseImage = releaseImage;
    }

    changeReleaseData(){
        var releaseImage = document.getElementsByClassName('releaseRectangle');
        var releaseTitle = document.getElementsByClassName('releaseRectangleDetails');

        for (var i=0; i< releaseImage.length; i++){
            releaseImage.src = this.releaseImage
            releaseTitle.innerHTML = this.releaseTitle
        }
    }
}

var newReleasesArray = []; 
function newReleasesPressed(newReleasesIndex){
    var content = newReleasesArray[newReleasesIndex];
    content.changeMovieData();
    contentLayer();
}

class hotRightNow{
    constructor(hotRightNowTitle, hotRightNowImage){
        this.hotRightNowTitle = hotRightNowTitle;
        this.hotRightNowImage = hotRightNowImage;
    }

    changeHotRightNowData(){
        var hotRightNowImage = document.getElementsByClassName('hotRightNowImage');
        var hotRightNowTitle = document.getElementsByClassName('hotRightNowText');

        for (var i=0; i< releaseImage.length; i++){
            hotRightNowImage.src = this.hotRightNowImage;
            hotRightNowTitle.innerHTML = this.hotRightNowTitle
        }
    }

}

var hotRightNowArray = [];
function hotRightNowPressed(hotRightNowIndex){
    var content = hotRightNowArray[hotRightNowIndex];
    content.changeMovieData();
    contentLayer();
}

