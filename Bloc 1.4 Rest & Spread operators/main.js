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

/* Exercici 3 */

const objecte1 = {
    mensaje1: 'primera cosa',
    mensaje2: 'segunda cosa'
};

const objecte2 = { ...objecte1 };
objecte2.mensaje1 = "cosa nueva";

console.log("objecte1:", objecte1);
console.log("objecte2:", objecte2);

/* Exercici 4 */

const arrayCosas = ['tostada', 'mantequilla', 14, '85-20', 1, 'mermelada'];

const [primeraCosa, segundaCosa, , , , ] = arrayCosas;
const [ , , ...restoArray] = arrayCosas;

const var1 = [primeraCosa, segundaCosa];
const var2 = restoArray;

console.log(var1);
console.log(var2);