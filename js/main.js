// animation scroll top
$(".link-btt").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    }
});
//show box search
$("#icon-search").on('click', function () {
    $("#search-container").css('display', 'block')
    $("#main").css('background', 'rgb(0, 0, 0, 0.5)')
    $("#footer").css('background', 'rgb(0, 0, 0, 0.5)')

})
$(".btn-close").on('click', function () {
    $("#search-container").css('display', 'none')
    $("#main").css('background', 'rgb(0, 0, 0, 0)')
    $("#footer").css('background', 'rgb(0, 0, 0, 0)')
})


