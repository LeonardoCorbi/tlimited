<?php
header('Access-Control-Allow-Origin: *');

session_start();

$_SESSION['nome'] = 'leo';

echo $_SESSION['nome'].' set in login';
print('oi');

session_id()

?>