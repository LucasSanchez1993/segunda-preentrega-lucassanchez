//Bienvenido a mi segunda-preentrega

console.log("Poner la edad de la mascota");

let edadMascota = parseInt(prompt("¿Que edad tiene tu mascota?"));

  if (edadMascota < 20) {

    //si la edad de la mascota es mas que 0 se puede tratar.

    alert("Buenvenido por favor llene los datos.");

    console.log("Edad de la mascota es " + edadMascota);

  } 
  else {

    //no te dejaria abrir la pagina si supera los 20 años

    alert(

      "Lo siento no podemos tratar a tu mascota, no tenemos las herramientas necesaria y no queremos una mala praxis. Intenten entendernos. Muchas gracias y que tengas y lindo dia."

    );

  }
// los analisis y sus precios
class analisis{
  constructor(id,nombre, precio){
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.precio = precio;
  }
  toString = function () {
    return this.nombre + "( $" + this.precio.toFixed(2) + ")"
  };
}


let misAnalisis = [
  new analisis(1, "sangre", 7500),
  new analisis(2, "radiografia", 6002),
  new analisis(3, "orina", 4050),
  new analisis(4, "ecografia", 5000),
  new analisis(5, "cita regular", 3000),
];


  // cantidad de estudios que se quiere hacer.
  
// Cuantos estudios quiere hacer
 let cantAnalisis = parseInt(prompt("¿Cuantos analisis quieres hacer?"));
 if (cantAnalisis <=5) {
  console.log(" los analisis requeridos son " + cantAnalisis);
    alert("La cantidad de analisis es " + cantAnalisis);
 }
 else{
    alert("La cantidad de estudios supera la cantidad. Lo maximo es 5. Ante cualquier duda entre a consulta para ver los tipos. Gracias");
 }

 // Pondra los analisis.

let precioAnalisis = 0;

 for (let analisis = 1; analisis <=cantAnalisis; analisis++) {
  let tipoanalisis = prompt("¿Cual es el  analisis " + analisis + "?");

// Si es que existe el estudio requerido

let encontrado = misAnalisis.find(
  (unAnalisis) => unAnalisis.nombre === tipoanalisis.toUpperCase());

if (encontrado) {
  alert("analisis de " + tipoanalisis + " agendado ");
  precioAnalisis += encontrado.precio;
} else {
  alert("Uno de los analisis no tratamos");
  console.log("Uno de los analisis no tratamos");
}
};

// precios

console.log("-->Total a pagar es de " + precioAnalisis);

//Si pagar en un pago o si quiere pagar en 3 pagos
 const mododePago = parseInt(prompt("¿Como desea pagar en un pago o en 3 cuotas? 1: un pago, 2: 3 cuotas."));

let cuota = 3;
let costoEnCuota = precioAnalisis *0.10 / cuota;// se incrementa un 10%
let costoTotalCuotas = costoEnCuota ; 
let costoTotal = precioAnalisis + costoTotalCuotas;


if (mododePago) {
  mododePago == 1;
  alert("el costo a pagar es de: $" + parseInt(precioAnalisis));
   
}
if (mododePago) {
  mododePago == 2;
  alert("El total a pagar es de 3 cuotas de: $" + parseInt(costoTotalCuotas) + " con un total de: $" + parseInt(costoTotal));

  // REDONDEO CON CEIL
 console.log("Costo total de 3 cuotas de: "+ (Math.ceil(costoTotalCuotas)) + "con un total de: " + (Math.ceil(costoTotal)));
}

// Caracteristicas de paciente

function mascota(nombre,edad,peso) {
  console.log("el parametro 1 es ".concat(nombre));
  console.log("el parametro 1 es ".concat(edad));
  console.log("el parametro 1 es ".concat(peso));
}

let variable1 = prompt("Nombre de mascota");
let variable2 = parseInt(prompt("ingrese la edad"));
let variable3 = parseInt(prompt("ingrese el peso"));

alert("Nombre " + variable1 + " edad de " + variable2 + " y peso de mascota " + variable3);
mascota(variable1,variable2,variable3);
console.log("Nombre " + variable1 + " edad de " + variable2 + " y peso de mascota " + variable3);

// si el cliente quiere buscar un estudio a ver si lo tratamos

let precioPregunta = 0;
let existeAnalisis = prompt("¿Cual es el analisis que queres saber si tratamos?");
let siExite = misAnalisis.includes(existeAnalisis);
if (existeAnalisis) {
  alert("Si tratamos analisis de " + existeAnalisis);
} else {
  alert("No tratamos ese estudio. Lo siento");
}



