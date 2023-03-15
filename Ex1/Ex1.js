$(document).ready(function() {
 
    $('#owl-banner').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: true,
        navText: ["<span class='glyphicon glyphicon-menu-left'>","<span class='glyphicon glyphicon-menu-right'>"],
        responsive: {
            0: {
                items: 1
            },
          
            
        }
    })

    $('#owl-carousel-introduce').owlCarousel({
        loop: false,
        autoplay: false,
        margin: 30,
        dots: false,
        nav: true,
        navText: ["<span class='glyphicon glyphicon-triangle-left'>","<span class='	glyphicon glyphicon-triangle-right'>"],
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            768:{
                items: 3,
                loop: true
            },
            992:{
                items: 4
            },
        }
    })

    $('.owl-carousel-outstanding-product').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 30,
        dots: false,
        nav: true,
        navText: ["<span class='glyphicon glyphicon-triangle-left'>","<span class='	glyphicon glyphicon-triangle-right'>"],
        responsive: {
            0: {
                items: 2
            },
            768:{
                items: 3
            },
            992:{
                items: 4
            },
        }
    })

    
    $('#owl-carousel-news').owlCarousel({
        loop: false,
        autoplay: false,
        margin: 30,
        dots: false,
        nav: true,
        navText: ["<span class='glyphicon glyphicon-triangle-left'>","<span class='	glyphicon glyphicon-triangle-right'>"],
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            992:{
                items: 3
            },
            
        }
    })

  });

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

