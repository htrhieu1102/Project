// slide show and auto slide show
let slideIndex = 1;
showDivs(slideIndex);
carousel();


function currentDiv(n) {
    slideIndex = n;
    showDivs(slideIndex);
}

function showDivs(n) {
    let x = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        dots[i].style.background = "";
        dots[i].style.padding = "0 5px";


    }
    x[slideIndex - 1].style.display = "block";
    x[slideIndex - 1].style.animation = "scale-display .5s";
    dots[slideIndex - 1].style.background = "#0f9d58";
}
// Auto next slide
function carousel() {
    let x = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName('dot');
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        dots[i].style.background = "";
        dots[i].style.padding = "0 5px";
    }
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    ;x[slideIndex - 1].style.display = "block";
    x[slideIndex - 1].style.animation = "scale-display .7s";
    dots[slideIndex - 1].style.background = "#0f9d58";
    setTimeout(carousel, 3000); // Change image every 2 seconds
    slideIndex++;
}