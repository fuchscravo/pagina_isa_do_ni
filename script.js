let interagiuComRange = false;

const intensidadeInput = document.getElementById("Intensidade");

// 1. Detecta interação com o range (antes do clique)
intensidadeInput.addEventListener("input", function () {
    interagiuComRange = true;
});

// 2. Função do botão
function atualizarResultado() {
    if (interagiuComRange) {
        let valor = parseInt(intensidadeInput.value);
      alert("A intensidade do amor é: " + valor + "% ❤️");
    } else {
        alert("Arraste o slider primeiro! 😤");
    }
}