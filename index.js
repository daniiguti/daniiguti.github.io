function main() {
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
