'use strict'

let menu_btn = document.querySelector('.menu-button');
let menu_modal = document.querySelector('.menu-modal');
let menu_modal_img = document.querySelector('.menu-modal__img');
let menu_modal_content_flex = document.querySelector('.menu-modal__content-flex');
let menu_modal_list_drop = document.querySelector('.menu-modal__list-drop');

menu_btn.addEventListener('click', () => {
    if(menu_modal.style.left < "0px"){
        menu_btn.style.backgroundImage = "url('./images/header/menu-button-close.svg')";
        menu_modal.style.left = "0px";
    }

    else{
        menu_btn.style.backgroundImage = "url('./images/header/menu-button.svg')";
        menu_modal.style.left = "-4000px";
    }
})

menu_modal_content_flex.addEventListener('click', () => {
    console.log(menu_modal_list_drop.firstElementChild);

    if(window.getComputedStyle(menu_modal_list_drop).maxHeight == "0px"){
        menu_modal_img.style.transform = "rotate(180deg)";
        menu_modal_list_drop.style.maxHeight = "none";
        menu_modal_list_drop.style.paddingTop = "14px";
        menu_modal_list_drop.firstElementChild.style.borderTop = "1px solid var(--orange)";
        menu_modal_list_drop.parentNode.style.paddingBottom = "5px";
    }

    else{
        menu_modal_img.style.transform = "rotate(0deg)";
        menu_modal_list_drop.firstElementChild.style.borderTop = "none";
        menu_modal_list_drop.style.paddingTop = "0";
        menu_modal_list_drop.parentNode.style.paddingBottom = "12px";
        menu_modal_list_drop.style.maxHeight = "0";
    }
    console.log(window.getComputedStyle(menu_modal_list_drop).maxHeight);
})