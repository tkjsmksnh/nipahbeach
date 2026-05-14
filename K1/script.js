/* 
   script.js - Interactive features for Pantai Nipah Landing Page 
   Includes: Theme Switcher, Reveal On Scroll, and Dynamic Weather Mock 
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Theme Selection Logic
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', theme);
            
            // Update active state in UI
            themeButtons.forEach(b => b.classList.remove('ring-2', 'ring-offset-2'));
            btn.classList.add('ring-2', 'ring-offset-2');

            // Feedback: Small scroll to let user see "vibe" change? Optional.
        });
    });

    // 3. Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Dynamic Footer Info (Weather Mock & Time)
    const tempEl = document.getElementById('footer-temp');
    const timeEl = document.getElementById('footer-time');

    function updateFooterInfo() {
        // Mock Temperature for Lombok area
        const baseTemp = 28;
        const randomVar = (Math.random() * 4 - 2).toFixed(1);
        if (tempEl) tempEl.textContent = `${(baseTemp + parseFloat(randomVar)).toFixed(1)}°C`;

        // Local Time
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Makassar' };
        if (timeEl) timeEl.textContent = now.toLocaleTimeString('id-ID', options) + ' WITA';
    }

    updateFooterInfo();
    setInterval(updateFooterInfo, 1000);

    // 6. Mobile Menu Toggle (Simplified)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
