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
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('userName').value;
  const age = document.getElementById('userAge').value;
  const enquiryFor = document.getElementById('enquiryFor').value;
  const goal = document.getElementById('userGoal').value;

  const message = `Hello! I'm ${name}, ${age} years old. I'm enquiring for ${enquiryFor} regarding ${goal}. I'd like to know more about joining IronForge Gym.`;
  const whatsappURL = `https://wa.me/919278378772?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');
});

// ===== GSAP ANIMATIONS =====
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero parallax effect
gsap.to('.hero-bg', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  },
  y: 300,
  scale: 1.2
});

// Hero content fade in
gsap.from('.hero-content', {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.3,
  ease: 'power3.out'
});

// Hero title stagger animation
gsap.from('.hero-line', {
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: 0.2,
  delay: 0.5,
  ease: 'power4.out'
});

// Scroll indicator animation
gsap.to('.scroll-indicator', {
  y: 10,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut'
});

// Section animations on scroll
const sections = gsap.utils.toArray('section');
sections.forEach((section, index) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  });
});

// About images animation
gsap.from('.img-box', {
  scrollTrigger: {
    trigger: '.about-visuals',
    start: 'top 80%'
  },
  opacity: 0,
  scale: 0.8,
  duration: 1,
  stagger: 0.2,
  ease: 'back.out(1.7)'
});

// Program cards stagger
gsap.from('.program-card', {
  scrollTrigger: {
    trigger: '.programs-grid',
    start: 'top 80%'
  },
  opacity: 0,
  y: 100,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out'
});

// Trainer cards animation
gsap.from('.trainer-card', {
  scrollTrigger: {
    trigger: '.trainers-grid',
    start: 'top 80%'
  },
  opacity: 0,
  scale: 0.9,
  duration: 0.8,
  stagger: 0.15,
  ease: 'power2.out'
});

// Banner text animation
gsap.from('.banner-content h2', {
  scrollTrigger: {
    trigger: '.banner-section',
    start: 'top 70%'
  },
  opacity: 0,
  scale: 0.8,
  duration: 1,
  ease: 'elastic.out(1, 0.5)'
});

// Contact section split animation
gsap.from('.contact-info', {
  scrollTrigger: {
    trigger: '.contact-section',
    start: 'top 70%'
  },
  opacity: 0,
  x: -50,
  duration: 1,
  ease: 'power3.out'
});

gsap.from('.contact-form-wrapper', {
  scrollTrigger: {
    trigger: '.contact-section',
    start: 'top 70%'
  },
  opacity: 0,
  x: 50,
  duration: 1,
  ease: 'power3.out'
});

// Section titles animation
gsap.utils.toArray('.section-title').forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: 'top 85%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
  });
});
