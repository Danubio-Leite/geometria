const calcular = document.getElementById('calcular');

function retangulo () {
    const base = document.getElementById('base').value;
    const altura = +document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (base !== '' && altura !== '') {

        const areaRetangulo = ((base * altura)).toFixed(2);

        resultado.textContent = `A área do retângulo é ${areaRetangulo}.`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', retangulo);