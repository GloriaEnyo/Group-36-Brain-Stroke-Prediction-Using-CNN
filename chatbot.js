// Handle form submission for stroke prediction with AJAX
document.getElementById('prediction-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const bmi = document.getElementById('bmi').value;
    const hypertension = document.getElementById('hypertension').checked ? 1 : 0;
    const smoking = document.getElementById('smoking').value;
  
    const data = { age, gender, bmi, hypertension, smoking };
  
    fetch('/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      document.getElementById('result-text').textContent = `Your stroke risk is ${result.stroke_risk * 100}%`;
    })
    .catch(error => console.error('Error:', error));
  });
  
  // Chatbot functionality
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  
  chatSend.addEventListener('click', function () {
    const userMessage = chatInput.value;
    if (userMessage.trim()) {
      appendMessage('You', userMessage);
      processBotResponse(userMessage);
      chatInput.value = '';
    }
  });
  
  function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatMessages.appendChild(messageElement);
  }
  
  function processBotResponse(message) {
    let botResponse;
  
    if (message.toLowerCase().includes('stroke')) {
      botResponse = 'A stroke occurs when blood flow to the brain is disrupted. Would you like to know about prevention or risk factors?';
    } else if (message.toLowerCase().includes('prevention')) {
      botResponse = 'To prevent strokes, maintain a healthy diet, exercise, and avoid smoking.';
    } else if (message.toLowerCase().includes('risk factors')) {
      botResponse = 'Risk factors include high blood pressure, smoking, diabetes, and obesity.';
    } else {
      botResponse = 'I am not sure how to respond. Please ask something about stroke prevention, risk factors, or symptoms.';
    }
  
    appendMessage('Bot', botResponse);
  }
  