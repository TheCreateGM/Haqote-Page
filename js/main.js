// ========================================
// HaqotePad Landing Page - Main JavaScript
// Bootstrap 5.3.3 Compatible
// ========================================

(function() {
    'use strict';

    // ========================================
    // Mobile Menu - Bootstrap handles collapse
    // Auto-close menu when clicking nav links
    // ========================================
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close navbar on mobile after clicking a link
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow to navbar on scroll
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#" or empty
            if (!href || href === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Back to Top Button
    // ========================================
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 500) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // Intersection Observer for Fade-in Animations
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.feature-card, .step, .preview-item, .feedback-info, .form-preview'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Add fade-in class styling dynamically
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Form Link Tracking (Analytics Ready)
    // ========================================
    const feedbackLinks = document.querySelectorAll('a[href*="forms.gle"], a[href*="google.com/forms"]');
    
    feedbackLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Analytics event tracking can be added here
            console.log('Feedback form link clicked');
            
            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // ========================================
    // Keyboard Navigation Enhancement
    // Bootstrap handles Escape key for navbar
    // ========================================

    // ========================================
    // Feature Card Hover Effect Enhancement
    // ========================================
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // ========================================
    // Dynamic Copyright Year
    // ========================================
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('.footer-bottom p');
    
    copyrightElements.forEach(element => {
        if (element.textContent.includes('2025')) {
            element.textContent = element.textContent.replace('2025', currentYear);
        }
    });

    // ========================================
    // Prevent Flash of Unstyled Content
    // ========================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // ========================================
    // External Links - Security Enhancement
    // ========================================
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // ========================================
    // Performance: Lazy Load Images (if images are added)
    // ========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ========================================
    // Smooth Scroll Polyfill Check
    // ========================================
    function isSmoothScrollSupported() {
        return 'scrollBehavior' in document.documentElement.style;
    }

    if (!isSmoothScrollSupported()) {
        console.warn('Smooth scroll not supported in this browser');
        // Fallback behavior is already handled with immediate scroll
    }

    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c🎉 Welcome to HaqotePad! 🎉', 'color: #2563EB; font-size: 20px; font-weight: bold;');
    console.log('%cSmart note-taking with AI-powered assistance', 'color: #6B7280; font-size: 14px;');
    console.log('%cInterested in the code? Check out our GitHub!', 'color: #10B981; font-size: 12px;');

    // ========================================
    // Performance Monitoring (Optional)
    // ========================================
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            
            if (pageLoadTime > 0) {
                console.log(`Page load time: ${pageLoadTime}ms`);
            }
        });
    }

    // ========================================
    // Accessibility: Skip to Content Link
    // ========================================
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary-blue);
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        z-index: 9999;
        border-radius: 0 0 4px 0;
        font-weight: 600;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ID to main content area
    const heroSection = document.querySelector('.hero');
    if (heroSection && !heroSection.id) {
        heroSection.id = 'main-content';
    }

    // ========================================
    // Error Handling for Missing Elements
    // ========================================
    if (!navbar) {
        console.warn('Navbar not found');
    }
    
    if (!navbarCollapse) {
        console.warn('Navbar collapse not found');
    }
    
    if (!backToTopButton) {
        console.warn('Back to top button not found');
    }

    // ========================================
    // Service Worker Registration (Optional for PWA)
    // ========================================
    if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
        window.addEventListener('load', function() {
            // Uncomment the following lines when you have a service worker file
            // navigator.serviceWorker.register('/sw.js')
            //     .then(registration => console.log('SW registered:', registration))
            //     .catch(error => console.log('SW registration failed:', error));
        });
    }

})();
