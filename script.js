// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. INITIALIZE AOS (Animate On Scroll)
    ========================================= */
    AOS.init({
        duration: 800,
        easing: 'ease-in-out-cubic',
        once: false, // Only animate once when scrolling down
        offset: 50
    });

    /* =========================================
       2. INITIALIZE TYPED.JS
    ========================================= */
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: [
                'B.Tech CSE Student.',
                'Full Stack Developer.',
                'Problem Solver.',
                'Tech Enthusiast.'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true,
            showCursor: false // Using default CSS cursor if desired, or false
        });
    }

    /* =========================================
       3. DARK/LIGHT THEME TOGGLE
    ========================================= */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggleBtn.querySelector('i');

    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    themeToggleBtn.addEventListener('click', () => {
        let currentTheme = body.getAttribute('data-theme');
        let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);

        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            icon.className = 'fa-solid fa-sun'; // Show sun when dark to switch to light
        } else {
            icon.className = 'fa-solid fa-moon'; // Show moon when light to switch to dark
        }
    }

    // Initialize icon based on current state
    updateThemeIcon(body.getAttribute('data-theme'));

    /* =========================================
       4. SCROLL PROGRESS OVERLAY & NAVBAR
    ========================================= */
    const scrollProgress = document.getElementById('scroll-progress');
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Calculate Scroll Percentage
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;

        // Update Progress Bar
        scrollProgress.style.width = scrolled + '%';

        // Sticky Navbar styling
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to Top Button visibility
        if (scrollTop > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    /* =========================================
       5. SKILL BAR ANIMATION (Intersection Observer)
    ========================================= */
    const progressFills = document.querySelectorAll('.progress-fill');

    // Observer options
    const skillObserverOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };

    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const width = element.getAttribute('data-width');
                // Small timeout for visual appeal
                setTimeout(() => {
                    element.style.width = width;
                }, 200);
                observer.unobserve(element);
            }
        });
    }, skillObserverOptions);

    progressFills.forEach(fill => {
        skillObserver.observe(fill);
    });

    /* =========================================
       6. SMOOTH SCROLLING FOR NAV LINKS
    ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Ignore if it's just "#"
            if (targetId === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* =========================================
       7. SET CURRENT YEAR IN FOOTER
    ========================================= */
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
