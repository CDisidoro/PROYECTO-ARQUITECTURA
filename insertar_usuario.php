<?php 
//llamar a conexion
require_once('conexion.php');
//traer variables del formulario

$nickname =$_POST['nickname'];
$correo =$_POST['correo'];
$password=$_POST['password'];
$fecha=$_POST['fecha'];
$imagen =$_FILES['imagen']['name'];

//echo $nickname;

//generar num aleatorios entre 500 -10000
$numero = rand(500,10000);
$dia = date('z');
$ruta= "fotosavatar/".$dia.$numero.$imagen;
$carga = @move_uploaded_file($_FILES['imagen']['tmp_name'], $ruta);


//insertar datos del formulario a la BD

$con = new Conexion();
$colombia =$con->Conectar();

$sql = "INSERT INTO usuario VALUES ('$nickname', '$correo', '$password', '$fecha', '$ruta')";
$stmt = $colombia->prepare($sql);
$stmt->execute();
if($stmt){
	echo "usuario registrado";
}
else{
	echo"paro";
}
?>