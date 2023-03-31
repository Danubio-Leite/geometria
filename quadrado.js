const calcular = document.getElementById('calcular');

function quadrado () {
    const lado = document.getElementById('lado').value;
    const resultado = document.getElementById('resultado');

    if (lado !== '') {

        const areaQuadrado = (lado * lado).toFixed(2);

        resultado.textContent = `A área do quadrado é ${areaQuadrado}.`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', quadrado);