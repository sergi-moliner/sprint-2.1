/* Exercici 1 */

function promesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const resuelto = true;
            if (resuelto) {
                resolve('Hola, món.');
            } else {
                reject(new Error('No funciona'));
            }
        }, 2000);
    });
}

/* Exercici 2 */

promesa()
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.error(error.message);
    });

/* Exercici 3 */

let input = 'Holo'

function promiseReject() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input == 'Hola')
                resolve('"Hola" bien escrito')
            else{
                reject(new Error('No hay "Hola".'))
            }
        }, 2000);
    });
}

promiseReject()
    .then((resultado) => {
        console.log('Success:', resultado)
    })
    .catch((razon) => {
        console.error('Error:', razon.message);
    });

/* Exercici 4 */

async function asyncFunction(){

    const resultat = await promesa();
    console.log('Async result:', resultat);
}

/* Exercici 5 */

async function asyncFunction(){

    try {
        const resultat = await promesa();
        console.log('Async result:', resultat);
    } catch (error) {
        console.error('Error:', error.message)
    }
}

asyncFunction();