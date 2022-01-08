function contentLayer() {
    var movieImage = document.getElementById('movieTVImage');
    movieImage.style.display = "none";

    var modal = document.getElementById("myModal");

    window.scrollTo(0, 0);
    modal.style.display = "block";

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

    var contentUnderlayer = document.getElementById('contentUnderlayer');
    contentUnderlayer.style.filter = "blur(10000px)";

    moveDelimitator();
    setTimeout(onEntry, 50000);
}

function disableContentLayer() {
    var modal = document.getElementById("myModal");

    modal.style.display = "none";
    var contentUnderlayer = document.getElementById('contentUnderlayer');
    contentUnderlayer.style.filter = "blur(0px)";

    moveDelimitator();
}

function purchaseContent() {
    var contentBox = document.getElementById('contentBox');
    contentBox.style.display = "block";

    var insideContentBox = document.getElementById('insideContentBox');
    insideContentBox.style.display = "block";
}

function hidePurchaseBox(){
    var contentBox = document.getElementById('contentBox');
    contentBox.style.display = "none";
    
    var insideContentBox = document.getElementById('insideContentBox');
    insideContentBox.style.display = "none";
}

function buyPurchase(){
    var lottieAnimation = document.getElementById('lottieAnimation');
    lottieAnimation.style.display = "block";

    var insideContentBox = document.getElementById('insideContentBox');
    insideContentBox.style.display = "none";

    setTimeout(hidePurchaseBox,5000);

}

function onEntry(){
    var movieTrailer = document.getElementById('movieTVTrailer');
    movieTrailer.style.display = "none";

    var movieImage = document.getElementById('movieTVImage');
    movieImage.style.display = "block";
}