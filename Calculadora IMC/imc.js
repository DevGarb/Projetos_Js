const calcular = document.getElementById('calcular'); // VARIÁVEL GLOBAL

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') { // VALIDAÇÃO DOS INPUTS   ( !== '' ) = DIFERENTE DE VAZIO
        // alert('Calculando seu IMC...'); 

        const valorIMC = (peso / (altura * altura)).toFixed(2);  // CALCULO DO RESULTADO

        let classificacao = ""; // CLASSIFICAÇÃO

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        }
        else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!';
        }
        else if (valorIMC < 30) {
            classificacao = 'um pouco acima do peso.';
        }
        else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        }
        else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.';
        }
        else {
            classificacao = 'com obesidade grau III. Cuidado!!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`; // MOSTRANDO RESULTADO NA TELA - (textContent = busca conteúdo dentro da div)
    }
    else {
        resultado.textContent = 'Preencha todos os campos'
    }


}

calcular.addEventListener('click', imc) // QUANDO ALGUÉM CLICAR VAI EXECUTAR A FUNÇÃO 'IMC'