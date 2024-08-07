// Initialize SpeechRecognition object
const recognition = new webkitSpeechRecognition();

// Set parameters
recognition.lang = 'en-US';
recognition.continuous = true;

// Start recognition
document.getElementById('startButton').onclick = function() {
  recognition.start();
  document.getElementById('startButton').disabled = true;
  document.getElementById('stopButton').disabled = false;
};

// Stop recognition
document.getElementById('stopButton').onclick = function() {
  recognition.stop();
  document.getElementById('startButton').disabled = false;
  document.getElementById('stopButton').disabled = true;
};

// Display recognized text
recognition.onresult = function(event) {
  const result = event.results[event.results.length - 1];
  const transcript = result[0].transcript;
  document.getElementById('output').innerHTML += transcript + '<br>';
  document.getElementById('recognizedText').value += transcript + '\n';
};

// Add SpeechKITT for visual feedback
SpeechKITT.vroom();
SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/themes/flat.css');
SpeechKITT.rememberStatusAcrossSessions(true);
SpeechKITT.setInstructionsText('Say something...');
SpeechKITT.displayRecognizedSentence(true);
