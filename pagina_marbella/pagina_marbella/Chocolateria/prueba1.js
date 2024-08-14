const products = [
    { id: 1, category: 'cakes', name: 'Smartphone', price: 500 },
    { id: 2, category: 'cakes', name: 'Laptop', price: 1000 },
    { id: 3, category: 'clothing', name: 'T-shirt', price: 20 },
    { id: 4, category: 'clothing', name: 'Jeans', price: 50 },
    { id: 5, category: 'books', name: 'Novel', price: 10 },
    { id: 6, category: 'books', name: 'Textbook', price: 80 }
];

let cart = [];

function showProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
        cart.push(productToAdd);
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    document.getElementById('total').textContent = total.toFixed(2);
}

function generateInvoice() {
    const invoiceContent = cart.map(item => `${item.name} - $${item.price.toFixed(2)}`).join('\n');
    const total = document.getElementById('total').textContent;

    const invoiceHtml = `
        <div class="invoice">
            <h2>Factura de Compra</h2>
            <pre>${invoiceContent}</pre>
            <p>Total a Pagar: $${total}</p>
        </div>
    `;

    // Abrir una ventana emergente con la factura
    const invoiceWindow = window.open('', 'Factura de Compra', 'width=600,height=400');
    invoiceWindow.document.write(invoiceHtml);

    // Esperar a que el contenido se cargue antes de imprimir
    invoiceWindow.onload = function() {
        invoiceWindow.print(); // Imprimir la factura
    };
}
