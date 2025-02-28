// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');

  // Bandera para controlar el estado del menú
  let isMenuOpen = false;

  // Función para abrir/cerrar el menú
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      // Abrir menú
      mobileMenu.classList.remove('-translate-y-full', 'opacity-0', 'invisible');
      mobileMenu.classList.add('translate-y-0', 'opacity-100', 'visible');
      menuButton.innerHTML = '<i class="bx bx-x text-2xl"></i>';
    } else {
      // Cerrar menú
      mobileMenu.classList.remove('translate-y-0', 'opacity-100', 'visible');
      mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'invisible');
      menuButton.innerHTML = '<i class="bx bx-menu text-2xl"></i>';
    }
  }

  // Evento click para el botón del menú
  menuButton.addEventListener('click', toggleMenu);

  // Cerrar el menú cuando se hace clic en un enlace
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) {
        toggleMenu();
      }
    });
  });

  // Cerrar el menú cuando la pantalla se redimensiona a tamaño desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isMenuOpen) {
      toggleMenu();
    }
  });

  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false
  });
});