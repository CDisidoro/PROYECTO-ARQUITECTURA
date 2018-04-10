<?php  
session_start(); //abrir una sesion  
echo " 
  <link rel='stylesheet' type='text/css' href='css/estilos.css'> 
    <link rel='stylesheet' type='text/css' href='estilos.css'> 
    <link rel='stylesheet' type='text/css' href='cabeza.css'>"; 
if(isset($_SESSION['ingreso']) && $_SESSION['ingreso'] ==true){ 
 
} 
 
else{ 
  echo "esta pagina es solo para usuarios registrados"; 
  echo "<br> <a href= login.html>volver a ingresar</a>"; 
  exit; 
} 
 
?> 
<!DOCTYPE html> 
<html> 
<head> 
  <title></title> 
</head> 
<body> 
<h1>este es el juego</h1> 
<section>aca va el juego</section> 
 
<?php  
$x = $_GET['id']; 
echo $x; 
//avatar 
//puntaje 
?> 
 
 
<br> 
<a href="cerrar_sesion.php"> cerrar sesion </a> 
 
</body> 
</html> 