document.addEventListener('DOMContentLoaded', () => {
    // Dynamically update the copyright year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});