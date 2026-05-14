/**
 * Pantai Nipah Landing Page - Core Interactions
 * Vanilla JavaScript implementation
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Intersection Observer (Scroll Reveal)
    // Observer for elements with the 'reveal' class
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve after it reaches the viewport once
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Navbar Scroll Effect
    // Adjust navbar transparency based on scroll position
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 2rem';
            navbar.style.background = 'rgba(2, 12, 18, 0.95)';
            navbar.classList.add('shadow-xl');
        } else {
            navbar.style.padding = '1.25rem 2rem';
            navbar.style.background = 'rgba(2, 12, 18, 0.8)';
            navbar.classList.remove('shadow-xl');
        }
    });

    // 4. Mood/Theme Switcher
    // Changes the 'vibe' of the header
    const moodBtns = document.querySelectorAll('.mood-btn');
    const heroImg = document.querySelector('header img');
    const heroOverlay = document.querySelector('.hero-gradient');

    const moods = {
        tropical: {
            img: 'https://images.unsplash.com/photo-1544945582-3b466dca8246?q=80&w=2000&auto=format&fit=crop',
            gradient: 'linear-gradient(to bottom, transparent, rgba(2, 12, 18, 1))'
        },
        serene: {
            img: 'https://images.unsplash.com/photo-1520942702018-086320074e57?q=80&w=2000&auto=format&fit=crop',
            gradient: 'linear-gradient(to bottom, rgba(45, 212, 191, 0.1), rgba(2, 12, 18, 1))'
        },
        sunset: {
            img: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=2000&auto=format&fit=crop',
            gradient: 'linear-gradient(to bottom, rgba(251, 146, 60, 0.1), rgba(2, 12, 18, 1))'
        }
    };

    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const mood = btn.getAttribute('data-mood');
            
            // UI Feedback
            moodBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            // Apply Theme
            if (moods[mood]) {
                heroImg.style.opacity = '0';
                setTimeout(() => {
                    heroImg.src = moods[mood].img;
                    heroOverlay.style.background = moods[mood].gradient;
                    heroImg.style.opacity = '0.6';
                }, 300);
            }
        });
    });

    // 5. Mock Temperature Update
    // Simulating a fetching behavior for live info
    const tempDisplay = document.getElementById('temp-display');
    const updateTemp = () => {
        const baseTemp = 28;
        const variance = Math.random() * 2;
        const currentTemp = (baseTemp + variance).toFixed(1);
        
        if (tempDisplay) {
            tempDisplay.innerHTML = `<span class="text-white">${currentTemp}°C</span>`;
        }
    };

    // Initial call and periodic update
    updateTemp();
    setInterval(updateTemp, 30000); // 30 seconds

    // 6. Smooth Scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Document logging for console (developer feedback)
    console.log("🌊 Pantai Nipah Landing Page Initialized Successfully.");
});
