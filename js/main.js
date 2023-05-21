/* Variables y tipo de datos */

console.log("Practicando Js")

let num1 = 50;
let num2 = 10;
let saludo = '¡Hola!';
let nombreCurso = 'Código LATAM';
let resultadoSuma = num1 + num2;
let resultadoResta = num1 - num2;
let resultadoMultiplicacion = num1 * num2;
console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(saludo + 'Esto es ' + nombreCurso);

num1 = 20 - 5 + num2;
num2 =  saludo + resultadoSuma;
let miNombre = "Soy Juan Pablo";
let estudiandoAndo = "Practicando JavaScript";

console.log(num1);
console.log(num2);
console.log(saludo + " " + miNombre + " y estoy " + estudiandoAndo )

let soyVerdadero = true;    
let soyFalso = false;
let soyNulo = null;
let soyUndefined; // es undefined;

console.log(soyVerdadero);
console.log(soyFalso);
console.log(soyNulo);
console.log(soyUndefined);

/* Funciones */

/* 
La función debe recibir un número y mostrar en
la consola una cuenta regresiva desde ese
número hasta el cero. Además, cuando la cuenta
llegue a cero, en la consola se mostrará el
mensaje ¡Despegamos!
Por ejemplo, si a esta función le paso el número
10.
*/

function despegando(parametro) {
    for (let i = parametro; i >= 0; i--){
        console.log(i)
        if(i == 0){
            console.log("Despegamos!!")
        }       
    }
}   
despegando(10)