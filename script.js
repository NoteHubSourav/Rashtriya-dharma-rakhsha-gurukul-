document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple scroll-reveal animation
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, /* relative to the viewport */
        rootMargin: '0px',
        threshold: 0.2 /* percentage of target element visible */
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // You can add more complex animations here with plain JavaScript if needed,
    // like background particle effects (challenging on mobile without libraries)
    // or more dynamic text animations.
});
