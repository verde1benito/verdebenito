let carrito = [];

function agregarProducto(nombre, precio) {
    const productoExistente = carrito.find(producto => producto.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad++;
        productoExistente.total = productoExistente.cantidad * precio;
    } else {
        carrito.push({ nombre, precio, cantidad: 1, total: precio });
    }
    actualizarCarrito();
}

function restarProducto(nombre) {
    const productoExistente = carrito.find(producto => producto.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad--;
        if (productoExistente.cantidad <= 0) {
            eliminarProducto(nombre);
        } else {
            productoExistente.total = productoExistente.cantidad * productoExistente.precio;
            actualizarCarrito();
        }
    }
}

function actualizarCarrito() {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';
    carrito.forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.total.toFixed(2)}</td>
            <td>
                <button onclick="agregarProducto('${producto.nombre}', ${producto.precio})">+</button>
                <button onclick="restarProducto('${producto.nombre}')">-</button>
                <button onclick="eliminarProducto('${producto.nombre}')">Eliminar</button>
            </td>
        `;
        listaProductos.appendChild(fila);
    });
}

function eliminarProducto(nombre) {
    carrito = carrito.filter(producto => producto.nombre !== nombre);
    actualizarCarrito();
}

function generarFactura() {
    let facturaHTML = `
        <html>
        <head>
            <title>Factura Tienda VERDE BENITO</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f9f9f9;
                }
                .container {
                    width: 80%;
                    margin: 20px auto;
                    background-color: #ffffff;
                    padding: 20px;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                }
                h2 {
                    text-align: center;
                    color: #FF9AA2;
                    margin-bottom: 20px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }
                th, td {
                    border: 1px solid #dddddd;
                    padding: 12px;
                    text-align: center;
                }
                th {
                    background-color: #FF9AA2;
                    color: white;
                }
                td {
                    background-color: #f9f9f9;
                }
                .total {
                    font-size: 1.5em;
                    font-weight: bold;
                    text-align: right;
                    padding: 15px;
                    border-top: 2px solid #FF9AA2;
                }
                .btn {
                    display: inline-block;
                    padding: 10px 20px;
                    margin-top: 20px;
                    background-color: #FF9AA2;
                    color: white;
                    text-align: center;
                    text-decoration: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .btn:hover {
                    background-color: #FF7E93;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Factura Tienda VERDE BENITO</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    let totalFactura = 0;
    carrito.forEach(producto => {
        facturaHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>${producto.cantidad}</td>
                <td>$${producto.total.toFixed(2)}</td>
            </tr>
        `;
        totalFactura += producto.total;
    });

    facturaHTML += `
                    </tbody>
                </table>
                <div class="total">Total: $${totalFactura.toFixed(2)}</div>
                <div style="text-align: center;">
                    <a href="javascript:window.print()" class="btn">Imprimir</a>
                </div>
            </div>
        </body>
        </html>
    `;

    const facturaVentana = window.open('', '_blank');
    facturaVentana.document.write(facturaHTML);
    facturaVentana.document.close();
}

