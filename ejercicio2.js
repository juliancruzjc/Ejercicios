//Crea una función que recibe 4 parámetros, cada uno con un número,
//y devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar
//que funciona correctamente y muestra el resultado en la consola.

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var calculomedia = 0;

a = parseInt(prompt('Digita un numero a'))
b = parseInt(prompt('Digita un numero b'))
c = parseInt(prompt('Digita un numero c'))
d = parseInt(prompt('Digita un numero d'))

calculomedia = suma (a,b,c,d);
function suma(nA, nB, nC, nD) {
    const resultado = (nA+nB+nC+nD) /4;

    console.log('La media de los 4 datos es' + resultado);
}