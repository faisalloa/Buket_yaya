// Toggle Menu untuk Mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

// Smooth Scroll untuk Nav Link
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});