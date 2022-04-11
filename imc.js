function pulaLinha() {
  document.write("<br>");
  document.write("<br>");
}

function mostra(frase) {
  pulaLinha();
  document.write(frase);

}

function calculaImc(altura, peso) {
  return peso / (altura * altura);
}

var nome = prompt("informe o seu nome");
var alturaInformada = prompt(nome + ", informe sua altura");
var pesoInformado = prompt(nome + ", informe seu peso");

var imc = calculaImc(alturaInformada, pesoInformado);
document.write(nome + ", o seu IMC é " + Math.round(imc));

if (imc < 18.5) {
  mostra("Você está abaixo do recomendado.");
}

if (imc >= 18.5) {
  if(imc <= 35)
  mostra("Seu IMC está excelente!");
}

if (imc > 35) {
  msotra("Você está acima do recomendado.");
}
