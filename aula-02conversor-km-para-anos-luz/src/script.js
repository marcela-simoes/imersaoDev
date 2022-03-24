function ConverterAL() {
  var valorDistancia = document.getElementById("valor"); 
  var valor = valorDistancia.value;

  var valorAL = parseFloat(valor);

  var valorEmAL = valorAL * ( Math.pow (10, -18) * 10570);
  var valorFinalAL = valorEmAL;
  console.log(valorFinalAL);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertidoAL = "A distância em anos-luz é " + valorFinalAL + "ly";

  elementoValorConvertido.innerHTML = valorConvertidoAL;
}
