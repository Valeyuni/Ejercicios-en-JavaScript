

// CICLO WHILE
console.log('CICLO WHILE');

// para el ciclo while si tiene que tener una variable declarada antes
var num = 1;

while(num <= 10){
    console.log(num);
    num++;
}

// CICLO DO WHILE
console.log('CICLO DO WHILE');

// ciclo que nos permite ejecutar almenos solo una vez
var num2 = 2;

do{
    console.log(num2);
    num2 = num2+2;
}while(num2 <= 10);

// PALABRAS RESERVADAS 
var cajas2 = document.getElementsByClassName('caja2');

function color(){
        // 1. se va alternar la clase de la clase
    // cajas2[0].classList.toggle('negro');

        // 2. palabra reservada es 
    // this se utiliza cuando no se sabe cual contenedor fue clickeado
    this.classList.toggle('negro');
}

for(var i = 0; i < cajas2.length; i++){
    cajas2[i].addEventListener('click', color);
}

// CIERRE PALABRAS RESERVADAS 

// FORMULARIO  
var formulario = document.getElementById('formulario');
var nombre = formulario.nombre;
var sexo = formulario.sexo;
var terminos = formulario.terminos;

// Validacion sencilla
function validar(e){
    // validacion del nombre de tipo texto
    if(nombre.value > 18){
        alert('Maximo 17 caracteres');
        
    }else if(nombre.value == ''){
        alert('Ingrese un nombre');
    }

    // validacion del sexo de tipo radio
    if(sexo[0].checked == false && sexo[1].checked ==false){
        alert('Por favor ingrese un sexo')
    }

    // validacion los terminos y condiciones de tipo checkbox
    if(!terminos.checked){
        alert('Acepta los terminos');
    }

    e.preventDefault();
}

formulario.addEventListener('submit', validar);

