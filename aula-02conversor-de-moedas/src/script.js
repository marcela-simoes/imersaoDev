function Converter() {
  var select = document.getElementById("moeda");
  var selecaoMoeda = select.options[select.selectedIndex].value;
  var cotacao = 0;
  switch (selecaoMoeda) {
    case "dol": {
      cotacao = 5.5;
      break;
    }
    case "eur": {
      cotacao = 7;
      break;
    }
    case "btc": {
      cotacao = 192932.59;
      break;
    }
  }

  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * cotacao;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Reais é R$ " + valorEmReal.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
  console.log(valorEmReal);
}
