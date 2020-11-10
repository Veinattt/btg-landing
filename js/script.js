function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

$(document).ready(function () {
    var slideIndex = 0;
    newBlock(slideIndex);
    $('.slider-team').slick({
        arrows: true,
        slidesToShow: 3,
        touchMove: true,
        centerMode: true,
        speed: 1000,
        variableWidth: true,
        draggable: false,
        asNavFor: '.slider-nav',
        waitForAnimate: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                draggable: true,
            }
        }, ],
    });
});

function set_language(n) {
    var lang = jQuery('#language'+n).val();
    window.location.href = '?lang='+lang;
}

$('.slider-nav').slick({
    arrows: false,

    slidesToScroll: 1,
    asNavFor: '.slider-team',
    speed: 1000,
    centerMode: true,
    variableWidth: true,
    draggable: false,
    focusOnSelect: true,
    waitForAnimate: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 5,
        }
    }, ],
});
// $('.slider-navs2').slick({
//     arrows: false,

//     slidesToScroll: 1,
//     asNavFor: '.slider-s2',
//     speed: 1000,
//     centerMode: true,
//     variableWidth: true,
//     draggable: false,
//     focusOnSelect: true,
//     waitForAnimate:false,
//     responsive: [{
//         breakpoint: 768,
//         settings: {
//             slidesToShow: 5,
//         }
//     },
// ],
// });

$(document).ready(function () {
    var slideIndex = 0;
    newBlock(slideIndex);
    $('.slider-s2').slick({
        arrows: false,
        // asNavFor: '.slider-navs2',
        slidesToShow: 1,
        touchMove: true,
        variableWidth: true,
        centerMode: true,
        speed: 1000,
        draggable: true,
        dots: true,

    });
});

function newBlock(n) {
    var i;
    var slides = document.getElementsByClassName("s_item");
    var crops = document.getElementsByClassName("crop");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        crops[i].style.color = "#000000";
    }
    slides[n].style.display = "flex";
    crops[n].style.color = "#be0601";
}


function validate_p1() {
    var name = document.getElementById('FormInputName');
    var email = document.getElementById('FormInputEmail');
    var number = document.getElementById('FormInputNumber');

    if (is_valid(name) && validateEmail(email) && is_valid(number)) {
        display_p2(0);
    }
}

function validate_p2() {
    var f_address = document.getElementById('FormInputAddress');
    var d_address = document.getElementById('FormInputDeliveryAddress');
    var cargo = document.getElementById('FormInputCargo');
    var output = false;
    if (is_valid(f_address) && is_valid(d_address) && is_valid(cargo)) {
        output = true;
    } 
    return output;
}

function validate_p3() {
    var name = document.getElementById('FormInputName2');
    var email = document.getElementById('FormInputEmail2');
    var number = document.getElementById('FormInputNumber2');
    var output = false;
    if (is_valid(name) && validateEmail(email) && is_valid(number)) {
        output = true;
    }
    return output;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var res = false;
    if (re.test(String(email.value).toLowerCase())) {
        res = true;
    } else {
        email.focus();
    };
    return res;
}

function is_valid(input) {
    var res = false;
    if (input && input.value.trim()) {
        res = true
    } else {
        input.focus();
    }
    return res;
}

$("input").keydown(function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
});

function display_p2(n) {
    form = document.getElementById("form1");
    if (n == 0) {
        form.style.transform = "translateX(-50%)";
    } else {
        form.style.transform = "translateX(0%)";
    }
}

function openSideNav() {
    var a = document.getElementsByClassName('sideCont');
    document.getElementById("mySidenav").style.width = "100%";
    setTimeout(function () {
        for (i = 0; i < a.length; i++) {
            a[i].style["opacity"] = 1;
        }
    }, 400);
}

function closeSideNav() {
    var a = document.getElementsByClassName('sideCont');
    for (i = 0; i < a.length; i++) {
        a[i].style["opacity"] = 0;
    }
    setTimeout(function () {
        document.getElementById("mySidenav").style.width = "0";
    }, 300);
}

document.addEventListener('click', function (e) {
    if (document.activeElement.toString() == '[object HTMLButtonElement]') {
        document.activeElement.blur();
    }
});