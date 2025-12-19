// Consulting 4 E Website JavaScript

/**
 * Mobile Menu Toggle Functionality
 */
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenuButton || !mobileMenu) return;

    // Helpers to open/close with animation while keeping the existing "hidden" Tailwind utility
    const TRANSITION_MS = 260;

    function openMenu() {
        // make visible, start from closed state
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.remove('mobile-menu-closing');
        // ensure starting position for animation
        requestAnimationFrame(() => {
            mobileMenu.classList.add('mobile-menu-open');
            mobileMenuButton.setAttribute('aria-expanded', 'true');
        });

        // Attach listeners to support keyboard and outside clicks
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('click', onOutsideClick);
    }

    function closeMenu() {
        mobileMenu.classList.remove('mobile-menu-open');
        mobileMenu.classList.add('mobile-menu-closing');
        mobileMenuButton.setAttribute('aria-expanded', 'false');

        // wait for CSS transition before hiding completely
        setTimeout(() => {
            mobileMenu.classList.remove('mobile-menu-closing');
            mobileMenu.classList.add('hidden');
        }, TRANSITION_MS);

        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('click', onOutsideClick);
        // return focus to toggle button for accessibility
        mobileMenuButton.focus();
    }

    function onKeyDown(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    }

    function onOutsideClick(e) {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            closeMenu();
        }
    }

    mobileMenuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileMenu.classList.contains('mobile-menu-open') && !mobileMenu.classList.contains('hidden');
        if (isOpen) closeMenu(); else openMenu();
    });
}

/**
 * Form Validation and Submission
 */
function initContactForm() {
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Basic validation
            if (!validateForm(formObject)) {
                return;
            }
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual endpoint)
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Show success message
                showNotification('Thank you for your message! We will get back to you within 24 hours.', 'success');
                
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
}

/**
 * Form Validation
 */
function validateForm(formData) {
    const errors = [];
    
    // Required fields
    if (!formData.firstName || formData.firstName.trim() === '') {
        errors.push('First name is required');
    }
    
    if (!formData.lastName || formData.lastName.trim() === '') {
        errors.push('Last name is required');
    }
    
    if (!formData.email || formData.email.trim() === '') {
        errors.push('Email is required');
    } else if (!isValidEmail(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.message || formData.message.trim() === '') {
        errors.push('Message is required');
    }
    
    if (!formData.consent) {
        errors.push('You must agree to be contacted');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join('<br>'), 'error');
        return false;
    }
    
    return true;
}

/**
 * Email Validation
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Notification System
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 400px;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add type-specific styles
    if (type === 'success') {
        notification.style.backgroundColor = '#dcfce7';
        notification.style.color = '#166534';
        notification.style.border = '1px solid #bbf7d0';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#fef2f2';
        notification.style.color = '#991b1b';
        notification.style.border = '1px solid #fecaca';
    } else {
        notification.style.backgroundColor = '#eff6ff';
        notification.style.color = '#1e40af';
        notification.style.border = '1px solid #bfdbfe';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScrolling() {
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
}

/**
 * Lazy Loading for Images
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * Add Animation Classes on Scroll
 */
function initScrollAnimations() {
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        animateOnScroll.observe(el);
    });
}

/**
 * Performance Monitoring
 */
function initPerformanceMonitoring() {
    // Log Core Web Vitals
    if ('PerformanceObserver' in window) {
        try {
            // Largest Contentful Paint
            new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.startTime);
            }).observe({ entryTypes: ['largest-contentful-paint'] });
            
            // First Input Delay
            new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                entries.forEach(entry => {
                    console.log('FID:', entry.processingStart - entry.startTime);
                });
            }).observe({ entryTypes: ['first-input'] });
            
            // Cumulative Layout Shift
            new PerformanceObserver((entryList) => {
                let clsValue = 0;
                const entries = entryList.getEntries();
                entries.forEach(entry => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                });
                console.log('CLS:', clsValue);
            }).observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
            console.log('Performance monitoring not available');
        }
    }
}

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initContactForm();
    initSmoothScrolling();
    initLazyLoading();
    initScrollAnimations();
    initPerformanceMonitoring();
    
    console.log('Consulting 4 E website initialized successfully');
});

/**
 * Add CSS animations
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: inherit;
        padding: 0;
        line-height: 1;
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .lazy.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);