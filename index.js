function calcular() {
    var formulario = document.getElementById("formulario");
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value / 100;
  
    var imc = peso / (altura * altura);
    formulario.imc.value = imc.toFixed(2);
  
    if (imc < 18.5) {
      alert("Abaixo do Peso");
    } else if (imc <= 24.9) {
      alert("Peso Normal");
    } else if (imc <= 29.9) {
      alert("Sobrepeso");
    } else if (imc <= 34.9) {
      alert("Obesidade Grau I");
    } else if (imc <= 39.9) {
      alert("Obesidade Grau II");
    } else if (imc >= 40) {
      alert("Obesidade Grau III");
    } else {
      alert("Digite um valor válido.");
    }
  }