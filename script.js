// ======================================================
// DANI — PORTFOLIO
// JavaScript base
// ======================================================

// Portfolio intentionally kept static.
// No scroll animations, no IntersectionObserver,
// no marquee effects.

// Año actual
const yearElement = document.querySelector('[data-year]');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ======================================================
// Menú móvil
// ======================================================

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    navigation.classList.toggle('is-open');
    menuButton.classList.toggle('is-open');
  });
}


// Cerrar el menú al hacer clic en un enlace
if (navigation) {
  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');

      if (menuButton) {
        menuButton.classList.remove('is-open');
      }
    });
  });
}


// ======================================================
// Evitar errores si no existen elementos específicos
// ======================================================

document.addEventListener('DOMContentLoaded', () => {
  // Portfolio cargado correctamente.
});
