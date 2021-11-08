let menu = document.querySelector('#menu');

let menuDisplay = document.querySelector('#menuDisplay')

menu.addEventListener('click', ()=>{
    if(menuDisplay.classList.contains('cerrado')){
        menuDisplay.classList.remove('cerrado');
        menuDisplay.classList.add('aside');
    }else{
        menuDisplay.classList.add('cerrado');
        menuDisplay.classList.remove('aside');
    }
});

// SECTION PRODUCT

const imageProduct1 = document.querySelector('#imgProduct1');
const imageProduct2 = document.querySelector('#imgProduct2');
const imageProduct3 = document.querySelector('#imgProduct3');
const imageProduct4 = document.querySelector('#imgProduct4');

const btnimg1 = document.querySelector('#btnImg1');
const btnimg2 = document.querySelector('#btnImg2');
const btnimg3 = document.querySelector('#btnImg3');
const btnimg4 = document.querySelector('#btnImg4');

btnimg1.addEventListener('click', ()=>{
    imageProduct1.style["z-index"] = "9";
    imageProduct2.style["z-index"] = "3";
    imageProduct3.style["z-index"] = "3";
    imageProduct4.style["z-index"] = "3";

    btnimg1.style['background-color'] = '#0007';
    btnimg2.style['background-color'] = '#ffff';
    btnimg3.style['background-color'] = '#ffff';
    btnimg4.style['background-color'] = '#ffff';
});
btnimg2.addEventListener('click', ()=>{
    imageProduct1.style["z-index"] = "3";
    imageProduct2.style["z-index"] = "9";
    imageProduct3.style["z-index"] = "3";
    imageProduct4.style["z-index"] = "3";

    btnimg1.style['background-color'] = '#ffff';
    btnimg2.style['background-color'] = '#0007';
    btnimg3.style['background-color'] = '#ffff';
    btnimg4.style['background-color'] = '#ffff';
});
btnimg3.addEventListener('click', ()=>{
    imageProduct1.style["z-index"] = "3";
    imageProduct2.style["z-index"] = "3";
    imageProduct3.style["z-index"] = "9";
    imageProduct4.style["z-index"] = "3";

    btnimg1.style['background-color'] = '#ffff';
    btnimg2.style['background-color'] = '#ffff';
    btnimg3.style['background-color'] = '#0007';
    btnimg4.style['background-color'] = '#ffff';
});
btnimg4.addEventListener('click', ()=>{
    imageProduct1.style["z-index"] = "3";
    imageProduct2.style["z-index"] = "3";
    imageProduct3.style["z-index"] = "3";
    imageProduct4.style["z-index"] = "9";

    btnimg1.style['background-color'] = '#ffff';
    btnimg2.style['background-color'] = '#ffff';
    btnimg3.style['background-color'] = '#ffff';
    btnimg4.style['background-color'] = '#0007';
});