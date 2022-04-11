var segredo = Math.round(Math.random() * 10);

var input = document.querySelector("input");
input.focus();

function verifica(){

  if (input.value == segredo) {
    alert("Você ACERTOU");

  } else {
    alert("Você ERROU!!!");
  }
    input.value = "";
}

var button = document.querySelector("button");
button.onclick = verifica;
