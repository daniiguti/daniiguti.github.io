function main() {
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const header = document.getElementById("header");
    const contactoSection = document.getElementById("contacto");

    if (!header || !contactoSection) return;

    const contactoTop = contactoSection.offsetTop;
    const contactoHeight = contactoSection.offsetHeight;

    const isInOrAboveDaniSection = currentScroll <= contactoTop + contactoHeight;

    if (isInOrAboveDaniSection) {
      header.style.top = "-100px";
      header.classList.remove("with-transition"); // sin transición
    } else {
      header.classList.add("with-transition"); // solo ahora activamos transición
      if (currentScroll > lastScrollTop) {
        header.style.top = "-100px";
      } else {
        header.style.top = "0";
      }
    }

    // 🔽 Cierra el menú si está abierto
    const navList = document.querySelector(".nav-list");
    const menuToggle = document.querySelector(".menu-toggle");

    if (navList && navList.classList.contains("show")) {
      navList.classList.remove("show");
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