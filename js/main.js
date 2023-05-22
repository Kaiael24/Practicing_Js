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

// Arrays



let frutas = ['manzana', 'pera', 'banana', 'naranja'];

console.log(frutas[2]); // banana

let numerosPares = [8, 4, 22, 64, 16];

console.log(numerosPares[0]); // 8

let arrayVariadito = [5, 'rojo', true, [1,4,5], '1988'];

console.log(arrayVariadito[3]); // [1,4,5]

let arrayDeArrays = [ [9, 8, 7], [6, 5, 4], [3, 2, 1] ];

console.log(arrayDeArrays[2][1]) // 2



console.log(numerosPares[0]+numerosPares[1])

console.log(frutas[2].toUpperCase())

console.log(arrayDeArrays[0][2]+arrayDeArrays[2][0])


// .length - saber la cantidad
let colores = ["verde", "azul", "rojo","violeta"]

console.log(colores.length);

let totalColores = colores.length;

console.log(totalColores)

// push - Agrega algo al final del array
colores.push("negro")

// unshift - Agrega algo al principio del array
colores.unshift("blanco")

console.log(colores)

// pop - Quita el ultimo valor del array

colores.pop()

// sort - Ordenar alfabeticamente

colores.sort()

// shit - Quita el primer valor del array

colores.shift()

console.log(colores)


// Recorriendo Arrays

let nuevosColores = ["amarillo", "azul", "rojo", "verde", "violeta"]

// Con for
/* for (let i = 0; i <= nuevosColores.length; i++) {
    
    let coloresMayuscula = nuevosColores[i].toUpperCase();

    console.log(coloresMayuscula)
} */


// CON forEach
let masColoresNuevos = ["negro", "rosa", "blanco", "gris", "celeste"]


masColoresNuevos.forEach(function(e){
    let coloresEnMayuscula = e.toUpperCase()
    console.log(coloresEnMayuscula)
})


/* OBJETOS */

/* 
Este objeto representa un Pokemon.
Tiene cuatro propiedades, tres son 
cracterísticas: nombre, tipo, debilidad. 
Son variables que contienen datos.
También tiene un comportamiento: ataque.
En este caso se trata de una función que 
pertenece específicamente a este objeto, 
y en programación a esto se lo llama 
"método".
¿Qué podemos hacer con todo esto?
*/

let pokemon = {
    nombre: 'Pikachu',
    tipo: 'Eléctrico',
   debilidad: 'Tierra',
    ataque: function() {
    console.log('Pikachu ataca con Impactrueno'); 
    } 
    }

console.log(pokemon.tipo) // Eléctrico

/* 
Tomemos el siguiente ejemplo: quiero escribir en JS un 
conjunto de datos que representen una gota de agua. 
Esta puede tener propiedades como color, olor, sabor, 
temperatura, estado, si es potable... y cada una de estas 
un valor determinado:


En este objeto que representa a una gota 
de agua podríamos describir con una 
función el comportamiento de cambiar 
de estado según la temperatura que 
tenga.
Veremos que los métodos de un objeto 
pueden usar y modificar valores en las 
propiedades del mismo, como en este 
caso las propiedades temperatura y 
estado.
La palabra this en este contexto, hace 
referencia al objeto mismo dentro del cual 
se encuentra este método, y con el . 
(punto) accedemos a la propiedad

*/

let gotaDeAgua = {
    color: 'incolora',
    olor: 'inodora',
    sabor: 'insípida',
    potable: true,
    temperatura: 10,
    estado: 'líquido',
    cambiarEstado: function() { 
        if (this.temperatura <= 0) {
        this.estado = 'sólido';
        } 
        else if (this.temperatura >= 100) {
        this.estado = 'gaseoso';
        } 
        else {
        this.estado = 'líquido';
        }
        return 'El estado del agua es ' + this.estado;
    }
   } 

    console.log(gotaDeAgua.estado); // 'líquido'
    console.log(gotaDeAgua.temperatura); // 10
    //modificamos el valor de una propiedad
    console.log(gotaDeAgua.temperatura = -1); 
    //utilizamos este método del objeto
    console.log(gotaDeAgua.cambiarEstado()); 
    // 'El estado del agua es sólido'