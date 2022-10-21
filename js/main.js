//show box search
$("#icon-search").on('click', function () {
    $("#search-container").css('display', 'block')
})
// hide box search
$(".btn-close").on('click', function () {
    $("#search-container").css('display', 'none')
})

// slide show and auto slide show
let slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
    slideIndex = n;
    showDivs();
}
function showDivs() {
    let x = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if (slideIndex > x.length) {
        slideIndex = 1;
    } if (slideIndex < 1) {
        slideIndex = x.length;
    }
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.background = "";
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].style.background = "#ffffff";
    setTimeout(showDivs, 2000);
    slideIndex++;
}