<?php  
session_start(); //abrir una sesion  
?> 
 
<?php  
$db="bd_juego"; 
$user = "root"; 
$pass=""; 
$host = "localhost"; 
 
$conexion = new mysqli($host, $user, $pass, $db); 
//require_once('conexion.php'); 
$nickname =$_POST['nickname']; 
$password=$_POST['password']; 
 
//$con = new Conexion(); 
//$colombia =$con->Conectar(); 
 
$sql = "SELECT * FROM usuario WHERE nickname = '$nickname'"; 
 
$resultado = $conexion->query($sql); 
//$stmt = $colombia->prepare($sql); 
//$stmt->execute(); if($resultado->num_rows > 0){ 
} 
 
 
  $row = $resultado->fetch_array(); 
 
  if($password==$row['password']){ 
 
    $_SESSION['ingreso'] = true; 
    $_SESSION['nickname'] = $nickname; 
   
    echo " 
  <link rel='stylesheet' type='text/css' href='css/estilos.css'> 
  <link rel='stylesheet' type='text/css' href='estilos.css'> 
  <link rel='stylesheet' type='text/css' href='cabeza.css'>Bienvenido !!!!  " .$nickname; 
    echo "<br> <a href= game.php?id=".$nickname.">puede ingresar al juego</a>"; 
 
  }else{ 
    echo "credenciales incorrectas"; 
    echo "<br> <a href= login.html>volver a ingresar</a>"; 
  } 
  ?>