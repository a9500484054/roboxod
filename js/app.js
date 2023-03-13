document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.menu-burger').addEventListener('click', ()=> {
        document.querySelector('.menu').classList.add('menu--active');
    });

    document.querySelector('.menu__btn-close').addEventListener('click', ()=> {
        document.querySelector('.menu').classList.remove('menu--active');
    });

    const swiper1 = new Swiper('.reviews__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            1240: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    const swiper2 = new Swiper('.social__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    const swiper3 = new Swiper('.buy__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});





