'use strict'

//import IMask from '../imask/esm/index.js';

let input_tel = document.querySelectorAll('.input-tel-mask');

const maskOptions = {
    mask: '+{7}(000)000-00-00'
};

for(let i = 0; i < input_tel.length; i++){
    let mask = IMask(input_tel[i], maskOptions);
    mask.autoUnmesk = true;
}
