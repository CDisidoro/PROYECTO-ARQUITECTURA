<?php
	session_start(); 
	require_once('conexion.php');

	$jugador = $_SESSION['nickname'];
	$puntos = $_POST['puntos'];
	$tiempo = $_POST['tiempo'];
	$conex = new Conexion();
	$establecer = $conex->Conectar();

	$tablaComm = "SELECT * FROM usuario WHERE nickname = '$jugador'";
	$tablaEjct = $establecer->prepare($tablaComm);
	$tablaEjct->execute();
	$datosP = $tablaEjct->fetch();
	if($rank==0){
		$rank = $tablaEjct->rowCount();
		$rank+=2;
	}else{
		$rank = $datosP['ranking'];
	}
	$fecha = date('Y-m-d');

	$sql2 = "UPDATE usuario SET fechaScore = '$fecha' , ranking = '$rank' , puntaje='$puntos' , tiempo='$tiempo' WHERE nickname='$jugador' ";
	$stmt1= $establecer->prepare($sql2);
	$stmt1->execute();

	//ORGANIZAR RANKING
	$obtenerOrdenadoPuntaje = "SELECT * FROM usuario ORDER BY puntaje DESC";
	$ejecutarPuntaje = $establecer->prepare($obtenerOrdenadoPuntaje);
	$ejecutarPuntaje->execute();
	$datosPuntaje = $ejecutarPuntaje->fetchAll(PDO::FETCH_ASSOC);
	$tope = $ejecutarPuntaje->rowCount();
	$init = 0;
	foreach ($datosPuntaje as $data) {
		$init++;
		$nickUpdt = $data['nickname'];
		$updt = "UPDATE usuario SET ranking = '$init' WHERE nickname='$nickUpdt' ";
		$actualizar = $establecer->prepare($updt);
		$actualizar->execute();
	}
?>