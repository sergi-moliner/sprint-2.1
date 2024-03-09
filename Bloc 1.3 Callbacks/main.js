/* Exercici 1 */

(function () {
    function procesar(num, callback){
        callback(num);
    }

    function callback(x){
        console.log(`El dato procesado es ${x}.`);
    }

    procesar(45346455, callback);
})();

/* Exercici 2 */

(function () {
    function calculadora(num1, num2, callback){
        const result = callback(num1, num2);
        console.log(`El restultat de ${num1} + ${num2} es: ${result}`)
    }

    function callback(num1, num2){
        return num1 + num2;
    }

    calculadora(7, 3, callback);
})();