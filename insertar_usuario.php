<?php  
//llamar a conexion 
require_once('conexion.php'); 
//traer variables del formulario 
 
$nickname =$_POST['nickname']; 
$correo =$_POST['correo']; 
$password=$_POST['password']; 
$fecha=$_POST['fecha']; 
$imagen =$_FILES['imagen']['name']; 
 
//echo $nickname; 
 
//generar num aleatorios entre 500 -10000 
$numero = rand(500,10000); 
$dia = date('z'); 
$ruta= "fotosavatar/".$dia.$numero.$imagen; 
$carga = @move_uploaded_file($_FILES['imagen']['tmp_name'], $ruta); 
 
 
//insertar datos del formulario a la BD 
 
$con = new Conexion(); 
$colombia =$con->Conectar(); 

$sql = "INSERT INTO usuario VALUES ('$nickname', '$correo', '$password', '$fecha', '$ruta')"; 
$stmt = $colombia->prepare($sql); 
$stmt->execute(); 
if($stmt){ 
  echo "<!DOCTYPE html> 
<html lang='en'> 
	<head> 
	<meta charset='UTF-8'> 
	<link rel='stylesheet' type='text/css' href='css/estilos.css'> 
	<link rel='stylesheet' type='text/css' href='estilos.css'> 
	<link rel='stylesheet' type='text/css' href='cabeza.css'>
	<link rel='icon' type='image/png' href='src/login.png'>
  <title>Ingresar Usuario</title>
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
  <center><h1 style='font-size: 60px;'>REGISTRO EXITOSO</h1>
  <a href='index.html' style='font-size: 60px; color:black;font-size: 40px;text-decoration: none;font-weight: bold;font-family: Iceland;'>Volver a Inicio</a>
  </center>
 </body> 
</html>"; 
} 
else{ 
  echo"<!DOCTYPE html> 
<html lang='en'> 
	<head> 
	<meta charset='UTF-8'> 
	<link rel='stylesheet' type='text/css' href='css/estilos.css'> 
	<link rel='stylesheet' type='text/css' href='estilos.css'> 
	<link rel='stylesheet' type='text/css' href='cabeza.css'>
	<link rel='icon' type='image/png' href='src/login.png'>
  <title>Ingresar Sesión</title>
</head> 
<body> 
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <h1>ERROR AL REGISTRAR</h1>
  <a href='index.html' style='font-size: 60px; color:black;font-size: 40px;text-decoration: none;font-weight: bold;font-family: Iceland;'>Volver a Inicio</a>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
 </body> 
</html>"; 
} 
?>