/*Realizar la carga de sueldos por teclado hasta que se ingrese el cero. Almacenar todos los valores ingresados en un vector empleando el método push. Mostrar la suma de sueldos ingresados.*/

/* let sueldos = [];
let monto;

do {
    monto = parseInt(prompt('Ingrese el sueldo (0 para finalizar): '));
    if (monto != 0){
        sueldos.push(monto);
    }
} while (monto != 0);
let suma = 0;
for (let i = 0; i < sueldos.length; i++){
    suma = suma + sueldos[i];
};
document.write(`El total en sueldos a pagar es: ${suma}`); */

let sueldos = [];
let ingreso;

do {
    ingreso = parseInt(prompt('Ingrese el sueldo (o ingrese 0 para finalizar):'));
    if (!isNaN(ingreso)){
        sueldos.push(ingreso);}
        else{
            console.log('ingrese un numero valido')
        }
} while (ingreso != 0);
let sumaSueldos = sueldos.reduce((acumulador, sueldo) => acumulador + sueldo);
console.log('La suma de sueldos es:'+ sumaSueldos);