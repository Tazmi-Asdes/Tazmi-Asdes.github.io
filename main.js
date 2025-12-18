// Minimal JS for interactivity, e.g. night mode switchers or greeting, if needed

// Example: Greeting message based on time
document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.createElement('div');
    greeting.style.textAlign = 'center';
    greeting.style.color = '#5eead4';
    greeting.style.fontWeight = 'bold';
    greeting.style.marginBottom = '14px';

    const now = new Date();
    const hour = now.getHours();
    if (hour < 12) {
        greeting.textContent = "Good morning 👋";
    } else if (hour < 18) {
        greeting.textContent = "Good afternoon ☀️";
    } else {
        greeting.textContent = "Good evening 🌙";
    }
    document.querySelector('header').insertBefore(greeting, document.querySelector('.avatar'));
});