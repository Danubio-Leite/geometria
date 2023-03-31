const calcular = document.getElementById('calcular');

function triangulo () {
    const base = document.getElementById('base').value;
    const altura = +document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (base !== '' && altura !== '') {

        const areaTriangulo = ((base * altura) / 2).toFixed(2);

        resultado.textContent = `A área do triângulo é ${areaTriangulo}.`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', triangulo);