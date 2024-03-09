/* Exercici 1 */

const array1 = [1, 2, 3, 4];

const numerosCuadrats = array1.map(numero => numero ** 2);

console.log(numerosCuadrats);

/* Exercici 2 */

const array2 = [1, 2, 3, 4];

const numerosPares = array2.filter(esPar => esPar % 2 == 0);

console.log(numerosPares);

/* Exercici 3 */

const array3 = [1, 10 , 8, 11];

const mayorDiez = array3.find(num => num > 10);

console.log(mayorDiez);

/* Exercici 4 */

const array4 = [13, 7, 8, 21];

const sumaTotal = array4.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(sumaTotal);

/* Exercici 5 */

const array5 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

const funcionMultitasking = array5.filter((masDiez) => masDiez >= 10).map(porDos => porDos * 2).reduce((acumulador, valor) => acumulador + valor, 0);

console.log(funcionMultitasking);

/* Exercici 6 */

const array6 = [11, 12, 13, 14];

const todosMayoresDeDiez = array6.every(numero => numero > 10);
const algunoMayorDeDiez = array6.some(numero => numero > 10);

console.log(todosMayoresDeDiez);
console.log(algunoMayorDeDiez);