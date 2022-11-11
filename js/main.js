// scroll hide menu bar
let prevScroll = window.scrollY;
window.addEventListener('scroll', function () {
    if (window.scrollY == 0) {
        $('.config-top-banner').css('display', 'block')
        $('.config-top-banner').css('animation', 'animation-show-display .5s')
    } else {
        $('.config-top-banner').css('display', 'none')
    }
    if (prevScroll < window.scrollY) {
        $('#header').css('display', 'none')
    } else {
        $('#header').css('display', 'block')
        $('#header').css('animation', 'animation-show-display .5s')

    }
    prevScroll = window.scrollY;
})
// animation scroll top
$(".link-btt").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    }
});
let count_click = 0
//show box search
$("#icon-search").on('click', function () {
    if (count_click == 0) {
        $("#search-container").css('display', 'block')
        $('#search-container').css('animation', 'animation-search-show 0.5s')
        count_click = 1;
    } else {
        $("#search-container").css('display', 'none')
        $("#main,#footer").css('background', 'rgb(0, 0, 0, 0)')
        $("img, button").css('opacity', '1')
        count_click = 0;
    }

})
$(".btn-close").on('click', function () {
    $("#search-container").css('display', 'none')
    $("#main,#footer").css('background', 'rgb(0, 0, 0, 0)')
    $("img, button").css('opacity', '1')
    count_click = 0;
})
// switch tabs login and registration
    $('.sign-in-choose').on('click', function () {
        $('.sign-in-container').css('display', 'block')
        $('.sign-up-container').css('display', 'none')
        $('.sign-in-choose').css('border-top', '2px solid #0f9d58')
        $('.sign-in-choose').css('background', '#ffffff')
        $('.sign-in-choose').css('opacity', '1')
        $('.sign-up-choose').css('border-top', 'none')
        $('.sign-up-choose').css('background', '#c2c7d0')
        $('.sign-up-choose').css('opacity', '0.8')
    })
    $('.sign-up-choose').on('click', function () {
        $('.sign-up-container').css('display', 'block')
        $('.sign-in-container').css('display', 'none')
        $('.sign-up-choose').css('border-top', '2px solid #0f9d58')
        $('.sign-up-choose').css('background', '#ffffff')
        $('.sign-up-choose').css('opacity', '1')
        $('.sign-in-choose').css('border-top', 'none')
        $('.sign-in-choose').css('background', '#c2c7d0')
        $('.sign-in-choose').css('opacity', '0.8')
    })
// Edit searchbar
    var searchButton = document.getElementById("search-container");
    var container = document.querySelector('.position-relative')
    var slide = document.querySelector('.mySlides')
    window.addEventListener("click", function (event) {
        console.log("a")
        if (event.target == container || event.target == slide) {
            searchButton.style.display = "none";
            slide.style.opacity = '1'
            document.querySelector('#main').style.background = 'rgb(0, 0, 0, 0)'
            document.querySelector('#footer').style.background = 'rgb(0, 0, 0, 0)'

        }
    })
// Change section in product site
function openSection(evt, sectionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
}