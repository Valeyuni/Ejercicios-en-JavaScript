/*
    Ejercicio 9

    Calculadora, pide dos numeros por el usuario, donde tiene que ser mayor a 0, por ultimo mandarlos 
    en una alert donde vendra la suma, resta, multiplicacion y division
*/

// pendiente de resolver    
 
do{
    num1 = parseInt(prompt('Ingrese el primer numero: '));
    num2 = parseInt(prompt('Ingrese el segundo numero: '));

}while(num1 <= 1 && num2 <= 1);

// Operaciones

function suma(){
    let resultado = num1 + num2;
    alert('La suma es: '+resultado);
}

function resta(){
    let resultado = num1 - num2;
    alert('La resta es: '+resultado);
}

function division(){
    return  num1 / num2
}

function multiplicacion(){
    return num1 * num2;
}

//  Imprimirlos

    // Manera 1
    suma();
    resta();
    // Manera 2
    alert('La division es: '+division());
    alert('La multiplicacion es: '+multiplicacion());

