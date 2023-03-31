const calcular = document.getElementById('calcular');

function elipse () {
    const semiEixoMaior = document.getElementById('semimaior').value;
    const semiEixoMenor = document.getElementById('semimenor').value;
    const resultado = document.getElementById('resultado');
    const pi = 3.1415926535898;

    if (semiEixoMaior !== '' && semiEixoMenor !== '') {

        const areaElipse = (pi * semiEixoMaior * semiEixoMenor).toFixed(2);

        resultado.textContent = `A área da elipse é ${areaElipse}.`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', elipse);