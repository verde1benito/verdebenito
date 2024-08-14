const carrito = document.getElementById('carrito');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const generarFacturaBtn = document.getElementById('generar-factura');
const facturaDiv = document.getElementById('factura');
const contenidoFacturaDiv = document.getElementById('contenido-factura');
const imprimirFacturaBtn = document.getElementById('imprimir-factura');

cargarEventListeners();

function cargarEventListeners() {
    document.body.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    generarFacturaBtn.addEventListener('click', generarFactura);
    imprimirFacturaBtn.addEventListener('click', imprimirFactura);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('p').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100>
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}"> X </a>
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}

function generarFactura() {
    let facturaHTML = '';
    let total = 0;

    lista.querySelectorAll('tr').forEach(row => {
        const imagen = row.querySelector('img').src;
        const titulo = row.querySelector('td:nth-child(2)').textContent;
        const precio = row.querySelector('td:nth-child(3)').textContent;
        total += parseFloat(precio.replace('$', ''));

        facturaHTML += `
            <div>
                <img src="${imagen}" width="50">
                <p>${titulo}</p>
                <p>${precio}</p>
            </div>
        `;
    });

    facturaHTML += `<p>Total: $${total.toFixed(2)}</p>`;
    contenidoFacturaDiv.innerHTML = facturaHTML;
    facturaDiv.style.display = 'block';
}

function imprimirFactura() {
    const facturaContenido = document.getElementById('factura').innerHTML;
    const ventanaImpresion = window.open('', '', 'width=800,height=600');
    ventanaImpresion.document.write('<html><head><title>Factura</title>');
    ventanaImpresion.document.write('</head><body>');
    ventanaImpresion.document.write(facturaContenido);
    ventanaImpresion.document.write('</body></html>');
    ventanaImpresion.document.close();
    ventanaImpresion.print();
}
