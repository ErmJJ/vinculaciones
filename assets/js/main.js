document.addEventListener('DOMContentLoaded', function() {
  // Botón flotante
  const floatingBtn = document.querySelector('.floating-btn');
  
  // Función para desplazarse al inicio
  floatingBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Animación para los elementos al hacer scroll
  const animatedElements = document.querySelectorAll('.logo-container, .qr-container, .embed-container');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // Efecto hover para QR
  const qrImg = document.querySelector('.qr-img');
  qrImg.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.boxShadow = '0 0 20px rgba(33, 150, 243, 0.6)';
  });
  
  qrImg.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  });
  
  // Efecto hover para el logo
  const logoImg = document.querySelector('.logo-img');
  logoImg.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.08)';
  });
  
  logoImg.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});