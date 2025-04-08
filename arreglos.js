function obtenPre(nombre){
  let productos = [
    ["laptop", 1200],
    ["celulares", 850],
    ["memorias", 160],
  ];
 for(let i = 0; i < productos.length; i++){
    if(productos[i][0] == nombre){
    console.log("el precio es : " + productos[i][1]);
    }
  }
}
obtenPre("celulares");

function Pre(nombre1){
    let productos = [
      ["laptop", 1200],
      ["celulares", 850],
      ["memorias", 160],
    ];
  let precio = productos.filter((producto) => producto[0] == nombre1);
  console.log("el precio es : " + precio[0][1]);
}
Pre("laptop")

function aplicarDescuento(producto, porcentajeDescuento) {
    let productos = [
        ["laptop", 1200],
        ["celulares", 850],
        ["memorias", 160],
      ];
      for (let i = 0; i < productos.length; i++) {
        if (productos[i][0] === producto) {
            let precio = productos[i][1];
            let precioConDescuento = precio - (precio * porcentajeDescuento / 100);
            console.log("Este es el precio con descuento: " + precioConDescuento);
            return precioConDescuento;
        }
    }
    console.log("Producto no encontrado");
    return null; 
}
aplicarDescuento("laptop", 10)

function eliminarProducto(nombreProducto) {
    let productos = [
        ["laptop", 1200],
        ["celular", 850],
        ["memoria", 160]
    ];    
    for (let i = 0; i < productos.length; i++) {
        if (productos[i][0] === nombreProducto) {
            productos.splice(i, 1);
            console.log("Producto  eliminado correctamente : " + nombreProducto);
            return true;
        }
    }
    console.log("Producto no encontrado.");
    return false;
}
eliminarProducto("memoria")


function agregarProducto(nombreProducto, precio) {
    let productos = [
        ["laptop", 1200],
        ["celular", 850],
        ["memoria", 160]
    ];    
    for (let producto of productos) {
        if (producto[0] === nombreProducto) {
            console.log("El producto ya existe : " + nombreProducto + precio);
            return false;
        }
    }
    productos.push([nombreProducto, precio]);
    console.log("Producto  agregado con precio : " + nombreProducto, precio);
    return true;
}
agregarProducto("mouse", 100)