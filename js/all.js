$(document).ready(function () {
    $('.menu-products').click(function (e) { 
        e.preventDefault();
        $('.menu-products-sub').slideToggle();
        $('.menu-products').toggleClass('active');
    });
    $('.menu-contact').click(function (e) { 
        e.preventDefault();
        $('.menu-contact-sub').slideToggle();
        $('.menu-contact').toggleClass('active');
    });
});