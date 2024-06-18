let currentChat = "";

function openChat(contact) {
    currentChat = contact;
    document.getElementById('chat-with').innerText = 'Chat con: ' + contact;
    document.getElementById('chat-messages').innerHTML = ''; // Limpia los mensajes anteriores
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    
    if (message === "") return; // No enviar mensajes vacíos

    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.innerText = message;

    chatMessages.appendChild(messageElement);
    messageInput.value = ''; // Limpia el campo de entrada
    chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazarse hacia abajo al agregar un mensaje
}

document.getElementById('send-button').addEventListener('click', sendMessage);

// Permitir enviar el mensaje con la tecla "Enter"
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
