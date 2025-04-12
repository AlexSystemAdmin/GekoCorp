'use strict'

const form = document.querySelector('.master-box__form');
const inputName = form.querySelector('.master-box__input-name');
let inputTtel = document.getElementById('master-box__input-tel');
const textArea = form.querySelector('.master-box__textarea');
const checkBox = document.getElementById('agreement__checkbox');
const btn = form.querySelector('.master-box__button');

const errors = {
    patternMismatch: 'Некорректный номер телефона!',
    valueMissing: 'Поле обязательно для заполнения!',
};

let listErrors = [];

function onBlur(element){

    if(element.required){

        let listValidity =  element.validity;
        let errorElement = element.parentNode.querySelector('.master-box__errors');

        let areErrors = errorsChecking(errorElement, listValidity);
        //areErrors ? submitOn = false : submitOn = true;
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
        let errorElement = element.parentNode.querySelector('.master-box__errors');

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
        let errorElement = element.parentNode.querySelector('.master-box__errors');

        let areErrors = errorsChecking(errorElement, listValidity);
        setStyleOfInputElement(element, areErrors);
        errorElementHandle(errorElement);
        listErrors.length = 0;

    }

}

form.addEventListener('blur', (event) => {

    onBlur(event.target);
    
}, {capture: true});

form.addEventListener('submit', (event) => {

    let validName = onSubmit(inputName);
    let validTel = onSubmit(inputTtel);
    let validTextArea = onSubmit(textArea);
    let validCheckBox = onSubmit(checkBox);

    if(validName || validTel || validTextArea || !checkBox.checked){
        event.preventDefault();
    }
});

form.addEventListener('input', (event) => {
    //onInput(event.target);
})

inputName.addEventListener('keypress', (event) => {
    if(!isNaN(event.key)){
        event.preventDefault();
    }
})