const calcular = document.getElementById('calcular');

function losango () {
    const diagonalMaior = document.getElementById('diagonalmaior').value;
    const diagonalMenor = +document.getElementById('diagonalmenor').value;
    const resultado = document.getElementById('resultado');

    if (diagonalMaior !== '' && diagonalMenor !== '') {

        const areaLosango = ((diagonalMaior * diagonalMenor) / 2).toFixed(2);

        resultado.textContent = `A área do losango é ${areaLosango}.`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', losango);