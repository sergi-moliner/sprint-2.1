/* Exercici 1 */

let edat = 17;
const potConduir = edat >= 18 ? 'Pots conduir' : 'No pots conduir';

console.log(potConduir);

/* Exercici 2 */

let num1 = 18;
let num2 = 14;

const numMesGran = num1 > num2 ? num1 : num2;

console.log(`El ${numMesGran} es més gran.`);

/* Exercici 3 */

const trobarMax = (a, b, c) => (a > b) ? (a > c ? a : c) : (b > c ? b : c);

const numeros = trobarMax(4, 8, 3);

console.log(numeros);

/* Exercici 4 */

let pares = [];
let impares = [];

function parOimpar(array){
    for (nb of array){
        (nb % 2 == 0) ? pares.push(nb) : impares.push(nb);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
parOimpar(array);

console.log(`Numeros pares: ${pares}.`);
console.log(`Numeros impares: ${impares}.`);