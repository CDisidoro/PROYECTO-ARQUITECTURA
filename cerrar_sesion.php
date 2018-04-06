<?php
session_start();
unset($_SESSION['ingreso']);
session_destroy();
header ('Location: index.html');


?>