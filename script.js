// Dark & Light Mode Theme Management
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    
    if (isLight) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
});

// Explicit default layout setup rules
sunIcon.style.display = 'block';
moonIcon.style.display = 'none';

// Precise Anchor Smooth Scroll Engine (Fixes CTA Actions)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 76, // Perfectly accounts for sticky header spacing
                behavior: 'smooth'
            });
        }
    });
});