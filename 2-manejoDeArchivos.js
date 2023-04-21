/* Realizar una clase de nombre “ProductManager”, el cual permitirá trabajar con múltiples productos. 
Éste debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia 
de archivos (basado en entregable 1). */
/* Aspectos a inclir
La clase debe contar con una variable this.path, el cual se inicializará desde el 
constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia. */
/* Debe guardar objetos con el siguiente formato:
id (se debe incrementar automáticamente, no enviarse desde el cuerpo)
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen)
code (código identificador)
stock (número de piezas disponibles) */
/* Debe tener un método addProduct el cual debe recibir un objeto con el formato 
previamente especificado, asignarle un id autoincrementable y guardarlo en el arreglo 
(recuerda siempre guardarlo como un array en el archivo).
Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver 
todos los productos en formato de arreglo.
Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo,
 debe buscar el producto con el id especificado y devolverlo en formato objeto */
/*  Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, 
 así también como el campo a actualizar (puede ser el objeto completo, como en una DB),
  y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID 
 Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto 
 que tenga ese id en el archivo. */
 




class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (!product) {
        throw new Error(`El producto con id ${id} no se encuentra`);
      }
      return product;
    }
  
    addProduct({ title, description, price, thumbnail, code, stock }) {
      if (this.products.some(p => p.code === code)) {
        throw new Error(`Producto con codigo ${code} ya existe`);
      }
      const id = this.generateId();
      const product = { id, title, description, price, thumbnail, code, stock };
      this.products.push(product);
      return product;
    }
  
    generateId() {
      let id;
      do {
        id = Math.floor(Math.random() * 1000000);
      } while (this.products.some(p => p.id === id));
      return id;
    }
  }
  
  // Creo instancia de ProductManager
  const manager = new ProductManager();
  
  // Obtengo productos (devuelve array vacio)
  console.log(manager.getProducts());
  
  // Agrego productos
  const product = manager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  });
  console.log(product); // Muestro el objeto de producto con id generado
  
  // Obtengo productos (devuelve el array con el producto agregado))
  console.log(manager.getProducts());
  
  // Agrego producto con codigo repetido (muestra error)
  try {
    manager.addProduct({
      title: "otro producto",
      description: "Este es otro producto",
      price: 100,
      thumbnail: "Sin imagen",
      code: "abc123",
      stock: 10,
    });
  } catch (error) {
    console.log(error.message);
  }
  
  // Obtengo producto por id (devuelvo el objeto producto)
  console.log(manager.getProductById(product.id));
  
  // Obtengo producto por id inexistente (muestra error)
  try {
    manager.getProductById(999999);
  } catch (error) {
    console.log(error.message);
  }