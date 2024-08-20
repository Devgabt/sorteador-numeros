// Obtém referências para os botões e elementos do DOM
const botaoReiniciar = document.getElementById('btn-reiniciar');
const botaoSortear = document.getElementById('btn-sortear');

// Função para sortear números aleatórios
function sortear() {
    // Obtém e converte os valores dos campos de entrada para números inteiros
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let resultado = document.getElementById('resultado'); // Referência ao elemento onde o resultado será exibido

    // Validação dos campos de entrada
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        // Se algum campo não for um número, exibe mensagem de erro
        resultado.innerHTML = `<label class="texto__paragrafo">Não deixe nenhum campo vazio.</label>`;
        return; // Sai da função para não prosseguir com a execução
    }

    if (de > ate) {
        // Se o valor mínimo for maior que o valor máximo, exibe mensagem de erro
        resultado.innerHTML = `<label class="texto__paragrafo">O valor mínimo não pode ser maior que o valor máximo.</label>`;
        return; // Sai da função para não prosseguir com a execução
    }

    // Verifica se a quantidade de números solicitados é possível no intervalo dado
    if (quantidade > (ate - de + 1)) {
        resultado.innerHTML = `<label class="texto__paragrafo">Não é possível gerar ${quantidade} números distintos dentro do intervalo de ${de} a ${ate}.</label>`;
        return; // Sai da função para não prosseguir com a execução
    }

    // Array para armazenar os números sorteados
    let numerosSorteados = [];
    
    // Sorteia os números até atingir a quantidade desejada
    while (numerosSorteados.length < quantidade) {
        let numeroSorteado = gerarNumeroAleatorio(de, ate); // Gera um número aleatório
        // Adiciona o número ao array se não estiver presente
        if (!numerosSorteados.includes(numeroSorteado)) {
            numerosSorteados.push(numeroSorteado);
        }
    }

    // Exibe os números sorteados na página
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados.join(', ')}</label>`;
    
    // Alterna o estado dos botões
    alterarStatusBotao();
}

// Função para gerar um número aleatório entre os valores de 'de' e 'ate'
function gerarNumeroAleatorio(de, ate) {
    return Math.floor(Math.random() * (ate - de + 1)) + de; // Gera um número no intervalo [de, ate]
}

// Função para reiniciar os campos e o estado dos botões
function reiniciar() {
    // Atualiza o texto do resultado para indicar que nenhum número foi sorteado
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Nenhum número foi sorteado ainda.</label>`;
    
    // Limpa os valores dos campos de entrada
    ['quantidade', 'de', 'ate'].forEach(id => {
        document.getElementById(id).value = '';
    });
    
    // Habilita o botão de sortear
    botaoSortear.removeAttribute('disabled');
    
    // Define o botão de reinício como desabilitado
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');
}

// Função para alterar o estado dos botões
function alterarStatusBotao() {
    // Verifica se o botão de reinício tem a classe 'container__botao-desabilitado'
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        // Se a classe estiver presente, remove-a e adiciona 'container__botao'
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        // Se a classe não estiver presente, remove 'container__botao' e adiciona 'container__botao-desabilitado'
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
    
    // Desativa o botão de sortear
    botaoSortear.setAttribute('disabled', true);
}