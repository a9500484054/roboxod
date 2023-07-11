document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelectorAll(".online_phone");
    for (const inputKey of input) {
        inputKey.addEventListener("input", mask, false);
    }


    document.querySelector('.menu-burger').addEventListener('click', ()=> {
        document.querySelector('.menu').classList.add('menu--active');
    });

    document.querySelector('.menu__btn-close').addEventListener('click', ()=> {
        document.querySelector('.menu').classList.remove('menu--active');
    });

    document.querySelector('.schedule__btn-1').addEventListener('click', ()=> {
        document.querySelectorAll('.schedule__btn').forEach(el => el.classList.remove('schedule__btn--active'));
        document.querySelectorAll('.schedule__block').forEach(el => el.classList.add('d-none'));
        document.querySelector('.schedule__btn-1').classList.add('schedule__btn--active');
        document.querySelector('.schedule__block-1').classList.remove('d-none');
    });

    document.querySelector('.schedule__btn-2').addEventListener('click', ()=> {
        document.querySelectorAll('.schedule__btn').forEach(el => el.classList.remove('schedule__btn--active'));
        document.querySelectorAll('.schedule__block').forEach(el => el.classList.add('d-none'));
        document.querySelector('.schedule__btn-2').classList.add('schedule__btn--active');
        document.querySelector('.schedule__block-2').classList.remove('d-none');
    });

    document.querySelector('.schedule__btn-1').addEventListener('click', ()=> {
        document.querySelectorAll('.schedule__btn').forEach(el => el.classList.remove('schedule__btn--active'));
        document.querySelectorAll('.schedule__block').forEach(el => el.classList.add('d-none'));
        document.querySelector('.schedule__btn-1').classList.add('schedule__btn--active');
        document.querySelector('.schedule__block-1').classList.remove('d-none');
    });

    document.addEventListener('click', (event) => {
        if(event.target.matches('.btn-js')) {
            openModal('#myModal');
        }
    });

    document.addEventListener('click', (event) => {
        if(event.target.matches('.btn-buy-js')) {
            openModal('#myModalBuy');
        }
    });

    $("form").submit(function(e) {
        e.preventDefault();
        let th = $(this);
        console.log('mail')
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize(),
            // success: function(data) {
            //     th.trigger("reset");
            // }
        });
        return false;
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
                slidesPerView: 2,
                spaceBetween: 30
            },
            1280: {
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



async function closeModal(selector) {
    let myModalEl = document.querySelector(selector);
    let modal = bootstrap.Modal.getOrCreateInstance(myModalEl);
    modal.hide();
}
async function openModal(selector) {
    let myModalEl = document.querySelector(selector);
    let modal = bootstrap.Modal.getOrCreateInstance(myModalEl);
    modal.show();
}

function checkform(form) {
    // get all the inputs within the submitted form
    const inputs = form.getElementsByTagName('input');
    for (const i = 0; i < inputs.length; i++) {
        // only validate the inputs that have the required attribute
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value === ""){
                // found an empty field that is required
                alert("Please fill all required fields");
                return false;
            }
        }
    }
    return true;
}


function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix !== this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}
