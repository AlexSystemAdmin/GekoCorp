'use strict'

let btn_up = document.querySelector(".btn-up");
let btn_order_call = document.querySelector(".btn-order-call");
let form_order_a_call = document.querySelector(".form-order-a-call");
let form_order_a_call_close = document.querySelector(".form-order-a-call .btn-close-form");
let scroll_width = window.innerWidth - document.documentElement.clientWidth
//console.log(scroll_width);

window.addEventListener("scroll", () => {
    //console.log(form_order_a_call_close);
    if(window.scrollY > 2000){
        btn_up.style.display = "block";
        btn_order_call.style.display = "block";
    }

    else{
        btn_up.style.display = "none";
        btn_order_call.style.display = "none";
    }
})

btn_up.addEventListener("click", () => {
    if(document.body.style.overflow != "hidden"){
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    
})

btn_order_call.addEventListener("click", () => {
    //console.log(window.getComputedStyle(btn_order_call).right);
    form_order_a_call.style.top = `${window.scrollY}px`;
    document.body.style.overflow = "hidden";
    btn_order_call.style.marginRight = `${scroll_width}px`;
    btn_up.style.marginRight = `${scroll_width}px`;
    //console.log(window.getComputedStyle(btn_order_call).right);
})

form_order_a_call_close.addEventListener("click", () => {
    document.body.style.overflow = "visible";
    btn_order_call.style.marginRight = 0;
    btn_up.style.marginRight = 0;
    form_order_a_call.style.top = "-1000px";

    let form_order_a_call_element_errors = form_order_a_call_close.parentNode.querySelectorAll(".form-element-error");
    let form_order_a_call_element_border = form_order_a_call_close.parentNode.querySelectorAll(".error");

    for (let i = 0; i < form_order_a_call_element_errors.length; i++) {
        form_order_a_call_element_errors[i].innerHTML = "";
    }

    for (let i = 0; i < form_order_a_call_element_border.length; i++) {
        form_order_a_call_element_border[i].classList.remove("error");
    }

    order_a_call_inputName.value = "";
    order_a_call_inputTtel.value = "";
    order_a_call_checkBox.checked = false;
})