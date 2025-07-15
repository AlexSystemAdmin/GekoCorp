'use strict'

// section call-a-master

const master_box_form = document.querySelector('.master-box__form');
const inputName = master_box_form.querySelector('.master-box__input-name');
const inputTtel = document.getElementById('master-box__input-tel');
const textArea = master_box_form.querySelector('.master-box__textarea');
const checkBox = document.getElementById('agreement__checkbox');
const btn = master_box_form.querySelector('.master-box__button');

const errors = {
    patternMismatch: 'Некорректный номер телефона!',
    valueMissing: 'Поле обязательно для заполнения!',
};

let listErrors = [];

function onBlur(element){

    if(element.required){

        let listValidity =  element.validity;
        let errorElement = element.parentNode.querySelector('.form-element-error');
        let areErrors = errorsChecking(errorElement, listValidity);
        setStyleOfInputElement(element, areErrors);
        errorElementHandle(errorElement);
        listErrors.length = 0;

    }

}

function errorsChecking(errorElement, validityOfElement) {

    Object.entries(errors).forEach( ([errorKind, errorMessege]) => {

        if(errorElement.innerText !== ""){
            errorElement.innerText = '';
        }

        if(validityOfElement[errorKind] === true){
            listErrors.push(errorMessege);
        }
    }
    )
    let areErrors = listErrors.length !== 0 ? true : false;
    return areErrors;
}

function errorElementHandle(errorElement){
    listErrors.forEach(error => {
        errorElement.innerHTML += error;
    })
}

function setStyleOfInputElement(element, areErrors){
    if(areErrors){
        element.classList.add('error');
    }
    else{
        element.classList.remove('error');
    }
}

function onSubmit(element){

    if(element.required){
        let listValidity =  element.validity;
        //let errorElement = element.parentNode.querySelector('.master-box__errors');
        let errorElement = element.parentNode.querySelector('.form-element-error');
        let areErrors = errorsChecking(errorElement, listValidity);
        setStyleOfInputElement(element, areErrors);
        errorElementHandle(errorElement);
        listErrors.length = 0;
        return areErrors;
    }
}

function onInput(element){

    if(element.required){
        let listValidity =  element.validity;
        //let errorElement = element.parentNode.querySelector('.master-box__errors');
        let errorElement = element.parentNode.querySelector('.form-element-error');
        let areErrors = errorsChecking(errorElement, listValidity);
        setStyleOfInputElement(element, areErrors);
        errorElementHandle(errorElement);
        listErrors.length = 0;
    }
}

master_box_form.addEventListener('blur', (event) => {
    onBlur(event.target);
}, {capture: true});

master_box_form.addEventListener('submit', (event) => {
    let validName = onSubmit(inputName);
    let validTel = onSubmit(inputTtel);
    let validTextArea = onSubmit(textArea);
    let validCheckBox = onSubmit(checkBox);

    if(validName || validTel || validTextArea || !checkBox.checked){
        event.preventDefault();
    }
});

master_box_form.addEventListener('input', (event) => {
    onInput(event.target);
})

inputName.addEventListener('keypress', (event) => {
    if(!isNaN(event.key)){
        event.preventDefault();
    }
})

/* form-call-a-master */

const call_a_master_form = document.querySelector('.form-call-a-master');
const call_a_master_inputName = call_a_master_form.querySelector('.form-call-a-master__input-name');
const call_a_master_inputTtel = document.getElementById('form-call-a-master__input-tel');
const call_a_master_textArea = call_a_master_form.querySelector('.form-call-a-master__textarea');
const call_a_master_checkBox = document.getElementById('form-call-a-master__checkbox');
const call_a_master_btn = call_a_master_form.querySelector('.form-call-a-master__button');

call_a_master_form.addEventListener('blur', (event) => {
    onBlur(event.target);
}, {capture: true});

call_a_master_form.addEventListener('submit', (event) => {
    let validName = onSubmit(call_a_master_inputName);
    let validTel = onSubmit(call_a_master_inputTtel);
    let validTextArea = onSubmit(call_a_master_textArea);
    let validCheckBox = onSubmit(call_a_master_checkBox);

    if(validName || validTel || validTextArea || !call_a_master_checkBox.checked){
        event.preventDefault();
    }

});

call_a_master_form.addEventListener('input', (event) => {
    onInput(event.target);
})

call_a_master_inputName.addEventListener('keypress', (event) => {
    if(!isNaN(event.key)){
        event.preventDefault();
    }
})


/* form-get-a-consultation */

const get_a_consultation_form = document.querySelector('.form-get-a-consultation');
const get_a_consultation_inputName = get_a_consultation_form.querySelector('.form-get-a-consultation__input-name');
const get_a_consultation_inputTtel = document.getElementById('form-get-a-consultation__input-tel');
const get_a_consultation_checkBox = document.getElementById('form-get-a-consultation__checkbox');
const get_a_consultation_btn = get_a_consultation_form.querySelector('.form-get-a-consultation__button');

get_a_consultation_form.addEventListener('blur', (event) => {
    onBlur(event.target);
}, {capture: true});

get_a_consultation_form.addEventListener('submit', (event) => {
    let validName = onSubmit(get_a_consultation_inputName);
    let validTel = onSubmit(get_a_consultation_inputTtel);
    let validCheckBox = onSubmit(get_a_consultation_checkBox);

    if(validName || validTel || !validCheckBox.checked){
        event.preventDefault();
    }

});

get_a_consultation_form.addEventListener('input', (event) => {
    onInput(event.target);
})

get_a_consultation_inputName.addEventListener('keypress', (event) => {
    if(!isNaN(event.key)){
        event.preventDefault();
    }
})


/* form-order-a-call */

const order_a_call_form = document.querySelector('.form-order-a-call');
const order_a_call_inputName = order_a_call_form.querySelector('.form-order-a-call__input-name');
const order_a_call_inputTtel = document.getElementById('form-order-a-call__input-tel');
const order_a_call_checkBox = document.getElementById('form-order-a-call__checkbox');
const order_a_call_btn = order_a_call_form.querySelector('.form-order-a-call__button');

order_a_call_form.addEventListener('blur', (event) => {
    onBlur(event.target);
}, {capture: true});

order_a_call_form.addEventListener('submit', (event) => {
    let validName = onSubmit(order_a_call_inputName);
    let validTel = onSubmit(order_a_call_inputTtel);
    let validCheckBox = onSubmit(order_a_call_checkBox);

    if(validName || validTel || !order_a_call_checkBox.checked){
        event.preventDefault();
    }

});

order_a_call_form.addEventListener('input', (event) => {
    onInput(event.target);
})

order_a_call_inputName.addEventListener('keypress', (event) => {
    if(!isNaN(event.key)){
        event.preventDefault();
    }
})