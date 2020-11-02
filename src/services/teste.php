<?php
header('Access-Control-Allow-Origin: *');

session_start();

echo $_SESSION['nome'].' read in cadastro';

?>