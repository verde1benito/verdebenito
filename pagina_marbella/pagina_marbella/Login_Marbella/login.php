<?php
session_start(); // Iniciar sesión

// Obtener los datos del formulario de inicio de sesión
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

// Preparar la consulta SQL para verificar el usuario y contraseña
$sql = "SELECT * FROM usuarios WHERE nombre = '$usuario' AND matricula = '$contrasena'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    // Usuario y contraseña correctos
    // Redirigir al usuario a la página index.html 
    header("Location: ../chocolateria/index.html");
} else {
    // Usuario o contraseña incorrectos
   echo "<script>alert('Usuario y contraseña incorrectos, por favor revisa bien tus datos'); window.location.href = 'login_marbella.php';</script>";
    unset($_SESSION['username']); // Limpiar el valor del campo de usuario almacenado en la sesión
    unset($_SESSION['password']); // Limpiar el valor del campo de contraseña almacenado en la sesión
}

// Cerrar la conexión con la base de datos
$conn->close();
?>
