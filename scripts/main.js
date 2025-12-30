// Minimal JavaScript - NO animations for hero section

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links only
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==========================================
    // PHASE 3.1: MOBILE HAMBURGER MENU
    // With accessibility & breakpoint guard
    // Slide-left animation
    // ==========================================
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        // Only activate on mobile breakpoint
        const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

        // Clone resume button and social icons into mobile menu (only on mobile)
        const headerRight = document.querySelector('.header-right');
        const cloneElementsToMenu = () => {
            if (headerRight && isMobile()) {
                const resumeBtn = headerRight.querySelector('.header-resume-btn');
                const socialIcons = headerRight.querySelector('.social-icons');
                
                // Remove existing clones first
                const existingResume = navMenu.querySelector('.header-resume-btn');
                const existingSocial = navMenu.querySelector('.social-icons');
                if (existingResume) existingResume.remove();
                if (existingSocial) existingSocial.remove();
                
                // Clone resume button if it exists
                if (resumeBtn) {
                    const clonedResume = resumeBtn.cloneNode(true);
                    navMenu.appendChild(clonedResume);
                }
                
                // Clone social icons if they exist
                if (socialIcons) {
                    const clonedSocial = socialIcons.cloneNode(true);
                    navMenu.appendChild(clonedSocial);
                }
            } else {
                // Remove clones if not on mobile
                const existingResume = navMenu.querySelector('.header-resume-btn');
                const existingSocial = navMenu.querySelector('.social-icons');
                if (existingResume) existingResume.remove();
                if (existingSocial) existingSocial.remove();
            }
        };

        // Clone on initial load
        cloneElementsToMenu();

        // Re-clone on window resize
        window.addEventListener('resize', cloneElementsToMenu);

        // Ensure menu starts in closed state
        navMenu.classList.remove('active');

        // Helper function to close menu
        const closeMenu = () => {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
            navMenu.setAttribute('aria-hidden', 'true');
            mobileToggle.focus();
        };

        // Helper function to open menu
        const openMenu = () => {
            navMenu.classList.add('active');
            mobileToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
            navMenu.setAttribute('aria-hidden', 'false');
        };

        // Toggle menu on click
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!isMobile()) return; // Guard against desktop
            
            // Toggle menu state
            if (navMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close menu when clicking nav links
        navMenu.addEventListener('click', (e) => {
            if (e.target.matches('.nav-link')) {
                closeMenu();
            }
        });

        // Close menu when clicking outside (on document)
        document.addEventListener('click', (e) => {
            if (isMobile() && navMenu.classList.contains('active')) {
                // Close if clicking outside menu and toggle button
                if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                    closeMenu();
                }
            }
        });

        // Close menu with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // Remove mobile menu state if window resizes above breakpoint
        window.addEventListener('resize', () => {
            if (!isMobile() && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    // Scroll to top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        // Scroll to top on click
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightActiveSection() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Call once on load

    // Header shadow on scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ==========================================
    // PHASE 3.3: ABOUT SECTION "SEE MORE"
    // One-way expansion (no auto-collapse)
    // ==========================================
    const aboutSeeMoreBtn = document.querySelector('.about-see-more');
    const aboutText = document.querySelector('.about-text');

    if (aboutSeeMoreBtn && aboutText) {
        // Only activate on mobile breakpoint
        const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

        aboutSeeMoreBtn.addEventListener('click', () => {
            if (!isMobile()) return; // Guard against desktop

            // One-way expansion: add expanded class, never remove
            aboutText.classList.add('expanded');
        });
    }
});
