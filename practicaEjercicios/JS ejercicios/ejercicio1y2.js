/*
    Problema 1;
        Programa que pida dos numeros
        y que nos diga cual es el mayor,
        el menor y si son iguales.

    Problema 2;
        Al programa anterior: si los numeros no son
        un numero o son menores o iguales a cero, los
        vuela a pedir.
*/

// variables de los numeros
let num1 = prompt('Ingrese un numero: ');
let num2 = prompt('Ingrese un numero mas: ');


    if(!num1 || num1 === 0 && !num2 || num2 === 0){
            
            if(num1 === num2){
                alert('El numero '+num1+' es igual al numero '+num2);
                }else if(num1 > num2){
                    alert('El numero '+num1+' es mayor que '+num2);
                }else if(num1 < num2){
                    alert('El numero '+num1+' es menor que '+num2);
            }
    
        }else{
            
            let bandera = prompt('Desea ingresar de nuevo? ');

                if(bandera === 'si' || bandera === 'Si'){
                
                        num1 = prompt('Ingrese un numero: ');
                        num2 = prompt('Ingrese un numero mas: ');
                        
                        if(num1 === num2){
                                alert('El numero '+num1+' es igual al numero '+num2);
                            }else if(num1 > num2){
                                alert('El numero '+num1+' es mayor que '+num2);
                            }else if(num1 < num2){
                                alert('El numero '+num1+' es menor que '+num2);
                        }
                        
                }else if(bandera === 'no' || bandera === 'No'){

                    if(num1 === num2){
                            alert('El numero '+num1+' es igual al numero '+num2);
                        }else if(num1 > num2){
                            alert('El numero '+num1+' es mayor que '+num2);
                        }else if(num1 < num2){
                            alert('El numero '+num1+' es menor que '+num2);
                    }
                    
                    alert('Gracias, por su visita');
            
                }
            
    } // Cierre de la clase del primer if


