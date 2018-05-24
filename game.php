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
<?php
$nick = $_GET['id']; 
$con = new Conexion(); 
$colombia =$con->Conectar(); 
$sql = "SELECT * FROM usuario WHERE nickname = '$nick'"; 
$stmt = $colombia->prepare($sql); 
$stmt->execute();
while($fila=$stmt->fetch()){
?>
<section>
  <article>
    <img src= "<?php echo $fila['avatar']; ?>" class='imagenJuego'>
  </article>
  <article>
    <p class='textoJuego'>USUARIO: <?php echo strtoupper($nick); ?></p>
  </article>
  <article>
    <p class='textoJuego'>Su puntaje es: <?php echo $fila['puntaje']; ?></p>
  </article>
  <article>
    <p class='textoJuego'>Su puntaje fue obtenido el: <?php echo $fila['fechaScore']; ?></p>
  </article>
  <article>
    <a class='textoJuego' href='cerrar_sesion.php'>Cerrar Sesión</a>
  </article><br><br>
<?php
  }
?>
</section>
<section>
  <embed class="ventanaJuego" src="juego construct/index.html"></embed>
</section><br><br><br>
</body> 
</html> 