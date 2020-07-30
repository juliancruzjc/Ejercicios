//Crea una función que reciba como parámetro un número, que representará un precio,
//precio, ydevuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10,
//la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".

var a = 0;
var b = 0.21;
var calcularTotal =0;

a = parseInt(prompt('Digita un numero'))
calcularTotal = total (a,b);

function total (nA, nB) {
    const resultado = (nA*nB);
    console.log('Precio sin IVA:' + nA);
    console.log('Precio con IVA:' + (resultado + nA));
    console.log('Valor IVA:' , resultado);
}