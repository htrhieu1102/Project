    // scroll hide menu bar
    let prevScroll = window.scrollY;
    window.addEventListener('scroll', function () {
        if (window.scrollY == 0) {
            $('.config-top-banner').css('display', 'block')
        } else {
            $('.config-top-banner').css('display', 'none')
        }
        if (prevScroll < window.scrollY) {
            $('#header').css('display', 'none')
        } else {
            $('#header').css('display', 'block')
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
    //show box search
    $("#icon-search").on('click', function () {
        $("#search-container").css('display', 'block')
        $("#main").css('background', 'rgb(0, 0, 0, 0.5)')
        $("#footer").css('background', 'rgb(0, 0, 0, 0.5)')
        // $('#search-container').addClass('animation-show')
    
    })
    $(".btn-close").on('click', function () {
        $("#search-container").css('display', 'none')
        $("#main").css('background', 'rgb(0, 0, 0, 0)')
        $("#footer").css('background', 'rgb(0, 0, 0, 0)')
        // $('#search-container').removeClass('animation-show')
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
