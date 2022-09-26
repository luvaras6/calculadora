const btn = document.querySelectorAll('button');
const display = document.querySelector('.value');

btn.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora(boton, display)
    })
});

function calculadora (boton, display) {
    switch (boton.textContent) {
        case 'AC':
            borrar(display);            
            break;

        case '=':
            calcular(display);            
            break;

        case 'sin':
            sin(display)
            break;

        case 'cos':
            cos(display)
            break;

        

        default:
            actualizar(display, boton);
            break;
    }
};

function borrar(display) {
    display.textContent = 0;    
};

function calcular(display) {
    display.textContent = eval(display.textContent) 
};

function actualizar(display, boton) {
    if (display.textContent == 0){
        display.textContent = '';
    }
    display.textContent += boton.textContent;    
};

function sin(){
    display.textContent = Math.sin(display.textContent)
}

function cos(){
    display.textContent = Math.cos(display.textContent)
}