/* Exercici 1 */

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array2 = ['a', 'b', 'c', 'd', 'e'];

let array3 = [...array1, ...array2];

console.log(array3);

/* Exercici 2 */

function suma (...numeros){
    let result = 0;

    for(let numero of numeros){
        result += numero;
    }
    return result;
}

let nums = [8, 3, 2, 7];
let resultado = suma(...nums);
console.log(resultado);
