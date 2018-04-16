<?php  
 
//mysqli_connect conectar mysql con php ---obsoleto 
//mysql_connect ---re---obsoleto 
//API PDO 
 
class Conexion{ 
 
private $db= "mysql:host=localhost;dbname=id5424353_bd_juego"; 
private $user = "id5424353_root"; 
private $pass = "99111107285aA!"; 
 
public function Conectar(){ 
  $base = new PDO($this->db,$this->user,$this->pass); 
  return $base; 
} 
 
} 
 
 
?>