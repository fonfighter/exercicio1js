const form = document.getElementById('formjs');

var numA = document.getElementById('numeroA');
var numB = document.getElementById('numeroB');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if(numB >= numA) {
        alert("Formulário válido!")
    } else if ( numB == numA) {
        alert("Os valores são iguais, tente novamente")
    } else {
        alert("Formúlário inválido! O número B deve ser maior que o número A")
        }
})