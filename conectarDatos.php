<?php
require_once('conexion.php');

$jugador = $_SESSION['nickname'];
$puntaje = $_POST['puntos'];
$tiempo = $_POST['tiempo'];

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

	$sql2= "UPDATE puntajes SET Ranking = '$datosP['Ranking']',Puntaje='$puntaje',Tiempo='$tiempo' WHERE Ranking='$rank'"; 
	$stmt1= $establecer->prepare($sql2);
	$stmt1->execute();

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
