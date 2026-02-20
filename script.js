function atualizarResultado() {

let intensidadeInput = document.getElementById("Intensidade");

if(intensidadeInput) {
    intensidadeInput.addEventListener("input", function() {
        let valor = parseInt(intensidadeInput.value);
        document.getElementById("resultado").innerHTML = "A intensidade do amor é: " + valor + "% ❤️";
    });
}
}

atualizarResultado();