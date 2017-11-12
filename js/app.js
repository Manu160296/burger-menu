//obteniendo elemento principal para desplegar el menu:
var button = document.getElementById('button');

//creando un funcion para mostrar y ocultar el menu
function showMenu() {

  var menu = document.getElementById('options-menu');

  if (menu.classList.contains('disabled-menu')) {

    menu.classList.remove('disabled-menu');
    menu.classList.add('enabled-menu');

  } else {

    menu.classList.remove('enabled-menu');
    menu.classList.add('disabled-menu');

  }

}
//activando el evento 'click'

button.addEventListener('click', showMenu)
