<!DOCTYPE html>
<html>
<head>
  <title>Registro de Usuarios</title>
  <link rel="stylesheet" type="text/css" href="estilo_registro.css">
 <meta charset="UTF-8">
</head>
<body>
  <div class="container">
    <form id="registrationForm" action="guardar_registro.php"  method="post">
      <h2>Registro de Usuarios</h2>
      <label for="username">Usuario:</label>
      <input type="text" id="username" name="username" placeholder="Ingrese su usuario">

      <label for="password">Contraseña:</label>
      <input type="password" id="password" name="password" placeholder="Ingrese su contraseña">

      <input type="submit" value="Registrar">
    </form>
      <p>Si YA tienes cuenta, <a href="login_marbella.html">INICIA SECION aqui</a>.</p>
  </div>
</body>
</html>
