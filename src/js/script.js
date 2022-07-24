new Swiper('.slider', {
    navigarion: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    slidesPerGroup: 1,

    centeredSlides: true,

    spaceBetween: 20,
}); 