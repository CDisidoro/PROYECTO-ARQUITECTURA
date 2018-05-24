<?php 
	session_start(); 
	require_once('conexion.php');
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="cabeza.css">
	<link rel="stylesheet" type="text/css" href="puntajes.css">
  <link rel='icon' type='image/png' href='src/trofeo.png'>
	<title>Mejores Jugadores</title>
</head>
<body>
  <h1 class="textoJuego">MEJORES JUGADORES DE OPERATIONS DC</h1><br>
  <img src="src/trofeo2.png" class="imagen">
  <table class="tabla">
  <tr>
  		<th>NICKNAME</th>
  		<th>RANKING</th>
  		<th>PUNTAJE</th>
  		<th>TIEMPO</th>
  </tr>
	<?php
		$conex = new Conexion();
		$establecer = $conex->Conectar();

		$tablaComm = "SELECT * FROM usuario WHERE ranking BETWEEN 1 AND 5 ORDER BY ranking ASC";
		$tablaEjct = $establecer->prepare($tablaComm);
		$tablaEjct->execute();
		$datosP = $tablaEjct->fetchAll(PDO::FETCH_ASSOC);
		foreach ($datosP as $data) {
		?>
			<tr>
				<td><?php echo strtoupper($data['nickname']); ?></td>
				<td><?php echo $data['ranking']; ?></td>
				<td><?php echo $data['puntaje']; ?></td>
				<td><?php echo $data['tiempo']; ?></td>
			</tr>
		<?php
			}
		?>
</table>
<br><a href='javascript:window.close()' class="link">Cerrar Ventana</a>
</body>
</html>