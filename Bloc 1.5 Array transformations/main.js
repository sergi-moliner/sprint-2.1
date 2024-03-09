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