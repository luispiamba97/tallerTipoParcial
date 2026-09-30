document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name && email && message) {
        alert(`¡Gracias por contactarnos, ${name}! Hemos recibido tu mensaje.`);
        contactForm.reset();
      } else {
        alert('Por favor, completa todos los campos requeridos.');
      }
    });
  }
});