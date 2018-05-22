<?php
session_start(); 
require_once('conexion.php');
if(isset($_POST['puntos']) && isset($_POST['tiempo'])){
	$puntaje = $_POST['puntos'];
	$tiempo = $_POST['tiempo'];
	if(isset($_SESSION['nickname'])){
		$jugador = $_SESSION['nickname'];
	}else{
		$jugador = "c";
	}
}else{
	$puntaje = 60;
	$tiempo = 30;
}
$conex = new Conexion();
$establecer = $conex->Conectar();

$sql = "SELECT * FROM obtener WHERE Usuario_Score = '$jugador' ";//DATOS DE TABLA OBTENER
$stmt=$establecer->prepare($sql);
$stmt->execute();
$datos = $stmt->fetch();
$rank =$datos['Puntajes_Ranking'];//RANGO DEL USUARIO LOGEADO CON SU PUNTAJE CORRESPONDIENTE
if($stmt->rowCount()>0){
	$tablaComm = "SELECT * FROM puntajes WHERE Ranking = '$rank'"; //DATOS DE TABLA PUNTAJES
	$tablaEjct = $establecer->prepare($tablaComm);
	$tablaEjct->execute();
	$datosP = $tablaEjct->fetch();
	$rankP = $datosP['Ranking'];
	$sql2 = "UPDATE puntajes SET Ranking = '$rankP',Puntaje='$puntaje',Tiempo='$tiempo' WHERE Ranking='$rank' "; 
	$stmt1= $establecer->prepare($sql2);
	$stmt1->execute();
	$fecha = date('Y-m-d');
	echo $fecha;
	$fechaUpdate = "UPDATE usuario SET Obtener_Fecha_Score = '$fecha' WHERE nickname = '$jugador'";
	$fechaComm = $establecer->prepare($fechaUpdate);
	$fechaComm->execute();
}else{
	$tablaComm = "SELECT * FROM puntajes WHERE Ranking = '$rank'";
	$tablaEjct = $establecer->prepare($tablaComm);
	$tablaEjct->execute();
	$datosP = $tablaEjct->fetch();
	$rank++;
	$sql3= "INSERT INTO puntajes VALUES ('$rank','$puntaje','$tiempo')";
	$stmt2=$establecer->prepare($sql3);
	$stmt2->execute();
}
 ?>
