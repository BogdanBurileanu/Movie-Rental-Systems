var slideIndex = 1;
var time = 20000;
var moveTime = 100;

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  var bars = document.getElementsByClassName('progressBar');
  var introVideo = document.getElementsByClassName('introVideo');
  var introImage = document.getElementsByClassName('introImage');

  for (var i = 0; i < slides.length - 4; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex > slides.length - 4) {
    slideIndex = 1;
    console.log("Enters here!");
    for (var i = 0; i < slides.length - 4 ; i++) {
      introVideo[i].style.display = "none";
      introImage[i].style.display = "block";
    }

    time = 10000;
    moveTime = 50;
  }

  slides[slideIndex-1].style.display = "block";
  bars[slideIndex-1].style.display = "block";
  moveProgressBar(bars[slideIndex-1], moveTime);

  var data = introData[slideIndex-2];
  console.log("Data index:" + (slideIndex-2));
  data.changeIntroData();
  setTimeout(showSlides, time); // Change image every 20 seconds
}

function moveProgressBar(elem, moveTime) {
  var width = 0;
  var id = setInterval(frame, moveTime);
  function frame() {
    if (width >= 200) {
      elem.style.display = "none";
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + 'px';
    }
  }
  slideIndex++;
  console.log("Slide index: " + slideIndex);
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


