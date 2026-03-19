document.addEventListener('DOMContentLoaded', () => {

    // --- Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-times');
            hamburger.querySelector('i').classList.toggle('fa-bars');
        });

        // Close menu when clicking a link
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            });
        });
    }

    // --- Custom Cursor ---
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    if(cursorDot && cursorOutline) {
        window.addEventListener('mousemove', function(e) {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows exactly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with delay (animation)
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Cursor interactions
        const interactables = document.querySelectorAll('a, button, .cursor-hover, input, textarea');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.backgroundColor = 'rgba(255, 107, 53, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    }

    // --- Antigravity / Parallax Shapes with Physics feel ---
    const scene = document.getElementById('scene');
    if(scene) {
        document.addEventListener('mousemove', (e) => {
            const shapes = document.querySelectorAll('.shape');
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 20;
                const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
                const yOffset = (window.innerHeight / 2 - e.clientY) / speed;

                shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        });

        // Populate more shapes dynamically
        const colors = ['#FF6B35', '#1A2332', '#ffffff'];

        for(let i=0; i<5; i++) {
            const div = document.createElement('div');
            div.classList.add('shape');
            
            // Random properties
            const size = Math.random() * 60 + 20;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 5 + 5;
            
            div.style.width = `${size}px`;
            div.style.height = `${size}px`;
            div.style.left = `${left}%`;
            div.style.top = `${top}%`;
            div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            div.style.opacity = '0.1';
            div.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
            
            if(Math.random() > 0.5) div.classList.add('square');
            
            scene.appendChild(div);
        }
    }

    // --- Scroll Reveal Animation ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(50px)';
        sec.style.transition = 'all 0.8s ease-out';
        observer.observe(sec);
    });
});
