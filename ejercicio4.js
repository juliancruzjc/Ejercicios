//Como hemos visto en las clases anteriores, en CSS tenemos dos tipos de cálculo para las dimensiones de un elemento: border-box y content-box.
//Vamos a realizar un calculador al que le pasaremos 4 parámetros y
//nos devolverá el ancho del contenido, en caso de ser border-box o el ancho total de la caja, en caso de ser content-box.

var tipoBox = 0;
var tipoCaja = 1;
const padding = 10;
const width = 300;
const border = 10;

var calcularCaja = 0;

tipo = parseInt(prompt("Ingresa el tipo  de caja a dibuja // 0 = BORDE / 1 = CONTENT"));
calcularCaja = caja (tipo, padding, width, border);

function caja (tipoCaja, p, w, b){
    if (tipoCaja === 0){
        console.log("El width del contenido es: "+ w + "pixeles");
    }else if (tipoCaja === 1){
        console.log("El width del contenido es: "+ p+w+b +" pixeles");
    }else{
        console.log("Error");
    }
}