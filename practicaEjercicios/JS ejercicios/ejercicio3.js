/*
    Has hecho una compra y sabes el precio del producto y su iva. 
    Haz un script que te calcule el precio total que vas a pagar 
    por tu compra.

    Te recuerdo que para calcular el total debes sumar al precio 
    el resultado de multiplicasr precio por el iva y dividir por 100.
*/


/* OPCION 1 */

    var precio = prompt('Ingrese el precio del producto: ');

    // Nota importante:  recordar que se necesita poner en entero en precio
    var formula = parseInt(precio) + parseInt(precio) * 21 / 100;

    alert('Precio total a pagar sobre el producto: '+ formula);


/* OPCION 2 */

/*

// Nota importante:  aqui se explica de diferente manera ya que el precio se esta declarando como entero
    var precio=350;
    var iva = 21;
    var precioTotal = precio + precio*21/100

    console.log("El precio total es: "+precioTotal);
*/