var nome = "Marcela"

var notaDoPrimeiroBimestre = 10
var notaDoSegundoBimestre = 9
var notaDoTerceiroBimestre = 8
var notaDoQuartoBimestre = 7 

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vinda, " + nome + "!")
console.log(notaFixada) 

// Aula sobre variáveis, strings, console.log, toFixed e operações matemáticas
// Construção de uma calculadora de média

if (notaFixada < 5){
  console.log ("Você reprovou")
}
else{
  console.log ("Parabéns, você foi aprovada!")
}  

//Desafio 1: Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não

//Desafio 5: Colocar a conta inteira da média em apenas uma linha