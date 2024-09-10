var nivel = 1;
var atividade = 1;
var gab = 0;

//Conquista
const conquistaMultiplicacao = [
    "Estrela do Multiplicador Rápido",
    "Troféu do Mestre da Tabuada",
    "Medalha de Multiplicação Instantânea",
    "Distintivo do Prodigio da Tabuada",
    "Escudo do Multiplicador Supremo",
    "Troféu de Domínio da Multiplicação",
    "Medalha de Fatoração Perfeita",
    "Distintivo de Calculadora Humana",
    "Escudo de Velocidade na Multiplicação",
    "Medalha de Campeão da Multiplicação",
    "Troféu de Estratégia de Multiplicação",
    "Escudo de Excelência na Tabuada",
    "Medalha de Grande Multiplicador",
    "Distintivo de Mestre dos Produtos",
    "Escudo de Virtuose dos Fatores"
];


function contentsMath() {
    // Armazena um valor no localStorage
    localStorage.setItem('startMath', true);

    // Redireciona para a nova página
    window.location.href = "contents.html";
}

function arithmeticMath() {
    // Armazena um valor no localStorage
    localStorage.setItem('arithmeticMath', true);

    // Redireciona para a nova página
    window.location.href = "classroom.html";
}

function start() {
    // Apresenta Nível e Atividade
    var nivelHtml = document.getElementById('nNivel');
    nivelHtml.innerHTML = nivel;

    var atividadeHtml = document.getElementById('nAtividade');
    atividadeHtml.innerHTML = atividade;

    // Gera números aleatórios
    min = 0;
    max = 10 * nivel; // Ajusta de acordo com o nível
    y = gerarNumeroAleatorio(min, max);
    x = gerarNumeroAleatorio(min, max);
    r = y * x;

    // Monta a questão
    montaQuestao(y, x, r);
}

function montaQuestao(y, x, r) {
    // Adiciona a questão no enunciado
    var questao = document.getElementById('questao');
    questao.innerHTML = `${y} x ${x}`;

    // Escolhe onde a resposta vai ficar
    gab = gerarNumeroAleatorio(1, 4);

    // Mostra nas opções
    var a = document.getElementById('btn_a');
    var b = document.getElementById('btn_b');
    var c = document.getElementById('btn_c');
    var d = document.getElementById('btn_d');

    // Gerar opções
    if (gab == 1) {
        a.innerHTML = r;
        b.innerHTML = r + gerarNumeroAleatorio(5, 8);
        c.innerHTML = r - gerarNumeroAleatorio(1, 2);
        d.innerHTML = r + gerarNumeroAleatorio(3, 4);
    } else if (gab == 2) {
        a.innerHTML = r - gerarNumeroAleatorio(1, 2);
        b.innerHTML = r;
        c.innerHTML = r + gerarNumeroAleatorio(1, 2);
        d.innerHTML = r + gerarNumeroAleatorio(3, 4);
    } else if (gab == 3) {
        a.innerHTML = r + gerarNumeroAleatorio(1, 2);
        b.innerHTML = r - gerarNumeroAleatorio(1, 2);
        c.innerHTML = r;
        d.innerHTML = r + gerarNumeroAleatorio(3, 4);
    } else if (gab == 4) {
        a.innerHTML = r - gerarNumeroAleatorio(1, 2);
        b.innerHTML = r + gerarNumeroAleatorio(5, 8);
        c.innerHTML = r + gerarNumeroAleatorio(1, 2);
        d.innerHTML = r;
    } else {
        console.log('Erro no gerar questões');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    start();
});

function gerarNumeroAleatorio(min, max) {
    // Gera um número aleatório entre min e max (inclusivo)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function escolha(resposta) {
    
    if (resposta == ''){ // 
        if(atividade <= 0 ){
            atividade = 0;
        }else{
            atividade--;
        }
        return start();
    }
    else if (resposta == 'a' && gab == 1 || resposta == 'b' && gab == 2 || resposta == 'c' && gab == 3 || resposta == 'd' && gab == 4) {
        atividade++;
        resposta ='';
        
        if (atividade % 10 === 0) {
            nivel ++;  // Incrementa o nível
        }
        classific(atividade,nivel);
        return start(); // Carrega a próxima pergunta
    } else {
        //alert('Errou! Tente novamente.');
        
        return start();
    }
}

// Adiciona eventos de clique aos botões
document.getElementById('btn_a').addEventListener('click', function() { escolha('a'); });
document.getElementById('btn_b').addEventListener('click', function() { escolha('b'); });
document.getElementById('btn_c').addEventListener('click', function() { escolha('c'); });
document.getElementById('btn_d').addEventListener('click', function() { escolha('d'); });

function classific(atividade,nivel){
    // Pega todos os elementos <strong>
    var allStrongTags = document.querySelectorAll('p strong');

    // Pega o texto do primeiro strong (primeira <p>)
    allStrongTags[0].textContent = conquista[nivel] // "Medalha de Principiante"

    allStrongTags[1].textContent = 11 * atividade; // "0"
}