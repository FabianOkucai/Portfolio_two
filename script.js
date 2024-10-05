// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filter Projects by Category with smooth transitions
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');

    projects.forEach(project => {
        // Smoothly hide or show projects
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
            setTimeout(() => {
                project.style.opacity = '1'; // Fade-in animation
                project.style.transform = 'scale(1)';
            }, 10); // Slight delay for smoothness
        } else {
            project.style.opacity = '0'; // Fade-out animation
            project.style.transform = 'scale(0.9)';
            setTimeout(() => {
                project.style.display = 'none';
            }, 300); // Allow time for animation to complete
        }
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 150) {
        navbar.classList.add('scrolled'); // Adds a background to the navbar
    } else {
        navbar.classList.remove('scrolled'); // Reverts to transparent navbar
    }
});

// Scroll-based animation for sections
const sections = document.querySelectorAll('section');

const revealSection = () => {
    const scrollPosition = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition > sectionTop - window.innerHeight + sectionHeight / 4) {
            section.classList.add('visible'); // Section will fade in
        } else {
            section.classList.remove('visible'); // Section will fade out
        }
    });
};

window.addEventListener('scroll', revealSection);
revealSection(); // Run on page load

// Back-to-top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.opacity = '1'; // Show button
    } else {
        backToTopBtn.style.opacity = '0'; // Hide button
    }
});

// Lazy loading for images (if applicable)
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img.lazy');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove('lazy');
                observer.unobserve(lazyImage);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});