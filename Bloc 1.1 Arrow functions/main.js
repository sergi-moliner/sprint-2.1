/* Exercici 1 */

const add = (a, b) => a + b;

/* Exercici 2 */

const randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);

/* Exercici 3 */

class Person{
    constructor(name) {
        this._name = name;
    }

    greet = () => {
        console.log(`Hola, ${this._name}`);
    }
}

const persona = new Person("Manolito");
persona.greet();

/* Exercici 4 */

const printNumbers = (arrayNumeros) => {
    let i = 0;
    while (i < arrayNumeros.length) {
        console.log(arrayNumeros[i]);
        i++;
    }
}

const numbers = [1, 2, 3, 4, 5, 6];
printNumbers(numbers);

/* Exercici 5 */
function saludar(){
    console.log('Hola, despues de 3 segundos');
}

const saludo = () => setTimeout(saludar, 3000);
saludo();
