document.addEventListener('DOMContentLoaded', function () {
    const chatButton = document.getElementById('chatButton');
    const chatModal = new bootstrap.Modal(document.getElementById('chatModal'));
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    chatButton.addEventListener('click', function () {
        chatModal.show();
    });

    function addMessage(message, isUser) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleSendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message, true);
            messageInput.value = '';

            // Simulate bot response
            setTimeout(() => {
                addMessage("Thank you for your message. Our team will get back to you soon.", false);
            }, 1000);
        }
    }

    sendButton.addEventListener('click', handleSendMessage);

    messageInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });
});