function move() {
    var elem = document.getElementById("myBar");   
    var width = 0;
    var id = setInterval(frame, 45);
    function frame() {
        if (width == 100) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
        }
    }
}