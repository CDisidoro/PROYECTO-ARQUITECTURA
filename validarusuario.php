<?php  
session_start(); //abrir una sesion  
?> 
<?php
require_once('conexion.php'); 
$nickname =$_POST['nickname']; 
$password=$_POST['password']; 
$con = new Conexion(); 
$colombia =$con->Conectar(); 
$sql = "SELECT * FROM usuario WHERE nickname = '$nickname'"; 
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
	  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
	  <h1 class='textoJuego'>BIENVENIDO :".strtoupper($nickname)."</h1>
	  <a href='game.php?id=".$nickname."' class='link'>Ingresar al Juego</a>
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
	  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
	  <h1 class='textoJuego'>CONTRASEÑA INCORRECTA</h1>
	  <a href='index.html' class='link'>Volver a Inicio</a>
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
	  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
	  <h1 class='textoJuego'>USUARIO NO ENCONTRADO</h1>
	  <a href='index.html' class='link'>Volver a Inicio</a>
	 </body> 
	</html>"; 
  } 
  ?>