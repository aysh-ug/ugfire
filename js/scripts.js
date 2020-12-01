function menu() {
    document.getElementById("opts").style.display = "block";
    document.getElementById("hellosmall").style.display = "none";
}

function closemenu() {
    document.getElementById("opts").style.display = "none";
    document.getElementById("hellosmall").style.display = "block";
}

function web() {
    document.getElementById("contentToDisplay").innerHTML = document.getElementById("websites").innerHTML;
    document.getElementById("opts").style.display = "none";
}

function graphics() {
    document.getElementById("contentToDisplay").innerHTML = document.getElementById("graphics").innerHTML;
    document.getElementById("opts").style.display = "none";
}

function courses() {
    document.getElementById("contentToDisplay").innerHTML = document.getElementById("courses").innerHTML;
    document.getElementById("opts").style.display = "none";
}

function products() {
    document.getElementById("contentToDisplay").innerHTML = document.getElementById("products").innerHTML;
    document.getElementById("opts").style.display = "none";
}

function soft() {
    document.getElementById("contentToDisplay").innerHTML = document.getElementById("soft").innerHTML;
    document.getElementById("opts").style.display = "none";
}

function tech() {
    document.getElementById("contentToDisplay").innerHTML = document.getElementById("tech").innerHTML;
    document.getElementById("opts").style.display = "none";
}

function about() {
    document.getElementById("contentToDisplay").innerHTML = document.getElementById("about").innerHTML;
    document.getElementById("opts").style.display = "none";
}



// Slideshow Eflier Images
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-opacity-off";
}