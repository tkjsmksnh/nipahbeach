/**
 * NIPAH BEACH - Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. State Management untuk Mood
    const moodToggleVibrant = document.getElementById('mood-vibrant');
    const moodToggleSerene = document.getElementById('mood-serene');
    const heroBg = document.getElementById('hero-bg');

    const updateMood = (mood) => {
        if (mood === 'vibrant') {
            heroBg.src = "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2070";
            moodToggleVibrant.classList.add('bg-cyan-500', 'text-white');
            moodToggleVibrant.classList.remove('opacity-50');
            moodToggleSerene.classList.add('opacity-50');
            moodToggleSerene.classList.remove('bg-cyan-500', 'text-white');
        } else {
            heroBg.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073";
            moodToggleSerene.classList.add('bg-cyan-500', 'text-white');
            moodToggleSerene.classList.remove('opacity-50');
            moodToggleVibrant.classList.add('opacity-50');
            moodToggleVibrant.classList.remove('bg-cyan-500', 'text-white');
        }
    };

    moodToggleVibrant?.addEventListener('click', () => updateMood('vibrant'));
    moodToggleSerene?.addEventListener('click', () => updateMood('serene'));

    // 3. Navbar Scroll Effect
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-[#0A1118]/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
            nav.querySelector('.nav-container').classList.remove('py-6');
            nav.querySelector('.nav-container').classList.add('py-4');
        } else {
            nav.classList.remove('bg-[#0A1118]/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
            nav.querySelector('.nav-container').classList.add('py-6');
            nav.querySelector('.nav-container').classList.remove('py-4');
        }
    });

    // 4. Intersection Observer untuk Animasi 'Reveal'
    const observerOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});
