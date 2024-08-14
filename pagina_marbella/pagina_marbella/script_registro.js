document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("registrationForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores ingresados en el formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Realizar el registro del usuario (aquí puedes agregar tu lógica de registro)

    // Mostrar la alerta de usuario registrado
    alert("Usuario registrado");

    // Redirigir a la página de inicio de sesión (login.php)
    window.location.href = "login_sutibu.php";
  });
});
