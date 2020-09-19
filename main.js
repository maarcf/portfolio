// Menu Responsive
const menuCelular = document.querySelector('.contenedor-menu-celular');
const linksMenuCelular = document.querySelector('.menu-celular');
const icono = document.getElementById('icono-desplegable');

menuCelular.onclick = () => {
  icono.classList.toggle('fa-bars');
  icono.classList.toggle('fa-times');
  linksMenuCelular.classList.toggle('mostrar-menu-desplegable');
}

// Filtro botones sección Proyectos
const tarjetas = document.querySelectorAll('.tarjetas-de-proyectos-seccion-proyectos');
const botonesFiltro = document.querySelectorAll('.boton-seccion-proyectos');

for (let boton of botonesFiltro) {
  boton.onclick = () => {
    botonesFiltro[0].classList.remove('web-boton'); // agrego esto porque por como lo armé viene con la clase.

    for (let tarjeta of tarjetas) {
      if ((boton.dataset.tecnologia === tarjeta.dataset.tecnologia) || (boton.dataset.tecnologia === 'todos')) {
        tarjeta.classList.remove('hidden');        
      }
      else {
        tarjeta.classList.add('hidden');
      };
    };
  };
};