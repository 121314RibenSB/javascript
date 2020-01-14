/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/
var euSon = "Profe" + " que " + " conta " + " JavaScript ";
alert(euSon);

/* Si hacemos esto pondá Profe que conta JavaScript */

var oficio = "Profe";
var longura = oficio.length;
alert(longura);

/* Al hacer esto nos dara cuantos caracteres tiene la palabra Profe */

var oficio = "Profe";
var rebanada = oficio.slice(3,5);
alert(rebanada);

/* Al hacer esto nos mostrará las dos ultimas letras de la palabra profe

P  R  O  F  E
0  1  2  3  4 

Empieza en la 0 entonces contamos y el 3 es la F y la 4 es la E por eso 
nos muestra FE al hacer esto.*/

var pan = "Hola";
var pescado = pan.indexOf("l")
alert(pescado);

/* Al hacer lo que está escrito arriba nos mostrará en que posición
esta la letra l en la palabra HOLA, teniendo en cuenta que empieza 
en la posición 0.

H  O  L  A
0  1  2  3

Por eso el resultado que nos muestra es 2. */