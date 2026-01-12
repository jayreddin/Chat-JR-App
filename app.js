const messages = [];

function addMessage(msg, isUser) {
    const messagesDiv = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    if (isUser) {
        messageDiv.classList.add("user-message");
    }
    const timestamp = document.createElement("div");
    timestamp.classList.add("timestamp");
    timestamp.textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    messageDiv.appendChild(timestamp);
    const textDiv = document.createElement("div");
    textDiv.textContent = msg;
    messageDiv.appendChild(textDiv);
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById("input-message");
    const message = input.value.trim();
    if (message) {
        addMessage(message, true);
        input.value = '';
        // Record the message in array of messages
        messages.push({ content: message, role: 'user' });
        // Show loading indicator
        const loading = document.getElementById("loading");
        loading.style.display = "block";
        // Call the AI chat function
        puter.ai.chat(messages).then(response => {
            loading.style.display = "none";
            addMessage(response.message, false);
            messages.push({ content: response.message, role: 'assistant' });
        }).catch(error => {
            loading.style.display = "none";
            console.error("AI response error:", error);
            addMessage("Sorry, there was an error. Please try again.", false);
        });
    }
}

document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    sendMessage();
});