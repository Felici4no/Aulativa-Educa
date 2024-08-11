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

document.addEventListener("DOMContentLoaded", function() {
    // Verifica se o item "startMath" existe no localStorage
    var start = localStorage.getItem('startMath');
});






function gerarNumeroAleatorio(min, max) {
    // Gera um número aleatório entre min e max (inclusivo)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
