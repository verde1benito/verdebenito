<?php


echo "Número de Tarjeta: " . $numero_tarjeta;

// Verificar si se han recibido datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conectar a la base de datos (modifica los valores según tu configuración)
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "nombre_de_tu_base_de_datos";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    // Obtener los datos del formulario
    $numero_tarjeta = $_POST['cardNumber'];
    echo "Número de Tarjeta: " . $numero_tarjeta;
    $fecha_vencimiento = $_POST['cardExpiry'];
    echo "Fecha de vencimiento: " . $fecha_vencimiento;
    $cvc = $_POST['cardCVC'];
    echo "CVC: " . $cvc;

    // Insertar la compra en la base de datos
    $sql = "INSERT INTO compras (numero_tarjeta, fecha_vencimiento, cvc) VALUES ('$numero_tarjeta', '$fecha_vencimiento', '$cvc')";

    if ($conn->query($sql) === TRUE) {
        echo "¡Compra guardada correctamente!";
    } else {
        echo "Error al guardar la compra: " . $conn->error;
    }

    // Cerrar la conexión
    $conn->close();
} else {
    echo "Acceso denegado.";
}
?>
