'use strict'

let devices = ['компьютер', 'ноутбук', 'моноблок', 'айфон', 'смартфон'];
let inputDevice = document.getElementById('check_device');
let resultDevice = document.getElementById('devices');
let btnDevice = document.getElementById('open_devices');

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