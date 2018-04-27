<?php  
session_start(); //abrir una sesion  
?> 
 
<?php  
/* SQLI
$db="bd_juego"; 
$user = "root"; 
$pass=""; 
$host = "localhost"; 
 
$conexion = new mysqli($host, $user, $pass, $db); */
require_once('conexion.php'); 
$nickname =$_POST['nickname']; 
$password=$_POST['password']; 
 
$con = new Conexion(); 
$colombia =$con->Conectar(); 
 
$sql = "SELECT * FROM usuario WHERE nickname = '$nickname'"; 
 
//$resultado = $conexion->query($sql); 
$stmt = $colombia->prepare($sql); 
$stmt->execute();
 if($stmt->rowCount() > 0){  
$row = $stmt->fetch(); 
 
  if($password==$row['password']){ 
 
    $_SESSION['ingreso'] = true; 
    $_SESSION['nickname'] = $nickname; 
   
echo "<!DOCTYPE html> 
<html lang='en'> 
  <head> 
  <meta charset='UTF-8'> 
  <link rel='stylesheet' type='text/css' href='css/estilos.css'> 
  <link rel='stylesheet' type='text/css' href='estilos.css'> 
  <link rel='stylesheet' type='text/css' href='cabeza.css'>
  <link rel='icon' type='image/png' href='src/login.png'>
  <title>Iniciar Sesión</title>
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
  <center><h1 style='font-size: 60px; font-family: Iceland;'>BIENVENIDO :".strtoupper($nickname)."</h1>
  <a href='game.php?id=".$nickname."' style='font-size: 60px; color:black;font-size: 40px;text-decoration: none;font-weight: bold;font-family: Iceland;'>Ingresar al Juego</a>
  </center>
 </body> 
</html>"; 
}else{ 
    echo "<!DOCTYPE html> 
<html lang='en'> 
  <head> 
  <meta charset='UTF-8'> 
  <link rel='stylesheet' type='text/css' href='css/estilos.css'> 
  <link rel='stylesheet' type='text/css' href='estilos.css'> 
  <link rel='stylesheet' type='text/css' href='cabeza.css'>
  <link rel='icon' type='image/png' href='src/login.png'>
  <title>Iniciar Sesión</title>
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
  <center><h1 style='font-size: 60px; font-family: Iceland;'>CONTRASEÑA INCORRECTA</h1>
  <a href='index.html' style='font-size: 60px; color:black;font-size: 40px;text-decoration: none;font-weight: bold;font-family: Iceland;'>Volver a Inicio</a>
  </center>
 </body> 
</html>"; 
  } 
}else{ 
    echo "<!DOCTYPE html> 
<html lang='en'> 
  <head> 
  <meta charset='UTF-8'> 
  <link rel='stylesheet' type='text/css' href='css/estilos.css'> 
  <link rel='stylesheet' type='text/css' href='estilos.css'> 
  <link rel='stylesheet' type='text/css' href='cabeza.css'>
  <link rel='icon' type='image/png' href='src/login.png'>
  <title>Iniciar Sesión</title>
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
  <center><h1 style='font-size: 60px; font-family: Iceland;'>USUARIO NO ENCONTRADO</h1>
  <a href='index.html' style='font-size: 60px; color:black;font-size: 40px;text-decoration: none;font-weight: bold;font-family: Iceland;'>Volver a Inicio</a>
  </center>
 </body> 
</html>"; 
  } 
  ?>