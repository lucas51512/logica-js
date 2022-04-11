var portuguachega = 1500;
var anosatuais = 2019;
var tempoparafilhos = 28
var media = (anosatuais - portuguachega);
var resultado = (media/tempoparafilhos);

function pulaLinha(){
  document.write("<br>");
}

function mostra(paragrafo){
  document.write("<p>" + paragrafo + "</p>");
}

mostra("<big>O resultado é " + Math.round(resultado) + " gerações</big>");
pulaLinha();
