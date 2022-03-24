var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML =
      "Você deve digitar um número de 0 a 10. Você tem mais " +
      tentativas +
      " tentativas.";
  } else if (chute > numeroSecreto) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML =
      "O número é menor que esse. Você tem mais " + tentativas + " tentativas.";
  } else if (chute < numeroSecreto) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML =
      "O número é maior que esse. Você tem mais " + tentativas + " tentativas.";
  } else {
    elementoResultado.innerHTML = "Errou";
  }

  if (tentativas == 0 || tentativas < 0) {
    elementoResultado.innerHTML =
      "Acabaram as suas tentativas, o número secreto era " +
      numeroSecreto +
      ".";
  }
}

function JogarNovamente() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;
  resultado.innerHTML = "";
  valor.value = "";
}
