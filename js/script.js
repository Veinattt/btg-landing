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

document.addEventListener('click', function (e) {
    if (document.activeElement.toString() == '[object HTMLButtonElement]') {
        document.activeElement.blur();
    }
});