/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/

var ducias;
/*Declaramos una variable que se llama ducias*/
var numducias;
/*Declaramos una variable que se llama numducias*/
ducias = prompt("Cantas ducias de ovos leva unha tortilla?");
/*pregunta al usuario cantas ducias de ovos leva unha tortilla?*/
numducias= parseInt(ducias);
/*Convierte lo que pone el usuario a número, por ejemplo 2 ducias lo convierte en 2.*/
alert(ducias);
/*Esto muestra en una alerta lo que dijo el usuario*/
var ovos;
/*Declaramos la variable ovos*/
ovos = 12* numducias;
/*Esta es la operacion para saber cuantos huevos son el numero de ducias que introducimos
al principio*/
alert(ovos);
/*Esto muestra en una alerta el resultado de la cuenta anterior*/