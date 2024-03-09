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