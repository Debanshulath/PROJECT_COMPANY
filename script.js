// script.js – Scroll reveal animations using Intersection Observer

document.addEventListener('DOMContentLoaded', () => {
  // Select all elements we want to animate when they enter viewport
  const elements = document.querySelectorAll('.card, .animate-fade-in');

  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing once shown (better performance)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,          // Trigger when 15% of element is visible
    rootMargin: '0px 0px -50px 0px' // Slight offset so it feels natural
  });

  // Start observing each element
  elements.forEach(el => observer.observe(el));
});
