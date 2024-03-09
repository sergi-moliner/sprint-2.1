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