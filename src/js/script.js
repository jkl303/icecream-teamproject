new Swiper('.slider', {
    navigarion: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        speed: 1000
    },

    centeredSlides: true,

    effect: 'fade',

    fadeEffect: {
        crossFade: true,
        speed:1000,
        loop: true
    },

    grabCursor:true,
}); 