// Valar Express - All JavaScript Features

document.addEventListener('DOMContentLoaded', () => {

  // 1. Scroll Reveal Animation
  const animateElements = document.querySelectorAll('.card, .animate-fade-in, h2, .hero h1, .hero p');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animateElements.forEach(el => observer.observe(el));

  // 2. Auto-close mobile menu on link click
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (menuToggle && navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.checked = false;
      });
    });
  }

  // 3. Optional: WhatsApp button hover enhancement
  const whatsappBtn = document.querySelector('.whatsapp');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('mouseenter', () => {
      whatsappBtn.style.transform = 'translateY(-6px) scale(1.12)';
      whatsappBtn.style.boxShadow = '0 16px 40px rgba(37,213,102,0.5)';
    });

    whatsappBtn.addEventListener('mouseleave', () => {
      whatsappBtn.style.transform = 'translateY(0) scale(1)';
      whatsappBtn.style.boxShadow = '0 8px 24px rgba(37,213,102,0.35)';
    });
  }
  
});