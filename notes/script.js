// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners for each button
  function openLink(url) {
    chrome.tabs.create({ url: url });
  }

function saveTextToFile() {
  var textContent = document.getElementById('autoGrowTextArea').value;

  // Your save logic here
  console.log('Text content:', textContent);
}

function handleAutoGrow() {
  var textarea = document.getElementById('autoGrowTextArea');
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}
// Example: Log a message when the new tab page is loaded
console.log('Custom new tab page loaded!');

  function openLink(url) {
    window.open(url, '_blank');
  }

  var buttons = document.querySelectorAll('button[data-link]');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var url = button.getAttribute('data-link');
      if (url) {
        openLink(url);
      }
    });
  });
});
