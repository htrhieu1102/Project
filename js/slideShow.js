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
    // for (let i = 0; i < dots.length; i++) {
    // }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.background = "#42fed0";
    dots[slideIndex - 1].style.padding = "0 20px";
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
    dots[slideIndex - 1].style.background = "#42fed0";
    dots[slideIndex - 1].style.padding = "0 20px";
    setTimeout(carousel, 3000); // Change image every 2 seconds
    slideIndex++;
}