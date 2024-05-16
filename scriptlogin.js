const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.querySelector('#registerForm input[placeholder="Nombre"]').value;
    const email = document.querySelector('#registerForm input[placeholder="Email"]').value;
    const contraseña = document.querySelector('#registerForm input[placeholder="Contraseña"]').value;
    
    // Validar que se haya ingresado un correo electrónico y que todos los campos estén completos
    if (email.trim() === '' || nombre.trim() === '' || contraseña.trim() === '') {
        alert('Por favor, completa todos los campos, incluyendo un correo electrónico válido.');
        return;
    }

    const newUser = {
        username: nombre,
        email: email,
        password: contraseña
    };
    
    fetch('https://hushed-longhaired-currant.glitch.me/articles')
    .then(response => response.json())
    .then(data => {
        const existingUser = data.find(user => user.email === email);
        if(existingUser) {
            alert('El correo electrónico ya está registrado. Por favor, utiliza otro correo.');
        } else {
            fetch('https://hushed-longhaired-currant.glitch.me/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(response => response.json())
            .then(data => {
                alert('Usuario registrado exitosamente');
                console.log('Usuario registrado exitosamente:', data);
                // Limpiar los campos del formulario después del registro
                document.getElementById('registerForm').reset();
                // Aquí puedes agregar cualquier lógica adicional, como redireccionar a una página de inicio de sesión
            })
            .catch(error => console.error('Error al registrar usuario:', error));
        }
    })
    .catch(error => console.error('Error al verificar usuario existente:', error));
});





document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.querySelector('#loginForm input[placeholder="Email"]').value;
    const contraseña = document.querySelector('#loginForm input[placeholder="Contraseña"]').value;
    
    fetch('https://hushed-longhaired-currant.glitch.me/articles')
    .then(response => response.json())
    .then(data => {
        const user = data.find(user => user.email === email && user.password === contraseña);
        if(user) {
            console.log('Inicio de sesión exitoso. Bienvenido, ' + user.username + '!');
            alert('Inicio de sesión exitoso. Bienvenido, ' + user.username + '!');
            // Guardar el estado de la sesión en el localStorage
            localStorage.setItem('userName', user.username);
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'gestioninicial.html'; // Redireccionar al usuario a gestioninicial.html
            
        } else {
            console.error('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    })
    .catch(error => console.error('Error al iniciar sesión:', error));
});










