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
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          <center><h1 class='textoJuego'>ACCESO ILEGAL AL JUEGO</h1>
          <center><h1 class='textoJuego'>POR FAVOR, INICIE SESIÓN DE FORMA ADECUADA</h1>
          <a href='index.html' class='textoJuego'>Volver a Inicio</a>
          </center>
         </body> 
        </html>"; 
  exit; 
} 
?>
<!DOCTYPE html> 
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
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<?php
$nick = $_GET['id']; 
$con = new Conexion(); 
$colombia =$con->Conectar(); 
$sql = "SELECT * FROM usuario WHERE nickname = '$nick'"; 
$stmt = $colombia->prepare($sql); 
$stmt->execute();
while($fila=$stmt->fetch()){
  //OBTIENE EL PUNTAJE DE FORMA ADECUADA - ENTRA A OBTENER COMO PUENTE
  $fechausuario= $fila['Obtener_Fecha_Score'];
  $aobtener = "SELECT * FROM obtener WHERE Fecha_Score = '$fechausuario'";
  $aobtener = $colombia->prepare($aobtener);
  $aobtener->execute();
  $vectorObtener = $aobtener->fetch();
  //OBTIENE EL RANKING QUE LE CORRESPONDE A SU FECHA
  $rankobtener = $vectorObtener['Puntajes_Ranking'];
  $apuntajes = "SELECT * FROM puntajes WHERE Ranking = '$rankobtener'"; 
  $apuntajes = $colombia->prepare($apuntajes);
  $apuntajes->execute();
  //OBTIENE EL PUNTAJE Y DEMAS DATOS
  $filap = $apuntajes->fetch();
?>
<section>
  <article>
    <img src= "<?php echo $fila['avatar']; ?>" class='imagenJuego'>
  </article>
  <article>
    <p class='textoJuego'>USUARIO: <?php echo strtoupper($nick); ?></p>
  </article>
  <article>
    <p class='textoJuego'>Su puntaje es: <?php echo $filap['Puntaje']; ?></p>
  </article>
  <article>
    <p class='textoJuego'>Su puntaje fue obtenido el: <?php echo $fila['Obtener_Fecha_Score']; ?></p>
  </article>
  <article>
    <a class='textoJuego' href='cerrar_sesion.php'>Cerrar Sesión</a>
  </article>
<?php
  }
?>
</section>
</body> 
</html> 