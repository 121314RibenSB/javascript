/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/


function eurosAyens (eur){
return Number(eur * 122.49).toFixed(2);
}

function yensAeuros (yens){
return Number(yens / 122.49).toFixed(2);
}


document.write('<h2>Aplicación Bancaria Euros/Yens</h2>');

var rp;
rp = true;
while(rp == true){



var producto;
producto = prompt("Que producto quieres comprar?");


var resposta = prompt("Cuanto cuesta ese producto?");
var decimal = parseFloat(resposta);




var moneda;
moneda = prompt("Que moneda vas a utilizar euros o yens ?");

	if(moneda == "euros") {
		var vv = eurosAyens (decimal);
	
	document.write(producto + "      " + decimal + "   €  " + vv +  " ¥ " + '<br>');
	
	}

	
	
	else if (moneda == "yens"){
		var ss =  yensAeuros (decimal);
	
	document.write(producto + "      " + decimal + "   ¥  " + ss +  " € " + '<br>');

	}

rp = confirm("Quieres introducir otro producto?")

}

document.write("Un saludo");