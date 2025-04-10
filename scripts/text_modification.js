'use strict'

let mediaQuery = window.matchMedia('(max-width: 800px)');

if(mediaQuery.matches){
    let CallAMasterDescription = document.getElementsByClassName('call-a-master__description')[1];
    let messege = CallAMasterDescription.textContent;
    messege = messege.replace('по ценам в нашем прайс-листе', 'с помощью калькулятора цен');
    CallAMasterDescription.textContent = messege;
}