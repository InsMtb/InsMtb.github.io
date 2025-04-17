const toggleBtn = document.getElementById('mode-toggle');
const buttonLabel = document.getElementById('mode-text');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        buttonLabel.textContent = '☀️';
    } else {
        buttonLabel.textContent = '🌙';
    }
});