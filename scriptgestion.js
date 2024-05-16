function logout() {
    // Borrar el estado de la sesión del localStorage
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userName');

    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = 'login.html';
}

// Verificar si el usuario ha iniciado sesión
const loggedIn = localStorage.getItem('loggedIn');
if (!loggedIn) {
    window.location.href = 'login.html'; // Redireccionar al usuario a la página de inicio de sesión
}

// Obtener el nombre del usuario del localStorage
const userName = localStorage.getItem('userName');

// Actualizar el nombre del cliente en la página
document.querySelector('.name-client').textContent = userName;
document.querySelector('.name-client2').textContent = userName;