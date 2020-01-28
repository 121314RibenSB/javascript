/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado:Sergio Rivero González 
*/
var producto1;
var producto2;
var producto3;
var total;
var numproducto1;
var numproducto2;
var numproducto3;
var tredondeado

producto1 = prompt("Cuanto cuesta el producto1?");
producto2 = prompt("Cuanto cuesta el producto2?");
producto3 = prompt("Cuanto cuesta el producto3?");

numproducto1 = parseFloat(producto1);


numproducto2 = parseFloat(producto2);


numproducto3 = parseFloat(producto3);


total = numproducto1 + numproducto2 + numproducto3;


tredondeado = Number(total).toFixed(2);
document.write(tredondeado);


