<?php 

//mysqli_connect conectar mysql con php ---obsoleto
//mysql_connect ---re---obsoleto
//API PDO

class Conexion{

private $db= "mysql:host=localhost;dbname=bd_juego";
private $user = "root";
private $pass = "";

public function Conectar(){
	$base = new PDO($this->db,$this->user,$this->pass);
	return $base;
}

}


?>
