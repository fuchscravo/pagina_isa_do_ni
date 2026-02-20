let interagiuComRange = false;

const intensidadeInput = document.getElementById("Intensidade");
const resultado = document.getElementById("resultado");

// 1. Detecta interação com o range (antes do clique)
intensidadeInput.addEventListener("input", function () {
    interagiuComRange = true;
});

// 2. Função do botão
function atualizarResultado() {
    if (interagiuComRange) {
        let valor = parseInt(intensidadeInput.value);
        resultado.innerHTML = "A intensidade do amor é: " + valor + "% ❤️";
    } else {
        resultado.innerHTML = "Arraste o slider primeiro! 😤";
    }
}