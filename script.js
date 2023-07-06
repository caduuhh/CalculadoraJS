const visor = document.querySelector('.visor');

let ultimoValor = [];
let resultado = [];

// Buttons manipulação
document.querySelectorAll('.botoes .numeros').forEach(numeros => {
    numeros.addEventListener('click', (e) => {

        let value = e.target.innerText;

        ultimoValor.push(value);
        convertToString();
        
    });
});

document.querySelectorAll('.botoes .sinal').forEach(sinais => {
    sinais.addEventListener('click', (e) => {

        let value = e.target.innerText;

        if(visor.innerText !== '0') {
            if(isNaN(ultimoValor[ultimoValor.length -1])) {
                ultimoValor.pop();
                ultimoValor.push(value);
                convertToString();
            } else {
                ultimoValor.push(value);
                convertToString();
            }
        }
    });
});

document.querySelector('.botoes .result').addEventListener('click', () => {
    if(ultimoValor !== []) {
        visor.innerText = eval(visor.innerText);
        ultimoValor = [];
        ultimoValor.push(visor.innerText);
        resultado = [];
        resultado.push(visor.innerText);

    }
});

document.querySelector('.reset').addEventListener('click', () => {
    ultimoValor = [];
    visor.innerText = '0';

});

function retirarUltimoEl() {
    visor.innerText = visor.innerText.slice(0, -1);
}

function convertToString() {
    let visorString = ultimoValor.join('');
    visor.innerText = visorString;
}

