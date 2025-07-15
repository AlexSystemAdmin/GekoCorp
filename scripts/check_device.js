'use strict'

let devices = ['компьютер', 'ноутбук', 'моноблок', 'айфон', 'смартфон'];
let inputDevice = document.getElementById('check_device');
let resultDevice = document.getElementById('devices');
let btnDevice = document.getElementById('open_devices');


// section call-a-master

// Алгоритм поиска
inputDevice.addEventListener('input', function(){
    while(resultDevice.firstChild){
        if(!resultDevice.firstChild && inputDevice.value.length == 0){
            break;
        }
        resultDevice.removeChild(resultDevice.firstChild);
        resultDevice.style.display = 'none';
    }

    let text = inputDevice.value.toLowerCase();

        devices.forEach(device => {

            if(device.includes(text) && inputDevice.value.length > 0){
                let li = document.createElement('li');
                li.textContent = device;
                resultDevice.appendChild(li);
                resultDevice.style.display = 'block';
            }
        });
})

// закрытие всех вариантов при нажатии вне блока
document.addEventListener('click', (e) => {
        if( !resultDevice.contains(e.target) && e.target != btnDevice){
            while(resultDevice.firstChild){
                resultDevice.removeChild(resultDevice.firstChild);
                resultDevice.style.display = 'none';
            }
        }
})

// открытие / закрытие всех вариантов при нажатии на кнопку
btnDevice.addEventListener('click', function(){
    if(window.getComputedStyle(resultDevice).display == 'none'){
        while(resultDevice.firstChild){
            resultDevice.removeChild(resultDevice.firstChild);
            resultDevice.style.display = 'none';
        }
    
        devices.forEach(device => {
            let li = document.createElement('li');
            li.textContent = device;
            resultDevice.appendChild(li);
            resultDevice.style.display = 'block';
        });
    }
    else{
        while(resultDevice.firstChild){
            resultDevice.removeChild(resultDevice.firstChild);
            resultDevice.style.display = 'none';
        }
    }
})

// Выбор нужного варианта

resultDevice.addEventListener('click', (e) => {

    let device = document.querySelectorAll('.master-box__list li');

    if (device){
        for(let i = 0; i < device.length; i++){
            if(e.target == device[i]){
                inputDevice.value = e.target.textContent;
            }
        }

        while(resultDevice.firstChild){
            resultDevice.removeChild(resultDevice.firstChild);
            resultDevice.style.display = 'none';
        }
    }
})



// form-call-a-master

let inputDeviceModal = document.getElementById("check_device--modal");
let resultDeviceModal = document.getElementById("device--modal");
let btnDeviceModal = document.getElementById("open_device--modal");

// Алгоритм поиска
inputDeviceModal.addEventListener('input', function(){
    while(resultDeviceModal.firstChild){
        if(!resultDeviceModal.firstChild && inputDeviceModal.value.length == 0){
            break;
        }
        resultDeviceModal.removeChild(resultDeviceModal.firstChild);
        resultDeviceModal.style.display = 'none';
    }

    let text = inputDeviceModal.value.toLowerCase();

    devices.forEach(device => {

            if(device.includes(text) && inputDeviceModal.value.length > 0){
                let li = document.createElement('li');
                li.textContent = device;
                resultDeviceModal.appendChild(li);
                resultDeviceModal.style.display = 'block';
            }
        });
})

// закрытие всех вариантов при нажатии вне блока
document.addEventListener('click', (e) => {
        if( !resultDeviceModal.contains(e.target) && e.target != btnDeviceModal){
            while(resultDeviceModal.firstChild){
                resultDeviceModal.removeChild(resultDeviceModal.firstChild);
                resultDeviceModal.style.display = 'none';
            }
        }
})

// открытие / закрытие всех вариантов при нажатии на кнопку
btnDeviceModal.addEventListener('click', function(){
    if(window.getComputedStyle(resultDeviceModal).display == 'none'){
        while(resultDeviceModal.firstChild){
            resultDeviceModal.removeChild(resultDeviceModal.firstChild);
            resultDeviceModal.style.display = 'none';
        }
    
        devices.forEach(device => {
            let li = document.createElement('li');
            li.textContent = device;
            resultDeviceModal.appendChild(li);
            resultDeviceModal.style.display = 'block';
        });
    }
    else{
        while(resultDeviceModal.firstChild){
            resultDeviceModal.removeChild(resultDeviceModal.firstChild);
            resultDeviceModal.style.display = 'none';
        }
    }
})

// Выбор нужного варианта

resultDeviceModal.addEventListener('click', (e) => {

    let device = document.querySelectorAll('#device--modal li');

    if (device){
        for(let i = 0; i < device.length; i++){
            if(e.target == device[i]){
                inputDeviceModal.value = e.target.textContent;
            }
        }

        while(resultDeviceModal.firstChild){
            resultDeviceModal.removeChild(resultDeviceModal.firstChild);
            resultDeviceModal.style.display = 'none';
        }
    }
})