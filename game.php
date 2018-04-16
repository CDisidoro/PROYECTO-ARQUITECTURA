<?php  
session_start(); //abrir una sesion 
require_once('conexion.php'); 
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
  <center><h1 style='font-size: 60px; font-family: Iceland;'>ACCESO ILEGAL AL JUEGO</h1>
  <center><h1 style='font-size: 60px; font-family: Iceland;'>POR FAVOR, INICIE SESIÓN DE FORMA ADECUADA</h1>
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
  </center>
 </body> 
</html>
<?php
$nick = $_GET['id'];
echo "<center></center>"; 
$con = new Conexion(); 
$colombia =$con->Conectar(); 
$sql = "SELECT * FROM usuario WHERE nickname = '$nick'"; 
$sql2 = "SELECT * FROM puntajes WHERE Puntaje"; 
$stmt = $colombia->prepare($sql); 
$stmt->execute();
$stmt2 = $colombia->prepare($sql2);
$stmt2->execute();
while($fila=$stmt->fetch()){
  $fila2 = $stmt2->fetch();
  echo '<center><img src= '.$fila['avatar']." width='8%'><font style='font-size: 60px; color:black;font-size: 40px;text-decoration: none;font-weight: bold;font-family: Iceland;'>USUARIO: ".strtoupper($nick)."<br>Su puntaje es: ".$fila2['Puntaje']."<br>Su puntaje fue obtenido el: ".$fila['Obtener_Fecha_Score']."</font></center>";
}
?> 
 
 
<br> 
  <center><a href='cerrar_sesion.php' style='font-size: 60px; color:black;font-size: 40px;text-decoration: none;font-weight: bold;font-family: Iceland;'>Cerrar Sesión</a></center>
 
</body> 
</html> 