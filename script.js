// 1. Inicializar Smooth Scroll (Lenis)
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// 2. Custom Cursor Logic
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0
    });
    gsap.to(follower, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.3
    });
});

// Cursor Efecto en Links
document.querySelectorAll('a, button, .album-card, input').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(follower, { scale: 2, backgroundColor: 'rgba(255,255,255,0.1)', duration: 0.3 });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(follower, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
    });
});

// 3. Preloader & Hero Animation
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.to('.loader-text', {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power4.inOut"
    })
    .to('.preloader', {
        duration: 1,
        height: 0,
        ease: "expo.inOut"
    })
    .from('.hero-title', {
        duration: 1.5,
        y: 200,
        skewY: 10,
        opacity: 0,
        ease: "power4.out"
    }, "-=0.5")
    .from('.hero-subtitle', {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power3.out"
    }, "-=1")
    .from('.navbar', {
        duration: 1,
        y: -100,
        opacity: 0
    }, "-=1");
});

// 4. Scroll Animations (GSAP ScrollTrigger)
gsap.registerPlugin(ScrollTrigger);

// Reveal Imágenes de Historia
gsap.from('.history-image', {
    scrollTrigger: {
        trigger: '.history-section',
        start: 'top 80%',
    },
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
});

// Reveal Texto Historia
gsap.from('.reveal-text', {
    scrollTrigger: {
        trigger: '.history-text',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
});

// Animación de Cards de Conciertos
document.querySelectorAll('.show-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 90%',
        },
        opacity: 0,
        y: 30,
        duration: 1
    });
});

// Efecto Parallax en Hero Video
gsap.to('.hero-video', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 200
});

// Glitch sutil al scroll
gsap.to('.glitch', {
    scrollTrigger: {
        trigger: '.quote-section',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    opacity: 1,
    scale: 1.1,
    duration: 1.2
});

// 5. Spotify Search Logic
const searchBtn = document.getElementById('spotify-search-btn');
const searchInput = document.getElementById('spotify-search-input');

if (searchBtn && searchInput) {
    const performSearch = () => {
        const query = searchInput.value.trim();
        if (query) {
            window.open(`https://open.spotify.com/search/${encodeURIComponent(query)}`, '_blank');
        }
    };
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}
