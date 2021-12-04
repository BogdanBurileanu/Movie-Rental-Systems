var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var bars = document.getElementsById("myBar");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    bars[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";
  bars[slideIndex-1].style.display = "block"; 
  move(bars[i]);
  setTimeout(showSlides, 2000); 
}

function move(elem) {   
  var width = 0;
  var bars = 0
  var id = setInterval(frame, 76);
  function frame() {
      if (width == 100) {
      clearInterval(id);
      } else {
      width++; 
      elem.style.width = width + '%'; 
      }
  }
}