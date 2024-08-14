<?php
// Crear la conexión
$mysqli = new mysqli_conection('localhost','root', '', 'myr',3306);

// Verificar la conexión
if ($mysqli->connect_error) {
    die('error en la conexion' . $mysqli->connect_error);
}
?>