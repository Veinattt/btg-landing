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
        draggable: false,
        asNavFor: '.slider-nav',
        waitForAnimate: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    arrows: false,
                    draggable: true,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    arrows: false,
                    draggable: true,
                }
            },
        ],
    });
    $('.slider-nav').slick({
        arrows: false,

        slidesToScroll: 1,
        asNavFor: '.slider-team',
        speed: 1000,
        centerMode: true,
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