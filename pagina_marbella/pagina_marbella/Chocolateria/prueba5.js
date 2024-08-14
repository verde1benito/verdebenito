let items = [];
let total = 0;

function agregarItem(nombre, precio) {
  items.push({ nombre, precio });
}

function calcularTotal() {
  total = items.reduce((acc, item) => acc + item.precio, 0);
}

function generarTicket() {
  const itemsDiv = document.getElementById("items");
  const totalDiv = document.getElementById("total");

  itemsDiv.innerHTML = "";
  totalDiv.textContent = "";

  items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.textContent = `${item.nombre}: $${item.precio.toFixed(2)}`;
    itemsDiv.appendChild(itemDiv);
  });

  calcularTotal();

  totalDiv.textContent = `Total: $${total.toFixed(2)}`;
}
