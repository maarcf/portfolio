const menuCelular = document.querySelector('.contenedor-menu-celular');
const linksMenuCelular = document.querySelector('.menu-celular');
const icono = document.getElementById('icono-desplegable');

menuCelular.onclick = () => {
  icono.classList.toggle('fa-bars');
  icono.classList.toggle('fa-times');
  linksMenuCelular.classList.toggle('aparecer');
}