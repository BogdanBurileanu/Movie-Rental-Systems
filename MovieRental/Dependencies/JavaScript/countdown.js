function timedText() {
    var x = document.getElementById("txt");
    setTimeout(function(){ x.innerHTML="&#238n <b>5</b> secunde..." }, 1000);
    setTimeout(function(){ x.innerHTML="&#238n <b>4</b> secunde..." }, 2000);
    setTimeout(function(){ x.innerHTML="&#238n <b>3</b> secunde..." }, 3000);
    setTimeout(function(){ x.innerHTML="&#238n <b>2</b> secunde..." }, 4000);
    setTimeout(function(){ x.innerHTML="<b>&#238ntr-o secund&#259</b>..." }, 5000); 
  }
  function hideAlert(){
    setTimeout(function(){document.getElementById('alert').style.display='none';},5200);
}