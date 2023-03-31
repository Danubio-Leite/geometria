const calcular = document.getElementById('calcular');

function trapezio () {
    const baseMaior = document.getElementById('basemaior').value;
    const baseMenor = document.getElementById('basemenor').value;
    const altura = +document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (baseMaior !== '' && baseMenor !== '' && altura !== '') {

        const areaTrapezio = (((parseInt(baseMaior) + parseInt(baseMenor)) * altura) / 2 ).toFixed(2);

        resultado.textContent = `A área do trapézio é ${areaTrapezio}.`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', trapezio);