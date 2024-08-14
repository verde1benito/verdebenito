<?php
// Obtener los datos del formulario de registro
$usuario = $_POST['username'];
$contrasena = $_POST['password'];

// Establecer la conexión con la base de datos
$servername = "localhost";
$username = "root"; // Nombre de usuario predeterminado en XAMPP
$password = ""; // Contraseña predeterminada en XAMPP
$dbname = "myr"; // Nombre de la base de datos

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error al conectar con la base de datos: " . $conn->connect_error);
}

// Preparar la consulta SQL para insertar los datos en la tabla "usuarios"
$sql = "INSERT INTO usuarios (nombre, matricula) VALUES ('$usuario', '$contrasena')";

if ($conn->query($sql) === TRUE) {
    // Registro exitoso
    echo "<script>alert('Usuario registrado'); window.location.href = 'login_marbella.php';</script>";
} else {
    // Error al registrar el usuario
    echo "<script>alert('Error al registrar el usuario: " . $conn->error . "');</script>";
}

// Cerrar la conexión con la base de datos
$conn->close();
?>
