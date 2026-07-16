
// ============================================
// LANGUAGE SWITCHER
// ============================================
const languageBtn = document.getElementById('languageBtn');
const languageDropdown = document.getElementById('languageDropdown');
const currentLang = document.getElementById('currentLang');
const currentFlag = document.getElementById('currentFlag');
const languageOptions = document.querySelectorAll('.language-option');

if (languageBtn && languageDropdown) {
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('active');
        languageBtn.classList.toggle('active');
    });

    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.dataset.lang;
            const flag = option.dataset.flag;
            const langName = option.querySelector('span').textContent;
            
            currentLang.textContent = langName;
            currentFlag.src = `https://flagcdn.com/w40/${flag}.png`;
            currentFlag.alt = langName;
            
            languageDropdown.classList.remove('active');
            languageBtn.classList.remove('active');
            
            console.log('Language changed to:', lang);
        });
    });

    document.addEventListener('click', (e) => {
        if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('active');
            languageBtn.classList.remove('active');
        }
    });
}

// ============================================
// SWIPER SLIDER
// ============================================
if (typeof Swiper !== 'undefined') {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

if (typeof Swiper !== 'undefined') {
    const partnersSwiper = new Swiper('.partners-swiper', {
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                slidesPerView: 5,
                spaceBetween: 30,
                breakpoints: {
                    320: { slidesPerView: 2 },
                    480: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
        }
    });
}

// ============================================
// MOBILE MENU
// ============================================
const hamburger = document.querySelector('.hamburger');
const navWrapper = document.querySelector('.nav-wrapper');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.querySelector('.mobile-overlay');
const submenuToggles = document.querySelectorAll('.has-submenu > a');

function openMenu() {
    navWrapper.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuFunc() {
    navWrapper.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Close all submenus when closing main menu
    document.querySelectorAll('.has-submenu').forEach(item => {
        item.classList.remove('active');
    });
}

// Open menu
if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        openMenu();
    });
}

// Close menu button
if (closeMenu) {
    closeMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMenuFunc();
    });
}

// Close when clicking overlay
if (overlay) {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeMenuFunc();
        }
    });
}

// Prevent menu from closing when clicking inside it
if (navWrapper) {
    navWrapper.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Mobile submenu toggle - FIXED VERSION
submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        // Only prevent default and toggle on mobile
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            e.stopPropagation();
            
            const parentItem = toggle.parentElement;
            const isCurrentlyActive = parentItem.classList.contains('active');
            
            // Close all other submenus
            document.querySelectorAll('.has-submenu').forEach(item => {
                if (item !== parentItem) {
                    item.classList.remove('active');
                }
            });

            // Toggle current submenu
            if (isCurrentlyActive) {
                parentItem.classList.remove('active');
            } else {
                parentItem.classList.add('active');
            }
            
            console.log('Submenu toggled:', parentItem.classList.contains('active'));
        }
    });
});

// Close menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        closeMenuFunc();
    }
});

// ============================================
// SMOOTH SCROLLING
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            if (window.innerWidth <= 1024) {
                closeMenuFunc();
            }
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// PROGRESS BARS ANIMATION
// ============================================
const progressBars = document.querySelectorAll('.progress-fill');

const animateProgress = () => {
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            bar.style.transition = 'width 1.5s ease';
        }
    });
};

window.addEventListener('scroll', animateProgress);
animateProgress();

// ============================================
// ACCORDION
// ============================================
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const isActive = accordionItem.classList.contains('active');
        
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });
        
        if (!isActive) {
            accordionItem.classList.add('active');
        }
    });
});

// ============================================
// NEWSLETTER FORM
// ============================================
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        alert(`Aboneliğiniz için teşekkürler: ${email}`);
        newsletterForm.reset();
    });
}

const newsletterForm1 = document.getElementById('newsletterForm');
if (newsletterForm1) {
    newsletterForm1.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm1.querySelector('input').value;
        alert(`Aboneliğiniz için teşekkürler: ${email}`);
        newsletterForm1.reset();
    });
}

// ============================================
// CONTACT FORM
// ============================================
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form && formMessage) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        formMessage.className = 'form-message';
        formMessage.textContent = '';
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !phone) {
            showMessage('Lütfen zorunlu alanların tümünü doldurun.', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Lütfen geçerli bir e-posta adresi girin.', 'error');
            return;
        }
        
        const phoneRegex = /^[0-9+\-\s()]+$/;
        if (!phoneRegex.test(phone)) {
            showMessage('Lütfen geçerli bir telefon numarası girin.', 'error');
            return;
        }
        
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.textContent = 'Gönderiliyor...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showMessage('Teşekkürler! Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.', 'success');
            form.reset();
            submitBtn.textContent = 'Mesaj Gönder';
            submitBtn.disabled = false;
            
            setTimeout(() => {
                formMessage.className = 'form-message';
            }, 5000);
        }, 1500);
    });
    
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#F2295B';
            } else {
                this.style.borderColor = '#ddd';
            }
        });
        
        input.addEventListener('input', function() {
            this.style.borderColor = '#ddd';
        });
    });
}



// ==========================================================================
// WELCOME POPUP
// ==========================================================================
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('welcomePopup');
    const closeBtn = document.getElementById('closePopup');

    // Check if popup has been shown in this session
    if (!sessionStorage.getItem('popupShowntr')) {
        console.log('Popup not shown yet (TR), showing now...');
        // Show popup after a short delay to ensure page load feel
        setTimeout(() => {
            if (popup) {
                console.log('Displaying TR popup');
                popup.style.display = 'flex';
                sessionStorage.setItem('popupShowntr', 'true');
            } else {
                console.error('Popup element not found (TR)');
            }
        }, 1000);
    } else {
        console.log('Popup already shown (TR)');
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (popup) popup.style.display = 'none';
        });
    }

    // Close on outside click
    if (popup) {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    }
});
