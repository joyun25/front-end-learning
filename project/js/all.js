$(document).ready(function () {
    $('.product-menu').click(function (e) { 
        e.preventDefault();
        $('.product-menu').toggleClass('active');
        $('.product').slideToggle();
    });
    
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 5000,
        },
        
    });
    $('.top-box a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
});