/* Se creará una instancia de la clase “ProductManager” LISTO
Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío [] LISTO
Se llamará al método “addProduct” con los campos:
title: “producto prueba”
description:”Este es un producto prueba”
price:200,
thumbnail:”Sin imagen”
code:”abc123”,
stock:25   LISTO
El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo */
const array = []
class ProductManager{
    constructor(array){
       this.array = array;
    }

    getProducts(){
       console.log(array)
      
    }
    addProducts(){
            array.push(
                {title:"Producto prueba"},
                {description:"Este es un producto prueba"},
                {price:200},
                {thumbnail:"Sin imagen"},
                {code:"abc123"},
                {stock:25}
            )
            console.log(array)
    }
}


const instanciaClase = new ProductManager();
instanciaClase.getProducts(array)





/* 
    {title:"Producto prueba"},
    {description:"Este es un producto prueba"},
    {price:200},
    {thumbnail:"Sin imagen"},
    {code:"abc123"},
    {stock:25}
 */





