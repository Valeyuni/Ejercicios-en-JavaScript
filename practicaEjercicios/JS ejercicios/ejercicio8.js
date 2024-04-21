/* 
        Ejercicio 8
    Tabla de multiplicar de un numero introducido por el usuario
*/

do{
    num = prompt('Ingrese un numero: ');
}while(num < 0);


for(let i = 1; i <= 10; i++){
        let resultado = num * i;
        alert(resultado);
}