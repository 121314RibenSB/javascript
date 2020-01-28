/*
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/
function suma(a, b){
    document.write(a+b);
}
function resta(a, b){
    document.write(a-b);
}

function multiplicacion(m1, m2){
	document.write(m1*m2);
}

var respConta = prompt("Que operación + - x");


var resp1 = prompt("O teu primeiro número:");
resp1 = parseFloat(resp1);

var resp2 = prompt("O teu segundo número:");
resp2 = parseFloat(resp2);

if (respConta == "+"){
	suma(resp1,resp2);
}

 if(respConta == "-"){
 	resta(resp1,resp2);
 }

 if(respConta == "x"){
 	multiplicacion(resp1,resp2);
 }

 document.write(resp1 + resp2 = "respConta");


