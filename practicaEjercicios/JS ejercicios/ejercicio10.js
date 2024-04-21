/* 
        Ejercicio 10
    Programa que pida 6 numeros por pantalla y los metas en un array
*/

// Declaracion del arreglo
let numeros = [];

// MANERA 1
// do{
//     for(let i = 0; i < 6; i++){
//         // Se mete cada elemento en el arreglo
//         numeros[i] = prompt(' Ingrese un numero: ');
//         // mandas a imprimirlos
//         document.write(numeros[i]+' - ');
//     }
// }while(numeros < 0);


let arregloNum = [];

// MANERA 2

    for(let i = 0; i < 6; i++){
        // Se mete cada elemento en el arreglo
        i = prompt(' Ingrese un numero: ');
        arregloNum.push(i);
    }


    do{
        alert(arregloNum);
    }while(arregloNum < 0);
        