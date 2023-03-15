$(document).ready(function () {

    $('#owl-banner').owlCarousel({
        loop: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },

        }
    })

    $('#owl-news').owlCarousel({
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },

        }
    })

    $('#owl-he-thong').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },

        }
    })
});

var btn = $('#btn-back-to-top');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

$(document).ready(function () {
    // reference for main items
    var slider = $('#slider');
    // reference for thumbnail items
    var thumbnailSlider = $('#thumbnailSlider');
    //transition time in ms
    var duration = 500;

    // carousel function for main slider
    slider.owlCarousel({
        loop: false,
        nav: true,
        navText: ["<span class='glyphicon glyphicon-menu-left'>","<span class='glyphicon glyphicon-menu-right'>"],
        items: 1
    }).on('changed.owl.carousel', function (e) {
        //On change of main item to trigger thumbnail item
        thumbnailSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
    });

    // carousel function for thumbnail slider
    thumbnailSlider.owlCarousel({
        loop: false,
        //to display the thumbnail item in center
        margin: 15,
        stagePadding: 35,
        responsive: {
            0: {
                items: 4
            },

        }
    }).on('click', '.owl-item', function () {
        // On click of thumbnail items to trigger same main item
        slider.trigger('to.owl.carousel', [$(this).index(), duration, true]);

    });
   /*  $('.slider-right').click(function () {
        slider.trigger('next.owl.carousel');
    });
    $('.slider-left').click(function () {
        slider.trigger('prev.owl.carousel');
    }); */
});
