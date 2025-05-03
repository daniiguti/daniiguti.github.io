function main() {
  document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list a');

  menuToggle.addEventListener('click', function () {
    navList.classList.toggle('show');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('show');
    });
  });

  const secciones = document.querySelectorAll('.seccion');

  function mostrarSecciones() {
    secciones.forEach(seccion => {
      const seccionTop = seccion.getBoundingClientRect().top;
      const ventanaAltura = window.innerHeight;

      if (seccionTop < ventanaAltura - 100) {
        seccion.classList.add('aparecer');
      }
    });
  }

  window.addEventListener('scroll', mostrarSecciones);
}
  
document.addEventListener("DOMContentLoaded", main);
