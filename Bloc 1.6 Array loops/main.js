/* Exercici 1 */

let noms = ['Anna', 'Bernat', 'Clara'];

noms.forEach(nom => console.log(nom));

/* Exercici 2 */

let nombres = ['Anna', 'Bernat', 'Clara'];

for (const nom of nombres){
    console.log(nom);
}

/* Exercici 3 */

let numeros = [1, 2, 3, 4, 5, 6]

const arrayParells = numeros.filter(numero => numero % 2 == 0);

console.log(arrayParells);

/* Exercici 4 */

let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };

for (const key in obj){
    console.log(key, ':', obj[key]);
}