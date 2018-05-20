<?php
require_once('conexion.php');
session_start();
$jugador = $_SESSION['nickname'];

$puntaje = 10;
$tiempo = 10;


$conex = new Conexion();
$establecer = $conex->Conectar();
/*$conex = new Conexion();
$establecer = $conex->Conectar();
$sql = "UPDATE score SET Puntaje = '$puntaje',tiempo = '$tiempo' WHERE Nickname = '$jugador'";
$stmt=$establecer->prepare($sql);
$stmt->execute();*/

//$sql = "INSERT INTO score VALUES ('$jug','$punt','$tiempo')";
//$stmt=$establecer->prepare($sql);
//$stmt->execute();

$sql = "SELECT * FROM obtener WHERE Usuario_Score = '$jugador' ";//me trae todos los datos de la tabla


//$sql = "SELECT score FROM Nickname WHERE Nickname = '$jugador' ";
$stmt=$establecer->prepare($sql);
$stmt->execute();
$usuario = $stmt->rowCount();
if($usuario>0){
	$rank =$usuario['Ranking'];
	$tablaComm = "SELECT * FROM puntajes WHERE Puntaje = '$rank'";
	$tablaEjct = $establecer->prepare($tablaComm);
	$tablaEjct->execute();
	$sql2= "UPDATE puntajes SET Puntaje = '$puntaje',Tiempo = '$tiempo' WHERE Ranking = '$rank' ";
	$stmt1= $establecer->prepare($sql2);
	$stmt1->execute();
}else{

	$sql3= "INSERT INTO puntajes VALUES ('$jugador','$puntaje','$tiempo')";
	$stmt2=$establecer->prepare($sql3);
	$stmt2->execute();
}
 ?>
