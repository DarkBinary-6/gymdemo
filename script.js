// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.classList.toggle('active');
    console.log('Menu toggled, active:', navLinks.classList.contains('active'));
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
} else {
  console.error('Menu toggle or nav links not found!');
}

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(5, 5, 5, 0.95)';
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
  } else {
    navbar.style.background = 'rgba(5, 5, 5, 0.8)';
    navbar.style.boxShadow = 'none';
  }
});

// ===== LIVE COUNTER ANIMATION =====
const counters = document.querySelectorAll('.stat-number');

const animateCounter = (counter) => {
  const target = parseInt(counter.getAttribute('data-target'));
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60fps
  let current = 0;

  // Reset counter to 0 before animating
  counter.textContent = '0';

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      counter.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
};

// Trigger counter animation EVERY TIME stats section comes into view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animate counters every time the section is visible
      counters.forEach(counter => {
        animateCounter(counter);
      });
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-grid');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// ===== FORM SUBMISSION HANDLER =====
const form = document.getElementById('enquiryForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('userName').value || 'Not provided';
    const phone = document.getElementById('userPhone')?.value || 'Not provided';
    const age = document.getElementById('userAge')?.value || 'Not provided';
    const enquiryFor = document.getElementById('enquiryFor')?.value || 'Self';
    const goal = document.getElementById('userGoal')?.value || 'General Enquiry';

    const message = `🏋️ *New Enquiry from IronForge Website*

👤 *Name:* ${name}
📱 *Phone:* ${phone}
🎂 *Age:* ${age}
👥 *Enquiring For:* ${enquiryFor}
🎯 *Goal:* ${goal}

I'd like to know more about joining IronForge Gym!`;

    const whatsappURL = `https://wa.me/919278378772?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  });
}

// ===== GSAP ANIMATIONS =====
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ===== ENSURE ELEMENTS ARE VISIBLE FIRST =====
// This prevents elements from being stuck invisible on cached page loads
gsap.set('.hero-content', { opacity: 1, y: 0 });
gsap.set('.hero-line', { opacity: 1, y: 0, rotationX: 0 });
gsap.set('.hero-cta-group', { opacity: 1, y: 0 });
gsap.set('.hero-trust-text', { opacity: 1, y: 0 });
gsap.set('.program-card', { opacity: 1, y: 0, rotationX: 0 });
gsap.set('.trainer-card', { opacity: 1, x: 0, scale: 1 });
gsap.set('.img-box', { opacity: 1, scale: 1, rotationY: 0 });
gsap.set('.stat-item', { opacity: 1, y: 0, scale: 1 });
gsap.set('.contact-info', { opacity: 1, x: 0, rotationY: 0 });
gsap.set('.contact-form-wrapper', { opacity: 1, x: 0, rotationY: 0 });
gsap.set('.section-title', { opacity: 1, y: 0, scale: 1 });
gsap.set('.section-label', { opacity: 1, x: 0 });
gsap.set('.banner-content h2', { opacity: 1, scale: 1, rotation: 0 });
gsap.set('.banner-content .main-btn', { opacity: 1, y: 0 });
gsap.set('section', { opacity: 1, y: 0, scale: 1 });
// New sections
gsap.set('.testimonial-card', { opacity: 1, y: 0, scale: 1 });
gsap.set('.pricing-card', { opacity: 1, y: 0, scale: 1 });
gsap.set('.trust-badge', { opacity: 1, y: 0 });
gsap.set('.benefit-list li', { opacity: 1, x: 0 });

// Hero parallax effect with enhanced movement
gsap.to('.hero-bg', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1.5
  },
  y: 400,
  scale: 1.3,
  ease: 'none'
});

// Hero content fade in with bounce - use fromTo for reliability
gsap.fromTo('.hero-content',
  { opacity: 0, y: 80 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power4.out'
  }
);

// Hero title stagger animation with advanced easing
gsap.fromTo('.hero-line',
  { opacity: 0, y: 120, rotationX: -90 },
  {
    opacity: 1,
    y: 0,
    rotationX: 0,
    transformOrigin: 'top center',
    duration: 0.8,
    stagger: 0.2,
    delay: 0.4,
    ease: 'back.out(1.7)'
  }
);

// Scroll indicator animation
gsap.to('.scroll-indicator', {
  y: 15,
  duration: 1.2,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut'
});

// Section animations on scroll with enhanced effects
// Improved mobile detection - includes tablets and touch devices
const isMobile = window.matchMedia('(max-width: 768px)').matches ||
  window.matchMedia('(pointer: coarse)').matches ||
  'ontouchstart' in window;

// Mobile-optimized ScrollTrigger settings
if (isMobile) {
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true
  });
}

const sections = gsap.utils.toArray('section');
sections.forEach((section, index) => {
  gsap.fromTo(section,
    { opacity: 0, y: isMobile ? 30 : 100, scale: 1 },
    {
      scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        end: 'top 50%',
        toggleActions: 'play none none none',
        // CRITICAL: Disable scrub on mobile - causes jerky scrolling
        scrub: false
      },
      opacity: 1,
      y: 0,
      scale: 1,
      duration: isMobile ? 0.3 : 0.8,
      ease: isMobile ? 'power2.out' : 'power3.out'
    }
  );
});

// About images animation with 3D rotation
gsap.fromTo('.img-box',
  { opacity: 0, scale: 0.7, rotationY: -45 },
  {
    scrollTrigger: {
      trigger: '.about-visuals',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 1,
    scale: 1,
    rotationY: 0,
    duration: 1.2,
    stagger: 0.3,
    ease: 'back.out(2)'
  }
);

// Stats animation with bounce
gsap.fromTo('.stat-item',
  { opacity: 0, y: 50, scale: 0.5 },
  {
    scrollTrigger: {
      trigger: '.stats-grid',
      start: 'top 80%'
    },
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: 'elastic.out(1, 0.5)'
  }
);

// Program cards stagger with 3D effect (simplified on mobile)
gsap.fromTo('.program-card',
  { opacity: 0, y: isMobile ? 40 : 150, rotationX: isMobile ? 0 : 45 },
  {
    scrollTrigger: {
      trigger: '.programs-grid',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    opacity: 1,
    y: 0,
    rotationX: 0,
    duration: isMobile ? 0.35 : 0.7,
    stagger: isMobile ? 0.08 : 0.15,
    ease: 'power3.out'
  }
);

// Trainer cards animation with slide and fade
const trainerCards = gsap.utils.toArray('.trainer-card');
trainerCards.forEach((card, index) => {
  const xFrom = index % 2 === 0 ? -100 : 100;
  gsap.fromTo(card,
    { opacity: 0, x: xFrom, scale: 0.8 },
    {
      scrollTrigger: {
        trigger: '.trainers-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1,
      delay: index * 0.2,
      ease: 'power3.out'
    }
  );
});

// Banner text animation with elastic bounce
gsap.fromTo('.banner-content h2',
  { opacity: 0, scale: 0.5, rotation: -10 },
  {
    scrollTrigger: {
      trigger: '.banner-section',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    },
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 1.2,
    ease: 'elastic.out(1, 0.6)'
  }
);

// Banner button animation
gsap.fromTo('.banner-content .main-btn',
  { opacity: 0, y: 50 },
  {
    scrollTrigger: {
      trigger: '.banner-section',
      start: 'top 70%'
    },
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.3,
    ease: 'back.out(1.7)'
  }
);

// Contact section split animation with enhanced movement
gsap.fromTo('.contact-info',
  { opacity: 0, x: -100, rotationY: -20 },
  {
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    },
    opacity: 1,
    x: 0,
    rotationY: 0,
    duration: 1.2,
    ease: 'power3.out'
  }
);

gsap.fromTo('.contact-form-wrapper',
  { opacity: 0, x: 100, rotationY: 20 },
  {
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    },
    opacity: 1,
    x: 0,
    rotationY: 0,
    duration: 1.2,
    ease: 'power3.out'
  }
);

// Section titles animation with split effect
gsap.utils.toArray('.section-title').forEach(title => {
  gsap.fromTo(title,
    { opacity: 0, y: 50, scale: 0.9 },
    {
      scrollTrigger: {
        trigger: title,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'back.out(1.7)'
    }
  );
});

// Section labels animation
gsap.utils.toArray('.section-label').forEach(label => {
  gsap.fromTo(label,
    { opacity: 0, x: -30 },
    {
      scrollTrigger: {
        trigger: label,
        start: 'top 90%'
      },
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out'
    }
  );
});

// ===== MAGNETIC BUTTON EFFECT =====
const magneticButtons = document.querySelectorAll('.main-btn, .cta-btn');

magneticButtons.forEach(button => {
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    });
  });
});

// ===== CARD MOUSE TRACKING FOR GLOW EFFECT =====
const programCards = document.querySelectorAll('.program-card');

programCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  });
});

// ===== TESTIMONIAL CARDS ANIMATION =====
gsap.fromTo('.testimonial-card',
  { opacity: 0, y: 80, scale: 0.9 },
  {
    scrollTrigger: {
      trigger: '.testimonials-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  }
);

// ===== PRICING CARDS ANIMATION (simplified on mobile) =====
gsap.fromTo('.pricing-card',
  { opacity: 0, y: isMobile ? 30 : 100, rotationX: isMobile ? 0 : 15 },
  {
    scrollTrigger: {
      trigger: '.pricing-grid',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    opacity: 1,
    y: 0,
    rotationX: 0,
    duration: isMobile ? 0.3 : 0.5,
    stagger: isMobile ? 0.06 : 0.1,
    ease: 'power2.out'
  }
);

// ===== BENEFIT LIST ANIMATION =====
gsap.fromTo('.benefit-list li',
  { opacity: 0, x: -30 },
  {
    scrollTrigger: {
      trigger: '.benefit-list',
      start: 'top 85%'
    },
    opacity: 1,
    x: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out'
  }
);

// ===== TRUST BADGES ANIMATION =====
gsap.fromTo('.trust-badge',
  { opacity: 0, y: 30, scale: 0.9 },
  {
    scrollTrigger: {
      trigger: '.trust-badges',
      start: 'top 85%'
    },
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    stagger: 0.15,
    ease: 'back.out(1.5)'
  }
);

// ===== HERO CTA GROUP ANIMATION =====
gsap.fromTo('.hero-cta-group',
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.2,
    ease: 'power3.out'
  }
);

gsap.fromTo('.hero-trust-text',
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 1.5,
    ease: 'power2.out'
  }
);

// ===== LOCATION ITEMS ANIMATION =====
gsap.fromTo('.location-item',
  { opacity: 0, x: -40 },
  {
    scrollTrigger: {
      trigger: '.location-details',
      start: 'top 80%'
    },
    opacity: 1,
    x: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out'
  }
);
