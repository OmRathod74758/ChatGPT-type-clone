document.getElementById('submit').addEventListener('click', function() {
    const userInput = document.querySelector('#user-input').value;
    if (userInput.trim()) {
        // Display user message
        displayMessage(userInput, 'user');

        // Get bot's response and display it
        const botResponse = getBotResponse(userInput);
        displayMessage(botResponse, 'bot');

        // Clear input field
        document.querySelector('#user-input').value = '';
    }
});

document.querySelector('#user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('submit').click(); // Trigger the same action if the Enter key is pressed
    }
});

document.getElementById('new-chat-btn').addEventListener('click', function() {
    // Clear the chat history
    document.getElementById('chat-box').innerHTML = '<p class="info">Start the conversation by typing below...</p>';
});

// Function to display message in the chat box
function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-msg' : 'bot-msg');
    messageElement.textContent = message;

    
    const copyButton = document.createElement('button');
    copyButton.classList.add('copy-btn');
    copyButton.innerHTML = '📋'; // Copy symbol
    copyButton.addEventListener('click', function() {
        copyToClipboard(message);
    });

    const messageContainer = document.createElement('div');
    messageContainer.appendChild(messageElement);
    messageContainer.appendChild(copyButton);

    chatBox.appendChild(messageContainer);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

// Function to get bot's response
function getBotResponse(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        return "Hello! How can I help you today?";
    } else if (lowerInput.includes("how are you")) {
        return "I'm just a bot, but I'm doing great, thanks!";
    } else if (lowerInput.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else {
        return "Sorry, I didn't understand that.";
    }
}

// Function to copy message to clipboard
function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert("Message copied to clipboard!");
}
