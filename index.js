function main() {
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const header = document.getElementById("header");
    const contactoSection = document.getElementById("contacto");

    if (!header || !contactoSection) return; 

    const contactoTop = contactoSection.offsetTop;
    const contactoHeight = contactoSection.offsetHeight;
    const isInDaniSection = currentScroll >= contactoTop && currentScroll <= contactoTop + contactoHeight;

    if (isInDaniSection) {
        header.style.top = "-100px"; // Mantener el header oculto en la sección .dani
    } else {
        if (currentScroll > lastScrollTop) {
            header.style.top = "-100px"; // Ocultar el header cuando se hace scroll hacia abajo
        } else {
            header.style.top = "0"; // Mostrar el header cuando se hace scroll hacia arriba
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
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
