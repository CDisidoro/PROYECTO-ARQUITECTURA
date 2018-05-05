<?php
	session_start();
	$nick = $_SESSION['nickname'];
	//$_SESSION['nickname'] = $nick;
	echo $nick;
?>