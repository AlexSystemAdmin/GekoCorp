'use strict'

import IMask from '../node_modules/imask/esm/index.js';

const element = document.getElementById('master-box__input-tel');

const maskOptions = {
    mask: '+{7}(000)000-00-00'
};

const mask = IMask(element, maskOptions);
mask.autoUnmesk = true;
export default mask;