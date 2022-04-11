var tanque = 40
var caminhoComGasolina = 480
var consumoDeGasolina = (480/40)
var caminhoComAlcool = 300
var consumoComAlcool = (300/40)
function pulaLinha() {
    document.write("<br>")
    document.write("<br>")
}

document.write("A distância percorrida é " + consumoDeGasolina + " litros")
pulaLinha();
document.write("A distância percorrida é " + consumoComAlcool + " litros")
pulaLinha();
