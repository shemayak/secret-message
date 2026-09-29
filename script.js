// Wait until the DOM elements are fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('test-btn');
    const card = document.querySelector('.test-card');
    const text = document.getElementById('status-text');

    // Click event to change background and text dynamically
    button.addEventListener('click', () => {
        card.style.backgroundColor = '#e1f5fe';
        text.textContent = '🎉 JavaScript works! The DOM has been manipulated successfully.';
        text.style.color = '#0288d1';
        button.textContent = 'Success!';
        button.style.backgroundColor = '#28a745';
    });
});
