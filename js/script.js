// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Form submission handling
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to your server
        // For demo purposes, we'll just show an alert
        alert('Thank you for your message! We will contact you soon.');
        this.reset();
    });
});

// Sticky service navigation
window.addEventListener('scroll', function() {
    const serviceNav = document.querySelector('.service-nav');
    if (serviceNav) {
        if (window.scrollY > 200) {
            serviceNav.classList.add('shadow-sm', 'bg-white');
        } else {
            serviceNav.classList.remove('shadow-sm', 'bg-white');
        }
    }
});

// WhatsApp button click event
document.querySelectorAll('.whatsapp-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Track WhatsApp clicks (you would replace this with your analytics code)
        console.log('WhatsApp button clicked');
    });
});