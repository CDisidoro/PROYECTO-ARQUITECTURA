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
$dia = date('Y-m-d'); 
$ruta= "fotosavatar/".$dia.$numero.$imagen; 
$carga = @move_uploaded_file($_FILES['imagen']['tmp_name'], $ruta); 
$dificultad = 1;
 
//insertar datos del formulario a la BD 
 
$con = new Conexion(); 
$colombia =$con->Conectar(); 
//Inserta usuario
$sql = "INSERT INTO usuario VALUES ('$nickname', '$correo', '$password', '$fecha', '$ruta', '$dia', '$dificultad')"; 
$stmt = $colombia->prepare($sql); 
$stmt->execute(); 
//inserta Obtener
$busqueda = "SELECT * FROM obtener";
$busquedaP = $colombia->prepare($busqueda);
$busquedaP->execute();
$rank = $busquedaP->rowCount();
$rank++;
$obt = "INSERT INTO obtener VALUES ('$dia', '$rank')";
$obtp = $colombia->prepare($obt);
$obtp->execute();
//inserta puntajes
$tiempo = 0;
$puntaje = 0;
$scr = "INSERT INTO puntajes VALUES ('$rank','$puntaje','$tiempo')";
$scrp = $colombia->prepare($scr);
$scrp->execute();
if($stmt && $obtp && $scrp){ 
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
<section>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br>
  <article>
  <h1 class='exitoReg'>REGISTRO EXITOSO</h1>
  <a href='index.html' class = 'textoJuego'>Volver a Inicio</a>
  </article>
  </section>
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
  <br><br><br><br><br><br>
  <h1 class='textoReg'>ERROR AL REGISTRAR</h1>
  <a href='index.html' class='textoJuego'>Volver a Inicio</a>
  <br><br><br><br><br><br>
 </body> 
</html>"; 
} 
?>