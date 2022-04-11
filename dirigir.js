function pulaLinha() {
  document.write("<br>");
}

function mostra(frase) {
  document.write(frase);
  pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if (idade >= 18 && temCarteira == "S") {

      mostra("Você tem idade para dirigir!");

} else {
  mostra("Você não tem idade para dirigir!")
}
