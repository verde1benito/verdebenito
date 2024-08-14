let carrito = [];

function agregarProducto(nombre, precio) {
    const productoExistente = carrito.find(producto => producto.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';
    carrito.forEach((producto, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>
                <button onclick="restarCantidad(${index})">-</button>
                ${producto.cantidad}
                <button onclick="sumarCantidad(${index})">+</button>
            </td>
            <td>$${producto.precio * producto.cantidad}</td>
            <td><button onclick="eliminarProducto(${index})">Eliminar</button></td>
        `;
        listaProductos.appendChild(tr);
    });
    document.getElementById('total').innerText = `$${calcularTotal()}`;
}

function sumarCantidad(index) {
    carrito[index].cantidad++;
    actualizarCarrito();
}

function restarCantidad(index) {
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
        actualizarCarrito();
    }
}

function generarFactura() {
    const factura = document.createElement('div');
    factura.id = 'factura';
    factura.innerHTML = `
        <h2>Factura de compra</h2>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio unitario</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody id="lista-productos"></tbody>
        </table>
        <p>Total a pagar: <span id="total">$${calcularTotal()}</span></p>
    `;
    document.body.appendChild(factura);
    actualizarCarrito(); // Actualizar el carrito antes de generar la factura
    window.print();
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function calcularTotal() {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    return total;
}


// Función para generar el ticket de compra
function generarTicket() {
        const factura = document.createElement('div');
        factura.id = 'factura';
        factura.innerHTML = `
            <h2>Ticket  de compra</h2>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio unitario</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody id="lista-productos"></tbody>
            </table>
            <p>Total a pagar: <span id="total">$${calcularTotal()}</span></p>
        `;
        document.body.appendChild(factura);
        actualizarCarrito(); // Actualizar el carrito antes de generar la factura
        window.print(); // Imprimir el ticket de compra
}
