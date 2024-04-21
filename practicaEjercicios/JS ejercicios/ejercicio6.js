/* 
        ejercicio 6
    Muestre todos los numeros divisores de un numero que mete en prompt

*/

    //  MANERA 1    

// let num = prompt('Ingrese un numero: ');

// // tiene que estar en un bucle
// for(let i = 1; i <= 5; i++){
//     let resultado = num / i;
//     alert(resultado);
// }


    //      MANERA 2

// Vuelve a preguntar hasta que cumple la condicion
do{
     num = prompt('Ingrese un numero: ');
}while(num <= 0);

for(let i = 1; i <= 5; i++){
    let resultado = num / i;
    alert(resultado);
}
