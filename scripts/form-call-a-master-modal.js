'use strict'

let form_call_a_master_btn_open = document.querySelector('.button');
//console.log(window.scrollY);
let form_call_a_master = document.querySelector('.form-call-a-master');
let form_call_a_master_close = document.querySelector('.btn-close-form');

form_call_a_master_btn_open.addEventListener('click', () => {
    form_call_a_master.style.top = `${window.scrollY}px`;
    //console.log(typeof(window.scrollY))
    document.body.style.overflow = 'hidden';
});

form_call_a_master_close.addEventListener('click', () => {
    form_call_a_master.style.top = `-1000px`;
    document.body.style.overflow = 'visible';
    //errorElement.innerHTML = null;
    let form_call_a_master_element_errors = form_call_a_master_close.parentNode.querySelectorAll(".form-element-error");
    let form_call_a_master_element_border = form_call_a_master_close.parentNode.querySelectorAll(".error");

    for (let i = 0; i < form_call_a_master_element_errors.length; i++) {
        form_call_a_master_element_errors[i].innerHTML = "";
    }

    for (let i = 0; i < form_call_a_master_element_border.length; i++) {
        form_call_a_master_element_border[i].classList.remove("error");
    }

    inputDeviceModal.value = "";
    inputManufacturerModal.value = "";
    call_a_master_inputName.value = "";
    call_a_master_inputTtel.value = "";
    call_a_master_textArea.value = "";
    call_a_master_checkBox.checked = false;
});