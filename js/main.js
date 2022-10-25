//show box search
let count = 0;
$("#icon-search").on('click', function () {
    $("#search-container").css('display', 'block')
    $("#main").css('background', 'rgb(0, 0, 0, 0.5)')
    $("#footer").css('background', 'rgb(0, 0, 0, 0.5)')
    if (count == 0) {
        count++;
    }
    console.log(count)
})

// hide box search
function closeSearch() {
    $("#search-container").css('display', 'none')
    $("#main").css('background', 'rgb(0, 0, 0, 0)')
    $("#footer").css('background', 'rgb(0, 0, 0, 0)')
}

if ($(".btn-close").on('click', closeSearch)) {
    count = 0;
    console.log(count)
}
if ( count == 1 && $("#main").on('click', closeSearch) ) {
    console.log(count)
    count = 0;
}
// slide show and auto slide show
let slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
    slideIndex = n;
    clearTimeout(currentDiv)
    showDivs();
}

function showDivs() {
    let x = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = x.length;
    }
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.background = "";
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.background = "#ffffff";
    setTimeout(showDivs, 4000);
    slideIndex++;
}