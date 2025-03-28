document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Validate input
    if (!email || !password) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('El correo electrónico no es válido.');
        return;
    }

    // Simulate login (replace this with actual authentication logic if needed)
    if (email === "test@example.com" && password === "123456") {
        alert('Inicio de sesión exitoso. ¡Bienvenido!');
        window.location.href = 'https://danelxg.github.io/dashboard.html'; // Redirect to a dashboard or home page
    } else {
        alert('Correo electrónico o contraseña incorrectos.');
    }
});
