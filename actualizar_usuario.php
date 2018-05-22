<?php  
//llamar a conexion 
require_once('conexion.php'); 
//traer variables del formulario 

//insertar datos del formulario a la BD 

$con = new Conexion(); 
$colombia =$con->Conectar(); 
 
$nickname =$_POST['nickname']; 
$correo =$_POST['correo']; 
$password=$_POST['password']; 
$passwordC=$_POST['passwordC']; 
$fecha=$_POST['fecha']; 
$imagen =$_FILES['imagen']['name'];

if($password == $passwordC){
  //generar num aleatorios entre 500 -10000 
  $numero = rand(500,10000); 
  $dia = date('Y-m-d'); 
  $ruta= "fotosavatar/".$dia.$numero.$imagen; 
  $carga = @move_uploaded_file($_FILES['imagen']['tmp_name'], $ruta);
   
  //Inserta usuario
  $sql = "UPDATE usuario SET nickname = '$nickname', correo = '$correo', password = '$password', fecha = '$fecha', avatar = '$ruta', Obtener_Fecha_Score = '$dia' WHERE nickname = '$nickname'"; 
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
    <title>Actualizar Usuario</title>
  </head> 
  <body>
  <section>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <article>
    <h1 class='exitoReg'>ACTUALIZACIÓN EXITOSA</h1>
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
    <title>Error de Registro</title>
  </head> 
  <body> 
    <br><br><br><br><br><br>
    <h1 class='textoReg'>ERROR AL ACTUALIZAR</h1>
    <a href='index.html' class='textoJuego'>Volver a Inicio</a>
    <br><br><br><br><br><br>
   </body> 
  </html>"; 
  } 
}else{
  echo"<!DOCTYPE html> 
      <html lang='en'> 
  <head> 
  <meta charset='UTF-8'> 
  <link rel='stylesheet' type='text/css' href='css/estilos.css'> 
  <link rel='stylesheet' type='text/css' href='estilos.css'> 
  <link rel='stylesheet' type='text/css' href='cabeza.css'>
  <link rel='icon' type='image/png' href='src/login.png'>
  <title>Error de Actualización</title>
</head> 
<body> 
  <br><br><br><br><br><br>
    <h1 class='exitoReg'>ERROR AL ACTUALIZAR</h1>
    <a href='index.html' class='textoJuego'>Volver a Inicio</a>
  <br><br><br><br><br><br>
 </body> 
</html>"; 
}
?>