/*
        Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

        "fizz" si el número es múltiplo de 3.
        "buzz" si el número es múltiplo de 5.
        "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
        
        Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.

*/

let num = prompt('Ingrese un numero: ');

    if(num % 15 == 0){
            alert('FizzBuzz');
        }else if(num % 5 == 0){
            alert('Buzz');
        }else if(num % 3 == 0){
            alert('Fizz');
        }else{
            alert('Es un numero de par');
    }