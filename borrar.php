<?php 
	session_start();
	$usuario = $_SESSION['nickname'];
	require_once('conexion.php'); 
	$con = new Conexion(); 
	$colombia =$con->Conectar();  
	$sql = "SELECT * FROM usuario WHERE nickname = '$usuario'"; 
	$stmt = $colombia->prepare($sql); 
	$stmt->execute();
	if($stmt->rowCount()>0){
		$ObtFecha = "SELECT * FROM obtener WHERE Usuario_Score = '$usuario'"; 
		$Fecha = $colombia->prepare($ObtFecha); 
		$Fecha->execute();
		$datos = $Fecha->fetch();
		$rank = $datos['Puntajes_Ranking'];
		$DltUsr = "DELETE FROM usuario WHERE nickname = '$usuario'";
		$Usr = $colombia->prepare($DltUsr); 
		$Usr->execute();
		$DltObt = "DELETE FROM obtener WHERE Usuario_Score = '$usuario'";
		$Obt = $colombia->prepare($DltObt); 
		$Obt->execute();
		$DltScr = "DELETE FROM puntajes WHERE Ranking = '$rank'";
		$Scr = $colombia->prepare($DltScr); 
		$Scr->execute();
		header ('Location: index.html'); 
	}
?>