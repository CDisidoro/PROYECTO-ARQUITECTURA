<?php
if(!$_POST){
	?>
<?php
}else{
	ini_set("SMTP", "localhost");
	ini_set("smtp_port", 25);
	$mensaje = $_POST['mensaje'];
	$correo = $_POST['correo'];
	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellido'];
	$asunto = $_POST['asunto'];
	$destino = 'camilodisidoro2015@gmail.com';
	$mensaje = 'Nombre: $nombre\n Apellido: $apellido\n E-mail: $correo\n Mensaje: \n $mensaje';
    $headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/plain; charset=utf-8\n";
    $headers .= "X-Priority: 3\n";
    $headers .= "X-MSMail-Priority: Normal\n";
    $headers .= "X-Mailer: php\n";
    $headers .= "From: \"".$_POST['nombre']." ".$_POST['apellido']."\" <".$correo.">\n";
	if(mail($destino, $asunto, $mensaje,$headers)){
		include 'exitocontacto.html';
	}else{
		echo "Psicologia";
	}
}

?>