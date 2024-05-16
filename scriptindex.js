// Obtener el elemento de navegación
const nav = document.getElementById('nav');

// Función para manejar el evento de scroll
window.addEventListener('scroll', function() {
// Obtener la posición actual del scroll
const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

// Si el scroll está por debajo de 100 píxeles, mostrar el menú de navegación
if (scrollPos > 100) {
	nav.classList.add('hidden');
} else {
	nav.classList.remove('hidden');
}
});

// Script para activar/desactivar el menú al hacer clic en el botón de hamburguesa
$(document).ready(function() {
	$('#menu-toggle').click(function() {
		$(this).toggleClass('active'); // Añadir o quitar la clase 'active' al botón de hamburguesa
	});
});

// Selecciona el elemento del menú toggle
const menuToggle = document.getElementById('menu-toggle');

// Selecciona el elemento del menú
const nav2 = document.querySelector('nav');

// Agrega un evento de scroll al documento
document.addEventListener('scroll', () => {
// Verifica si el usuario no está en la parte superior de la página
if (window.scrollY > 0) {
	// Oculta el menú y el trigger
	nav2.classList.add('hidden');
	menuToggle.classList.remove('active');
	menuToggle.classList.add('hidden');
} else {
	// Muestra el menú y el trigger
	nav2.classList.remove('hidden');
	menuToggle.classList.remove('hidden');
}
});