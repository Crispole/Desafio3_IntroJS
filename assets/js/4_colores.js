// Cuadrados de colores

const cuadradoAzul = document.querySelector('#azul');
const cuadradoRojo = document.querySelector('#rojo');
const cuadradoVerde = document.querySelector('#verde');
const cuadradoAmarillo = document.querySelector('#amarillo');

function Azul() {
    cuadradoAzul.style.backgroundColor ='#000';
}
cuadradoAzul.addEventListener('click',Azul);

function Rojo() {
    cuadradoRojo.style.backgroundColor ='#000';
}
cuadradoRojo.addEventListener('click',Rojo);

function Verde() {
    cuadradoVerde.style.backgroundColor ='#000';
}
cuadradoVerde.addEventListener('click',Verde);

function Amarillo() {
    cuadradoAmarillo.style.backgroundColor ='#000';
}
cuadradoAmarillo.addEventListener('click',Amarillo);

// Cambio de color cuadrado1

let colorkey1;
const key = document.getElementById('cuadrado1')
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorkey1 = '#fff19e';
    }
    else if (event.key === 's') {
        colorkey1 = '#ffdc8a';
    }
    else if (event.key === 'd') {
        colorkey1 = '#ffba6b';
    }
    key.style.backgroundColor = colorkey1
})

// Cambio de color cuadrado2

let colorkey2;
const key1 = document.getElementById('cuadrado2')
document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        colorkey2 = '#773d94';
    }
    else if (event.key === 'w') {
        colorkey2 = '#943d8a';
    }
    else if (event.key === 'e') {
        colorkey2 = '#c22760';
    }
    key1.style.backgroundColor = colorkey2asd
})
