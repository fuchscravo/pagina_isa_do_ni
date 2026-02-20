let interagiuComRange = false;

const intensidadeInput = document.getElementById("Intensidade");
const resultado = document.getElementById("resultado");
const botao = document.getElementById("btnCalcular");

intensidadeInput.addEventListener("input", function () {
    interagiuComRange = true;
});

botao.addEventListener("click", function () {
    if (interagiuComRange) {
        let valor = parseInt(intensidadeInput.value);
        resultado.innerHTML = "A intensidade do amor é: " + valor + "% ❤️";
    } else {
        resultado.innerHTML = "Interaja com o slider antes de calcular.";
    }
});