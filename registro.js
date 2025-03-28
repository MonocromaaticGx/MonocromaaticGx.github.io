document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Validate input
    if (!nombre || !email || !password || !confirmPassword) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('El correo electrónico no es válido.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Simulate successful registration
    alert(`Registro exitoso. ¡Bienvenido, ${nombre}!`);
    window.location.href = 'https://danelxg.github.io/index.html'; // Redirect to the specified URL
});
