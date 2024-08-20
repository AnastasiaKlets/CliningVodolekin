let utms_names = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

utms_names.forEach(name => {
    let utm_inputs = document.querySelectorAll(`.${name}`);
    utm_inputs.forEach(input => {
        input.value = new URL(window.location.href).searchParams.get(`${name}`);
    });
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

$.mask.definitions['~'] = '[234]';
$.mask.definitions['*'] = '[3459]';

$('input[name="phone"]').click(function () {
    $(this).setCursorPosition(5);
}).mask("+375(~*)999-99-99");
$("#center_not_ok").mask("+375(~*)999-99-99");

if (document.querySelector('.survey') != null) {
    modal('[data-survey]', 'data-close', '.survey');
}

if (document.querySelector('.reviews_field') != null) {
    slider({
        containerSelector: '.reviews_container',
        slideSelector: '.reviews_slide',
        nextSlideSelector: '.reviews_next',
        prevSlideSelector: '.reviews_prev',
        wrapperSelector: '.reviews_wrapper',
        fieldSelector: '.reviews_field',
        indicatorsClass: 'reviews_indicators',
        totalCounter: '#total',
        currentCounter: '#current',
        elementsPerPage: 3,
        elementsPerPageMobile: 1,
        columnGap: 24,
        swipe: true,
    });
}
if (document.querySelector('.our_works_field') != null) {
    slider({
        containerSelector: '.our_works .container',
        slideSelector: '.our_works_slide',
        nextSlideSelector: '.our_works_next',
        prevSlideSelector: '.our_works_prev',
        wrapperSelector: '.our_works_wrapper',
        fieldSelector: '.our_works_field',
    });
    slider({
        containerSelector: '.our_works .container',
        slideSelector: '.our_works_slide_mobile',
        wrapperSelector: '.our_works_wrapper.mobile',
        fieldSelector: '.mobile .our_works_field',
        indicatorsClass: 'our_works_indicators',
        swipe: true,
    });
}

$(function(){
    $(".our_works_slide").twentytwenty({
        no_overlay: true,
        move_slider_on_hover: true,
        move_with_handle_only: true,
        click_to_move: true
    });
});

$(document).on('scroll DOMContentLoaded', function() {
    if($(this).scrollTop() + window.innerHeight >= $('.about_wrapper_block2').offset().top) {
        $('.counters_item span').each(function() {
            let i = 1,
                num = $(this).data('num'),
                that = $(this),
                int = setInterval(function() {
                    if (i <= num && i > that.html()) {
                        that.html(i);
                    } else if (i > num) {
                        that.html(num);
                    } else {
                        clearInterval(int);
                    }
                    num > 2000 ? i = i + 3 : i++;
                }, 5000 / num);
        });
    }
});


(function () {
    var square = document.querySelector('.choice_wrapper');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                let items = $('.choice_wrapper_text_block');
                items.css('opacity', 0);
                for (var i = 0; i < items.length; i++) {
                    $(items[i]).delay(i * 500).animate({ opacity: 1 }, 500);
                }
            }
        });
    });

    observer.observe(square);
})();

(function () {
    var square = document.querySelector('.dopService');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                let items = $('.dopService_wrapper_inf_img_11');
                items.css('opacity', 0);
                for (var i = 0; i < items.length; i++) {
                    $(items[i]).delay(i * 500).animate({ opacity: 1 }, 500);
                }
            }
        });
    });

    observer.observe(square);
})();


//функция для табов
function openCity(cityName) {
    let i;
    let x = document.getElementsByClassName("city");
    let y = cityName
    document.getElementById('services12').classList.remove('faq_dop');
    document.getElementById('services13').classList.remove('faq_dop');
    for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";
        if(y==="doc10"){
            document.getElementById('services12').classList.add('faq_dop');
        }
        if(y==="doc11"){
            document.getElementById('services13').classList.add('faq_dop');
        }
    }
    document.getElementById(cityName).style.display = "block";
}




var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal1 = document.getElementById('myModal1');
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close1")[0];
btn1.onclick = function() {
    modal1.style.display = "block";
}
span1.onclick = function() {
    modal1.style.display = "none";
}
window.onclick = function(event1) {
    if (event1.target == modal1) {
        modal1.style.display = "none";
    }
}


var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function() {
    modal2.style.display = "block";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
window.onclick = function(event1) {
    if (event1.target == modal2) {
        modal2.style.display = "none";
    }
}

var modal3 = document.getElementById('myModal3');
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementsByClassName("close3")[0];
btn3.onclick = function() {
    modal3.style.display = "block";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

var modal4 = document.getElementById('myModal4');
var btn4 = document.getElementById("myBtn4");
var span4 = document.getElementsByClassName("close4")[0];
btn4.onclick = function() {
    modal4.style.display = "block";
}
span4.onclick = function() {
    modal4.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}

var modal5 = document.getElementById('myModal5');
var btn5 = document.getElementById("myBtn5");
var span5 = document.getElementsByClassName("close5")[0];
btn5.onclick = function() {
    modal5.style.display = "block";
}
span5.onclick = function() {
    modal5.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}

// отправка формы
$("form").submit(function (event) {
    event.preventDefault();

    let name = event.target.classList.value.slice(0, -5).split(' ').pop();
    let formData = new FormData(document.querySelector(`.${name}_form`));

    sendPhp(name, formData);
});

function sendPhp(name, data) {
    $.ajax({
        url: `./php/send_${name}.php`,
        type: 'POST',
        cache: false,
        data: data,
        dataType: 'html',
        processData: false,
        contentType: false,
        success: function (data) {
            $(`.${name}_form`).trigger('reset');
            if (name == 'survey' || name == 'consult' || name == 'team') {
                closeModal(`.${name}`)
            }
            // console.log(222)
            // openModal('.thanks');
            // setTimeout(function(){
            //     closeModal('.thanks');
            // }, 6000)
        }
    });
}



document.querySelector('.button_shine.next').addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target
    if (!target.getAttribute('data-show')) {
        target = target.parentElement;
    }
    let next = target.getAttribute('data-show');
    e.target.closest('.survey_wrapper').style.display = 'none';
    document.querySelector(`#${next}`).style.display = 'block';
});

let sum_1 = +document.querySelector('.survey_form input[type=radio]').value * 195;
let sum_2 = +document.querySelector('.survey_form input[type=checkbox]').getAttribute('data-value')
let sum = sum_1 + sum_2;
document.querySelectorAll('.sum').forEach((span) => {
    span.textContent = sum
})
document.querySelector('input[name="sum"]').value = sum

document.querySelectorAll('.survey_form input[type=checkbox], .survey_form input[type=radio]').forEach((input) => {
    input.onchange = function() {
        if (input.type == 'radio') {
            sum_1 = input.value * 195
        }
        if (input.type == 'checkbox') {
            input.checked ? sum_2 += +input.getAttribute('data-value') : sum_2 -= +input.getAttribute('data-value')
        }
        let sum = sum_1 + sum_2;
        document.querySelectorAll('.sum').forEach((span) => {
            span.textContent = sum
        })
        document.querySelector('input[name="sum"]').value = sum
    };
})