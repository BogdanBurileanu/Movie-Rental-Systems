class Intro{
  constructor(introTitle, introGenre, introDirector, introOther){
    this.introTitle = introTitle;
    this.introGenre = introGenre;
    this.introDirector = introDirector;
    this.introOther = introOther;
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


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var bars = document.getElementsByClassName('progressBar');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";
  bars[slideIndex-1].style.display = "block";
  moveProgressBar(bars[slideIndex-1]);

  var data = introData[slideIndex-1];
  data.changeIntroData();
  
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

function moveProgressBar(elem) {
  var width = 1;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 200) {
      elem.style.display = "none";
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + 'px';
    }
  }
}

function moveDelimitator() {
  var elem = document.getElementById("delimitator");   
  var width = 0;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}


