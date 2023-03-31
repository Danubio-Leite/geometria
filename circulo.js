const calcular = document.getElementById('calcular');

function circulo () {
    const raio = document.getElementById('raio').value;
    const resultado = document.getElementById('resultado');
    const pi = 3.1415926535898;

    if (raio !== '') {

        const areaCirculo = (pi * (raio * raio)).toFixed(2);

        resultado.textContent = `A área do círculo é ${areaCirculo}.`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', circulo);