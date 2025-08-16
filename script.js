// Modern JavaScript with dynamic content loading and interactions
document.addEventListener('DOMContentLoaded', () => {
    // Music genres data
    const musicGenres = [
        'Classical',
        'Electronic',
        'Jazz',
        'Rock',
        'Synthwave'
    ];

    // Vintage computers data
    const vintageComputers = [
        {
            name: 'Commodore 64',
            year: 1982,
            description: 'One of the most popular home computers of all time.'
        },
        {
            name: 'Apple II',
            year: 1977,
            description: 'A revolutionary personal computer that shaped the industry.'
        },
        {
            name: 'IBM PC',
            year: 1981,
            description: 'The computer that standardized the PC platform.'
        }
    ];

    // Populate music genres
    const genreList = document.getElementById('genre-list');
    musicGenres.forEach(genre => {
        const li = document.createElement('li');
        li.textContent = genre;
        li.classList.add('genre-item');
        genreList.appendChild(li);
    });

    // Featured computer rotation
    let currentComputerIndex = 0;
    const featuredComputer = document.getElementById('featured-computer');

    function updateFeaturedComputer() {
        const computer = vintageComputers[currentComputerIndex];
        featuredComputer.innerHTML = `
            <h4>${computer.name} (${computer.year})</h4>
            <p>${computer.description}</p>
        `;
        currentComputerIndex = (currentComputerIndex + 1) % vintageComputers.length;
    }

    // Initial load and rotation every 5 seconds
    updateFeaturedComputer();
    setInterval(updateFeaturedComputer, 5000);

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        // Here you would typically send the form data to a server
        alert('Thank you for your message! (Form submission is simulated)');
        contactForm.reset();
    });

    // Add scroll animation for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
});
