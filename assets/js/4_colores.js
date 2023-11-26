// Cuadrados de colores

const cuadradoAzul = document.querySelector('#azul');
const cuadradoRojo = document.querySelector('#rojo');
const cuadradoVerde = document.querySelector('#verde');
const cuadradoAmarillo = document.querySelector('#amarillo');

const negro = (elemento) => (elemento.style.backgroundColor= 'black');

//puse "elemento" aquí arriba pero sigo sin enteder por qué hacerlo

cuadradoAzul.addEventListener('click', () => negro(cuadradoAzul));
cuadradoRojo.addEventListener('click', () => negro(cuadradoRojo));
cuadradoVerde.addEventListener('click', () => negro(cuadradoVerde));
cuadradoAmarillo.addEventListener('click', () => negro(cuadradoAmarillo));

// function Azul() {
//     cuadradoAzul.style.backgroundColor ='#000';
// }
// cuadradoAzul.addEventListener('click',Azul);

// function Rojo() {
//     cuadradoRojo.style.backgroundColor ='#000';
// }
// cuadradoRojo.addEventListener('click',Rojo);

// function Verde() {
//     cuadradoVerde.style.backgroundColor ='#000';
// }
// cuadradoVerde.addEventListener('click',Verde);

// function Amarillo() {
//     cuadradoAmarillo.style.backgroundColor ='#000';
// }
// cuadradoAmarillo.addEventListener('click',Amarillo);

// Cambio de color cuadrado1

function crearNuevoDiv(color){
    const newDiv = document.createElement('div')
    newDiv.style.width = '200px'
    newDiv.style.height = '200px'
    newDiv.style.border = '2px'
    newDiv.style.borderStyle = 'solid'
    newDiv.style.marginBottom = '20px'
    newDiv.style.backgroundColor = color
    document.body.appendChild(newDiv)
}

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

    else if (event.key === 'q') {
        crearNuevoDiv('#773d94')
    }
    else if (event.key === 'w') {
        crearNuevoDiv('#943d8a')
    }
    else if (event.key === 'e') {
        crearNuevoDiv('#c22760')
    }
    key.style.backgroundColor = colorkey1
})