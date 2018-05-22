<?php 
session_start(); //abrir una sesion 
require_once('conexion.php');
?>
<!DOCTYPE html> 
<html lang="en"> 
	<head> 
	<meta charset="UTF-8"> 
	<link rel="stylesheet" type="text/css" href="css/estilos.css"> 
	<link rel="stylesheet" type="text/css" href="estilos.css"> 
	<link rel="stylesheet" type="text/css" href="cabeza.css">
	<link rel="icon" type="image/png" href="src/login.png">
  <title>Modificar Cuenta</title>
</head> 
<body>
	<?php 
	$nick = $_SESSION['nickname'];
	$con = new Conexion(); 
	$colombia =$con->Conectar(); 
	$sql = "SELECT * FROM usuario WHERE nickname = '$nick'"; 
	$stmt = $colombia->prepare($sql); 
	$stmt->execute();
	$datos = $stmt->fetch();
	 ?>
  <br><br><br><br><br>
    <h1 class="textoJuego">Actualización de Usuarios</h1> 
    <form action ="actualizar_usuario.php" method = "post" enctype="multipart/form-data" class="formulario" name="formu"> 
      <label class="textoReg" for="nickname">Nickname: </label>

      <input type="text" placeholder="ingrese nickname" class="campoReg" name="nickname" id="nickname" value=<?php echo $nick;?> required><br> 

      <label class="textoReg">Correo: </label>

      <input type="email" placeholder="ingrese correo" name="correo" id="correo" class="campoReg" value= <?php echo $datos['correo']; ?> required><br>

      <label class="textoReg">Contraseña: </label>

      <input type="password" placeholder ="ingrese password" name="password" id="password" class="campoReg" required value= <?php echo $datos['password']; ?> ><br> 

      <label class="textoReg">Confirmar contraseña: </label>

      <input type="password" placeholder ="confirme password" name="passwordC" id="passwordC" class="campoReg" value= <?php echo $datos['password']; ?>  required><br>

      <label class="textoReg">Fecha de Nacimiento: </label>

      <input type="date" name="fecha" id="fecha" class="campoReg" value= <?php echo $datos['fecha']; ?>  required><br> 

      <label class="textoReg">Avatar: (Por motivos de seguridad tendrá que cambiar su avatar)</label>

      <input type="file" name="imagen" id="imagen"  class="avatarReg" value= <?php echo $datos['avatar']; ?>  required><br><br>

      <input type="submit" value="Actualizar" class="botonReg"> 
    </form>
 </body> 
</html>