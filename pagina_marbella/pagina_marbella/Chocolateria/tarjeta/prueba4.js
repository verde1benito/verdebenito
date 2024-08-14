document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var cardNumber = document.getElementById('cardNumber').value;
    var cardExpiry = document.getElementById('cardExpiry').value;
    var cardCVC = document.getElementById('cardCVC').value;

    // Aquí puedes agregar la lógica para procesar el pago (puede ser una API de pago como Stripe, por ejemplo)

    // Ejemplo de guardado de compra (simulado con un mensaje en consola)
    console.log('Compra realizada:');
    console.log('Número de Tarjeta:', cardNumber);
    console.log('Fecha de Vencimiento:', cardExpiry);
    console.log('CVC:', cardCVC);

    alert('¡Pago procesado con éxito!');
    // Aquí podrías redirigir a una página de confirmación o realizar otras acciones después del pago
});
