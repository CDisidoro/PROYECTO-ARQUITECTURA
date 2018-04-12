<?php  
session_start(); //abrir una sesion 
if(isset($_SESSION['ingreso']) && $_SESSION['ingreso'] ==true){ 
 
} 
 
else{ 
  echo "<!DOCTYPE html> 
<html lang='en'> 
  <head> 
  <meta charset='UTF-8'> 
  <link rel='stylesheet' type='text/css' href='css/estilos.css'> 
  <link rel='stylesheet' type='text/css' href='estilos.css'> 
  <link rel='stylesheet' type='text/css' href='cabeza.css'>
  <link rel='icon' type='image/png' href='src/login.png'>
  <title>ACCESO ILEGAL</title>
</head> 
<body>  
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <center><h1 style='font-size: 60px;'>ACCESO ILEGAL AL JUEGO</h1>
  <center><h1 style='font-size: 60px;'>POR FAVOR, INICIE SESIÓN DE FORMA ADECUADA</h1>
  <a href='index.html' style='font-size: 60px; color:black;font-size: 40px;text-decoration: none;font-weight: bold;font-family: Iceland;'>Volver a Inicio</a>
  </center>
 </body> 
</html>"; 
  exit; 
} 
?><!DOCTYPE html> 
<html lang='en'> 
  <head> 
  <meta charset='UTF-8'> 
  <link rel='stylesheet' type='text/css' href='css/estilos.css'> 
  <link rel='stylesheet' type='text/css' href='estilos.css'> 
  <link rel='stylesheet' type='text/css' href='cabeza.css'>
  <link rel='icon' type='image/png' href='src/login.png'>
  <title>Operations DC</title>
</head> 
<body>  
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  </center>
 </body> 
</html>
<?php
$nick = $_GET['id']; 
echo "<center><h1 style='font-size: 60px; color:black;font-size: 40px;text-decoration: none;font-weight: bold;font-family: Iceland;'>USUARIO: ".strtoupper($nick)."</h1></center>"; 
$x = $_GET['avatar']; 
echo "<img src='".$x."'>";
//avatar 
//puntaje 
?> 
 
 
<br> 
  <center><a href='cerrar_sesion.php' style='font-size: 60px; color:black;font-size: 40px;text-decoration: none;font-weight: bold;font-family: Iceland;'>Cerrar Sesión</a></center>
 
</body> 
</html> 