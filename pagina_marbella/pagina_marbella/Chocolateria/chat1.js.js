function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Mostrar el mensaje del usuario
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user-message';
    userMessage.innerText = userInput;
    document.getElementById('chat-box').appendChild(userMessage);

    // Generar la respuesta del bot
    const botResponse = getBotResponse(userInput);
    const botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot-message';
    botMessage.innerText = botResponse;
    document.getElementById('chat-box').appendChild(botMessage);

    // Limpiar el input del usuario
    document.getElementById('user-input').value = '';

    // Hacer scroll hasta el final del chat
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();

    // Respuestas predefinidas para preguntas comunes en una verdulería
    if (input.includes('precio de')) {
        if (input.includes('cebolla')) {
            return 'El precio de la cebolla por kilo es 15.';
        } else if (input.includes('brócoli') || input.includes('brocoli')) {
            return 'El precio del brócoli por kilo es 25.';
        } else if (input.includes('berenjena')) {
            return 'El precio de la berenjena por kilo es 65.90.';
        } else if (input.includes('zanahoria')) {
            return 'El precio de la zanahoria por kilo es 12.50.';
        } else if (input.includes('sopa de verdura')) {
            return 'El precio de la sopa de verdura es 30.';
        } else if (input.includes('legumbres')) {
            return 'El precio de las legumbres de 2 kilos es 180.90.';
        } else if (input.includes('kiwi')) {
            return 'El precio del kiwi por kilo es 40.80.';
        } else if (input.includes('bolsa de verdura')) {
            return 'El precio de la bolsa de verdura es 15.';
        } else if (input.includes('papaya')) {
            return 'El precio de la papaya por kilo es 34.90.';
        } else if (input.includes('uva')) {
            return 'El precio de la uva por kilo es 44.90.';
        } else if (input.includes('fresa')) {
            return 'El precio de la fresa por kilo es 40.';
        } else if (input.includes('piña')) {
            return 'El precio de la piña por pieza es 20.';
        } else if (input.includes('mango')) {
            return 'El precio del mango por kilo es 41.90.';
        } else if (input.includes('aguacate')) {
            return 'El precio del aguacate es 22.';
        } else {
            return 'Lo siento, no tengo el precio de ese producto. ¿Hay algo más en lo que pueda ayudarte?';
        }
    } else if (input.includes('horario') || input.includes('abren') || input.includes('cierran')) {
        return 'El horario de la tienda es de 8:00 AM a 10:00 PM.';
    } else if (input.includes('metodo de pago') || input.includes('tarjeta') || input.includes('efectivo')) {
        return 'Aceptamos pagos con tarjeta y en efectivo.';
    } else if (input.includes('como puedo contactarlos') || input.includes('facebook') || input.includes('instagram') || input.includes('telefono')) {
        return 'Nos puedes encontrar en Facebook como Verde Benito y en Instagram como verde_benito. También puedes contactarnos a los números de teléfono: 7491072734, 2411165857.';
    } else {
        return 'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?';
    }
}


