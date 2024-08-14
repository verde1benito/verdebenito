<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
  <link rel="stylesheet" type="text/css" href="estilo_loginsutibu.css">
    <meta charset="UTF-8">
</head>
<body>
  <div class="container">
    <form id="loginForm" action="login.php" method="post">
      <h2>Iniciar sesión</h2>
      <label for="username">Usuario:</label>
      <input type="text" id="username" name="username" placeholder="Ingrese su usuario">

      <label for="password">Contraseña:</label>
      <input type="password" id="password" name="password" placeholder="Ingrese su contraseña">

      <input type="submit" value="Iniciar sesión">

      <p>Si no tienes cuenta, <a href="registro_usuarios.php">regístrate dando clic aquí</a>.</p>
    </form>
  </div>
</body>
</html>
