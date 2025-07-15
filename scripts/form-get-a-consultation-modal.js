'use strict'

let form_get_a_consultation = document.querySelector('.form-get-a-consultation');
let form_get_a_consultation_open = document.querySelector('.get-a-consultation');
let form_get_a_consultation_close = document.querySelector('.form-get-a-consultation .btn-close-form');

form_get_a_consultation_open.addEventListener('click', () => {
    form_get_a_consultation.style.top = `${window.scrollY}px`;
    document.body.style.overflow = 'hidden';
    /*document.querySelector(".btn-order-call").style.marginRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
    document.querySelector(".btn-up").style.marginRight = `${window.innerWidth - document.documentElement.clientWidth}px`;*/
    btn_order_call.style.marginRight = `${scroll_width}px`;
    btn_up.style.marginRight = `${scroll_width}px`;
})

form_get_a_consultation_close.addEventListener('click', () => {
    form_get_a_consultation.style.top = `-1000px`;
    document.body.style.overflow = 'visible';
    btn_order_call.style.marginRight = 0;
    btn_up.style.marginRight = 0;

    let form_get_a_consultation_element_errors = form_get_a_consultation_close.parentNode.querySelectorAll(".form-element-error");
    let form_get_a_consultation_element_border = form_get_a_consultation_close.parentNode.querySelectorAll(".error");

    for (let i = 0; i < form_get_a_consultation_element_errors.length; i++) {
        form_get_a_consultation_element_errors[i].innerHTML = "";
    }

    for (let i = 0; i < form_get_a_consultation_element_border.length; i++) {
        form_get_a_consultation_element_border[i].classList.remove("error");
    }

    get_a_consultation_inputName.value = "";
    get_a_consultation_inputTtel.value = "";
    get_a_consultation_checkBox.checked = false;
})