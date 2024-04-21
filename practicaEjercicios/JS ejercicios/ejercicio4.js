/*
    En una variable tienes el lado de un cuadrado, 
    debes escribir un programa que te calcule el área 
    y el perímetro del cuadrado. 
    
    El area la calculas como lado multiplicado por lado. 
    El perémetro es la suma de los cuatro lados.
*/


let lado = prompt('Ingrese la medida del lado del cuadrado: ');
let area = (parseInt(lado) * parseInt(lado));
let perimetro = parseInt(lado) * 4;


alert('El area del cuadrado es: ' + area);

alert('El perimetro del cuadrado es: '+perimetro);