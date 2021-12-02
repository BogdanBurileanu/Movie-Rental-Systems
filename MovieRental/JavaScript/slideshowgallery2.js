var slide2Index = 1;
showSlides2(slide2Index);

function plusSlides2(m) {
  showSlides2(slide2Index += m);
}

function currentSlide2(m) {
  showSlides2(slide2Index = m);
}

function showSlides2(m) {
  var j;
  var slides2 = document.getElementsByClassName("mySlides2");
  if (m > slides2.length) {slide2Index = 1}
  if (m < 1) {slide2Index = slides2.length}
  for (j = 0; j < slides2.length; j++) {
      slides2[j].style.display = "none";
  }
  slides2[slide2Index-1].style.display = "block";
}