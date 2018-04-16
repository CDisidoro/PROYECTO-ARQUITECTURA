<?php
	$mensaje = $_POST["mensaje"];
	$correo = $_POST["correo"];
	$nombre = $_POST["nombre"];
	$apellido = $_POST["apellido"];
	$asunto = $_POST["asunto"];
	$destino = "camilodisidoro2015@gmail.com";
	$mensaje = "Nombre: ".$nombre."\nApellido: ".$apellido."\nE-mail: ".$correo."\nMensaje: \n".$mensaje;
	if(mail($destino, $asunto, $mensaje)){
		echo "
			<!DOCTYPE html> 
			<html lang='en'> 
			  <head> 
			  <meta charset='UTF-8'> 
			  <link rel='stylesheet' type='text/css' href='css/estilos.css'> 
			  <link rel='stylesheet' type='text/css' href='estilos.css'> 
			  <link rel='stylesheet' type='text/css' href='cabeza.css'>
			  <link rel='icon' type='image/png' href='src/login.png'>
			  <title>CONTACTANOS</title>
			</head> 
			<body>  
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <center><h1 style='font-size: 60px; font-family: Iceland;'>SU MENSAJE HA SIDO ENVIADO</h1>
			  <a href='index.html' style='font-size: 60px; color:black;font-size: 40px;text-decoration: none;font-weight: bold;font-family: Iceland;'>Volver a Inicio</a>
			  </center>
			 </body> 
			</html>";
	}else{
		echo "
			<!DOCTYPE html> 
			<html lang='en'> 
			  <head> 
			  <meta charset='UTF-8'> 
			  <link rel='stylesheet' type='text/css' href='css/estilos.css'> 
			  <link rel='stylesheet' type='text/css' href='estilos.css'> 
			  <link rel='stylesheet' type='text/css' href='cabeza.css'>
			  <link rel='icon' type='image/png' href='src/login.png'>
			  <title>CONTACTANOS</title>
			</head> 
			<body>  
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <br>
			  <center><h1 style='font-size: 60px; font-family: Iceland;'>HA HABIDO UN ERROR ENVIANDO SU MENSAJE</h1>
			  <a href='index.html' style='font-size: 60px; color:black;font-size: 40px;text-decoration: none;font-weight: bold;font-family: Iceland;'>Volver a Inicio</a>
			  </center>
			 </body> 
			</html>";
	}
?>