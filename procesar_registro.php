<?php
// Start session to store messages
session_start();

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $nombre = trim($_POST['nombre']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Validate input
    if (empty($nombre) || empty($email) || empty($password) || empty($confirm_password)) {
        $_SESSION['error'] = 'Todos los campos son obligatorios.';
        header('Location: index.html');
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $_SESSION['error'] = 'El correo electrónico no es válido.';
        header('Location: index.html');
        exit;
    }

    if ($password !== $confirm_password) {
        $_SESSION['error'] = 'Las contraseñas no coinciden.';
        header('Location: index.html');
        exit;
    }

    // Simulate user registration (e.g., save to database)
    $_SESSION['success'] = 'Registro exitoso. ¡Bienvenido, ' . htmlspecialchars($nombre) . '!';
    header('Location: https://danelxg.github.io/index.html'); // Redirect to the specified URL
    exit;
} else {
    // Redirect to the form if accessed directly
    header('Location: index.html');
    exit;
}
?>
