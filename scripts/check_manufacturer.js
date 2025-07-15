'use strict'

let manufacturers = ['apple', 'acer', 'asus', 'hp', 'dell', 'gigabyte', 'softline', 'hyperpc', 'iru', 'xiaomi', 'huawei', 'oppo'];
let inputManufacturer = document.getElementById('check_manufacturer');
let resultManufacturer = document.getElementById('manufacturers');
let btnManufacturer = document.getElementById('open_manufacturers');


// section call-a-master

// Алгоритм поиска
inputManufacturer.addEventListener('input', function(){

    while(resultManufacturer.firstChild){
        if(!resultManufacturer.firstChild && inputManufacturer.value.length == 0){
            break;
        }
        resultManufacturer.removeChild(resultManufacturer.firstChild);
        resultManufacturer.style.display = 'none';
    }

    let text = inputManufacturer.value.toLowerCase();

        manufacturers.forEach(manufacturer => {

            if(manufacturer.includes(text) && inputManufacturer.value.length > 0){
                let li = document.createElement('li');
                li.textContent = manufacturer;
                resultManufacturer.appendChild(li);
                resultManufacturer.style.display = 'block';
            }
        });
})

// закрытие всех вариантов при нажатии вне блока
document.addEventListener('click', (e) => {

    if( !resultManufacturer.contains(e.target) && e.target != btnManufacturer){
        while(resultManufacturer.firstChild){
            resultManufacturer.removeChild(resultManufacturer.firstChild);
            resultManufacturer.style.display = 'none';
        }
    }
})

// открытие / закрытие всех вариантов при нажатии на кнопку
btnManufacturer.addEventListener('click', function(){

    if(window.getComputedStyle(resultManufacturer).display == 'none'){
        while(resultManufacturer.firstChild){
            resultManufacturer.removeChild(resultManufacturer.firstChild);
            resultManufacturer.style.display = 'none';
        }
    
        manufacturers.forEach(manufacturer => {
            let li = document.createElement('li');
            li.textContent = manufacturer;
            resultManufacturer.appendChild(li);
            resultManufacturer.style.display = 'block';
        });
    }
    else{
        while(resultManufacturer.firstChild){
            resultManufacturer.removeChild(resultManufacturer.firstChild);
            resultManufacturer.style.display = 'none';
        }
    }
})

// Выбор нужного варианта

resultManufacturer.addEventListener('click', (e) => {

    let manufacturer = document.querySelectorAll('#manufacturers li');

    if (manufacturer){
        for(let i = 0; i < manufacturer.length; i++){
            if(e.target == manufacturer[i]){
                inputManufacturer.value = e.target.textContent;
            }
        }

        while(resultManufacturer.firstChild){
            resultManufacturer.removeChild(resultManufacturer.firstChild);
            resultManufacturer.style.display = 'none';
        }
    }
})



// form-call-a-master

let inputManufacturerModal = document.getElementById("check_manufacturer--modal");
let resultManufacturerModal = document.getElementById("manufacturer--modal") ;
let btnManufacturerModal = document.getElementById("open_manufacturers--modal") ;

// Алгоритм поиска
inputManufacturerModal.addEventListener('input', function(){

    while(resultManufacturerModal.firstChild){
        if(!resultManufacturerModal.firstChild && inputManufacturerModal.value.length == 0){
            break;
        }
        resultManufacturerModal.removeChild(resultManufacturerModal.firstChild);
        resultManufacturerModal.style.display = 'none';
    }

    let text = inputManufacturerModal.value.toLowerCase();

        manufacturers.forEach(manufacturer => {

            if(manufacturer.includes(text) && inputManufacturerModal.value.length > 0){
                let li = document.createElement('li');
                li.textContent = manufacturer;
                resultManufacturerModal.appendChild(li);
                resultManufacturerModal.style.display = 'block';
            }
        });
})

// закрытие всех вариантов при нажатии вне блока
document.addEventListener('click', (e) => {

    if( !resultManufacturerModal.contains(e.target) && e.target != btnManufacturerModal){
        while(resultManufacturerModal.firstChild){
            resultManufacturerModal.removeChild(resultManufacturerModal.firstChild);
            resultManufacturerModal.style.display = 'none';
        }
    }
})

// открытие / закрытие всех вариантов при нажатии на кнопку
btnManufacturerModal.addEventListener('click', function(){

    if(window.getComputedStyle(resultManufacturerModal).display == 'none'){
        while(resultManufacturerModal.firstChild){
            resultManufacturerModal.removeChild(resultManufacturerModal.firstChild);
            resultManufacturerModal.style.display = 'none';
        }
    
        manufacturers.forEach(manufacturer => {
            let li = document.createElement('li');
            li.textContent = manufacturer;
            resultManufacturerModal.appendChild(li);
            resultManufacturerModal.style.display = 'block';
        });
    }
    else{
        while(resultManufacturerModal.firstChild){
            resultManufacturerModal.removeChild(resultManufacturerModal.firstChild);
            resultManufacturerModal.style.display = 'none';
        }
    }
})

// Выбор нужного варианта

resultManufacturerModal.addEventListener('click', (e) => {

    let manufacturer = document.querySelectorAll('#manufacturer--modal li');

    if (manufacturer){
        for(let i = 0; i < manufacturer.length; i++){
            if(e.target == manufacturer[i]){
                inputManufacturerModal.value = e.target.textContent;
            }
        }

        while(resultManufacturerModal.firstChild){
            resultManufacturerModal.removeChild(resultManufacturerModal.firstChild);
            resultManufacturerModal.style.display = 'none';
        }
    }
})
