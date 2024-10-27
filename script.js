document.getElementById('chat-submit').addEventListener('click', function () {
  const userMessage = document.getElementById('chat-input').value.trim().toLowerCase();
  const chatMessages = document.getElementById('chat-messages');
  
  // Display user's message in chat
  chatMessages.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;

  // Predefined responses for brain stroke and other topics
  let botResponse = '';

  // Reordered stroke-related questions and answers
  if (userMessage.includes('types of stroke')) {
    botResponse = 'There are two main types of strokes: ischemic (caused by a blockage) and hemorrhagic (caused by bleeding in the brain).';
  } else if (userMessage.includes('what is ischemic stroke')) {
    botResponse = 'An ischemic stroke occurs when a blood clot blocks or narrows an artery leading to the brain. It is the most common type of stroke.';
  } else if (userMessage.includes('what is hemorrhagic stroke')) {
    botResponse = 'A hemorrhagic stroke happens when a blood vessel in the brain ruptures, causing bleeding and pressure that damages brain cells.';
  } else if (userMessage.includes('what is transient ischemic attack')) {
    botResponse = 'A transient ischemic attack (TIA), often called a mini-stroke, occurs when blood flow to the brain is temporarily interrupted, causing stroke-like symptoms that usually resolve within 24 hours.';
  } else if (userMessage.includes('stroke symptoms')) {
    botResponse = 'Symptoms of stroke include sudden numbness or weakness in the face, arm, or leg, confusion, trouble speaking, and loss of balance or coordination.';
  } else if (userMessage.includes('factors causing stroke')) {
    botResponse = 'Risk factors for stroke include high blood pressure, smoking, diabetes, obesity, and high cholesterol.';
  } else if (userMessage.includes('prevent stroke')) {
    botResponse = 'Prevent stroke by managing blood pressure, quitting smoking, eating a healthy diet, exercising regularly, and controlling diabetes.';
  } else if (userMessage.includes('what is a brain aneurysm')) {
    botResponse = 'A brain aneurysm is a bulging, weakened area in the wall of an artery in the brain, which can burst and lead to a hemorrhagic stroke.';
  } else if (userMessage.includes('stroke treatment')) {
    botResponse = 'Stroke treatment depends on the type. For ischemic strokes, clot-busting drugs (like tPA) are used. Hemorrhagic strokes may require surgery to stop the bleeding.';
  } else if (userMessage.includes('what is tpa for stroke')) {
    botResponse = 'tPA (tissue plasminogen activator) is a medication used to dissolve blood clots in ischemic stroke. It must be administered within a few hours of symptom onset for maximum effectiveness.';
  } else if (userMessage.includes('what is stroke rehabilitation')) {
    botResponse = 'Stroke rehabilitation helps stroke survivors regain independence and improve their quality of life through physical, occupational, and speech therapy.';
  } else if (userMessage.includes('stroke recovery')) {
    botResponse = 'Stroke recovery varies depending on the severity and area affected. Rehabilitation can take months or years, focusing on improving physical abilities and cognitive function.';
  } else if (userMessage.includes('what is a brain scan for stroke')) {
    botResponse = 'A brain scan (CT or MRI) is used to determine the type of stroke and the area of the brain affected, guiding the course of treatment.';
  } else if (userMessage.includes('stroke risk factors you can control')) {
    botResponse = 'Controllable stroke risk factors include high blood pressure, smoking, obesity, diabetes, and high cholesterol.';
  } else if (userMessage.includes('stroke risk factors you cannot control')) {
    botResponse = 'Uncontrollable stroke risk factors include age (being over 55), gender (higher risk in men), family history, and prior strokes or TIAs.';
  } else if (userMessage.includes('stroke diagnosis')) {
    botResponse = 'Strokes are diagnosed through physical examination, medical history, blood tests, and imaging tests like CT or MRI scans.';
  } else if (userMessage.includes('how to recognize stroke')) {
    botResponse = 'Recognize a stroke using the FAST method: Face drooping, Arm weakness, Speech difficulty, and Time to call emergency services.';
  
  // General health-related questions
  } else if (userMessage.includes('what is a stroke')) {
    botResponse = 'A stroke occurs when blood flow to a part of the brain is interrupted, leading to potential brain damage.';
  } else if (userMessage.includes('what is a heart attack')) {
    botResponse = 'A heart attack happens when the flow of blood to the heart is blocked, usually by a clot or plaque buildup in the arteries.';
  } else if (userMessage.includes('symptoms of heart attack')) {
    botResponse = 'Heart attack symptoms include chest pain, shortness of breath, cold sweats, nausea, and lightheadedness.';
  } else if (userMessage.includes('prevent heart attack')) {
    botResponse = 'You can prevent heart attacks by avoiding smoking, controlling blood pressure, exercising regularly, and maintaining a healthy diet.';
  } else if (userMessage.includes('what is diabetes')) {
    botResponse = 'Diabetes is a chronic condition where the body either doesn\'t produce enough insulin or doesn\'t use it properly, leading to high blood sugar levels.';
  } else if (userMessage.includes('types of diabetes')) {
    botResponse = 'There are two main types of diabetes: Type 1, where the body doesn’t produce insulin, and Type 2, where the body doesn’t use insulin effectively.';
  } else {
    botResponse = 'I\'m not sure about that. Here are some things you can ask me: "What is a stroke?", "Symptoms of stroke?", "How to prevent strokes?" and more.';
  }

  // Display bot's response in chat
  chatMessages.innerHTML += `<div><strong>Bot:</strong> ${botResponse}</div>`;
  document.getElementById('chat-input').value = '';
});


