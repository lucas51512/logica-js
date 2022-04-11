function pulaLinha() {

  document.write("<br>");

}

function mostra(frase) {
  document.write(frase);
  pulaLinha();
}

function sorteia(){

  return  Math.round(Math.random()*10);

}
var numeroPensado = sorteia();
var chute = parseInt(prompt("De seu chute!"));

if (chute == numeroPensado) {
  mostra("Parabéns, Você acertou!");
} else {
  mostra("Você errou! O número pensado foi " + numeroPensado);
}

if (chute > numeroPensado) {
  mostra("O número pensado foi menor que o sugerido.")
}
if (chute < numeroPensado) {
    mostra("O número pensado foi maior que o sugerido.")
}
