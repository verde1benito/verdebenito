<?php
// Datos de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = ""; // Sin contraseña en tu caso
$dbname = "PagosTarjeta";

// Crear una conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}

// Obtener los datos del formulario
$nombreCompleto = $_POST['nombreCompleto'];
$email = $_POST['email'];
$direccion = $_POST['direccion'];
$ciudad = $_POST['ciudad'];
$estado = $_POST['estado'];
$codigoPostal = $_POST['codigoPostal'];
$nombreTarjeta = $_POST['nombreTarjeta'];
$creditoTarjeta = $_POST['creditoTarjeta'];
$mesVencimiento = $_POST['mesVencimiento'];
$anoVencimiento = $_POST['anoVencimiento'];
$cvv = $_POST['cvv'];

// Insertar los datos en la tabla
$sql = "INSERT INTO InformacionPago (nombreCompleto, email, direccion, ciudad, estado, codigoPostal, nombreTarjeta, creditoTarjeta, mesVencimiento, anoVencimiento, cvv) 
        VALUES ('$nombreCompleto', '$email', '$direccion', '$ciudad', '$estado', '$codigoPostal', '$nombreTarjeta', '$creditoTarjeta', '$mesVencimiento', '$anoVencimiento', '$cvv')";

if ($conn->query($sql) === TRUE) {
    echo "Datos guardados correctamente";
} else {
    echo "Error al guardar los datos: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
