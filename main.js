document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let primeiroNumero = parseFloat(document.getElementById("Primeiro número").value);
    let segundoNumero = parseFloat(document.getElementById("Segundo número").value);
    
    if (segundoNumero > primeiroNumero) {
        showPositiveMessage("O segundo número é maior que o primeiro!");
    } else {
        showNegativeMessage("O segundo número precisa ser maior que o primeiro!");
    }
});

function showPositiveMessage(message) {
    alert(message);
}

function showNegativeMessage(message) {
    alert(message);
}
