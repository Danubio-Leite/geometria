const calcular = document.getElementById('calcular');

function paralelogramo () {
    const base = document.getElementById('base').value;
    const altura = +document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (base !== '' && altura !== '') {

        const areaParalelogramo = ((base * altura)).toFixed(2);

        resultado.textContent = `A área do paralelogramo é ${areaParalelogramo}.`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', paralelogramo);