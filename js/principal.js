var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//calculando imc do paciente 1
var paciente1 = document.querySelector("#primeiro-paciente")

var tdPeso = paciente1.querySelector(".info-peso")
var peso = tdPeso.textContent;

var tdAltura = paciente1.querySelector(".info-altura")
var altura = tdAltura.textContent;

var tdImc = paciente1.querySelector(".info-imc")

var imc = peso / (altura * altura);

tdImc.textContent = Math.round(imc);


//calculando imc do paciente 2
var paciente2 = document.querySelector("#segundo-paciente")

var tdPeso = paciente2.querySelector(".info-peso")
var peso = tdPeso.textContent;

var tdAltura = paciente2.querySelector(".info-altura")
var altura = tdAltura.textContent;

var tdImc = paciente2.querySelector(".info-imc")

var imc = peso / (altura * altura);

tdImc.textContent = Math.round(imc);


//calculando imc do paciente 3
var paciente3 = document.querySelector("#terceiro-paciente")

var tdPeso = paciente3.querySelector(".info-peso")
var peso = tdPeso.textContent;

var tdAltura = paciente3.querySelector(".info-altura")
var altura = tdAltura.textContent;

var tdImc = paciente3.querySelector(".info-imc")

var imc = peso / (altura * altura);

tdImc.textContent = Math.round(imc);


//calculando imc do paciente 4
var paciente4 = document.querySelector("#quarto-paciente")

var tdPeso = paciente4.querySelector(".info-peso")
var peso = tdPeso.textContent;

var tdAltura = paciente4.querySelector(".info-altura")
var altura = tdAltura.textContent;

var tdImc = paciente4.querySelector(".info-imc")

var imc = peso / (altura * altura);

tdImc.textContent = Math.round(imc);


//calculando imc do paciente 5
var paciente5 = document.querySelector("#quinto-paciente")

var tdPeso = paciente5.querySelector(".info-peso")
var peso = tdPeso.textContent;

var tdAltura = paciente5.querySelector(".info-altura")
var altura = tdAltura.textContent;

var tdImc = paciente5.querySelector(".info-imc")

var imc = peso / (altura * altura);

tdImc.textContent = Math.round(imc);