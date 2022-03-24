function Converter() {
  var select = document.getElementById("temperatura");
  var selecaoTemperatura = select.options[select.selectedIndex].value;
  var cotacao = 0;
  var c = 27;
  var f = c * 1.8 + 32;
  var f1 = f.toFixed(1);

  switch (selecaoTemperatura) {
    case "farenheit": {
      cotacao = c * 1.8 + 32;
      break;
    }
    case "kelvin": {
      cotacao = c - 273;
      break;
    }
  }

  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmFarenheitNumerico = parseFloat(valor);
  var valorEmCelcius = valorEmFarenheitNumerico * cotacao;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O resultado em Celcius é " + valorEmCelcius.toFixed(0) + " graus";
  elementoValorConvertido.innerHTML = valorConvertido;
  console.log(valorEmCelcius);
}
