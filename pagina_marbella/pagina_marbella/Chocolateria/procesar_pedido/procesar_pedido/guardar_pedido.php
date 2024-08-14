<?php
// Conectar a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "verduleria";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$direccion = $_POST['direccion'];
$productos = $_POST['productos'];
$cantidad = $_POST['cantidad'];
$fecha = $_POST['fecha'];

// Insertar datos en la base de datos
$sql = "INSERT INTO pedidos (nombre, telefono, direccion, productos, cantidad, fecha)
        VALUES ('$nombre', '$telefono', '$direccion', '$productos', '$cantidad', '$fecha')";

if ($conn->query($sql) === TRUE) {
    echo "Pedido registrado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
