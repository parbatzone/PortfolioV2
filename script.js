// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Simple animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .project-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
        }
    });
};

// Initialize animations
window.addEventListener('DOMContentLoaded', () => {
    // Set initial state for animated elements
    const elements = document.querySelectorAll('.skill-card, .project-card');
    elements.forEach(element => {
        element.style.transform = 'translateY(20px)';
        element.style.opacity = '0';
        element.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
    });
    
    // Trigger animation on load
    animateOnScroll();
});

// Trigger animation on scroll
window.addEventListener('scroll', animateOnScroll);