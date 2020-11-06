<?php
include 'defaultHeader.php';

$name = $_POST['name'];
$email = $_POST['email'];
$cpf = $_POST['cpf'];
$phone = $_POST['phone'];
$cep = $_POST['cep'];
$street = $_POST['street'];
$number = $_POST['number'];
$city = $_POST['selectedCity'];
$uf = $_POST['selectedUf'];
$password = $_POST['password'];
$avatar = $_POST['avatar'];

echo '$name 
$email 
$cpf 
$phone 
$cep 
$street 
$number 
$city 
$uf 
$password 
$avatar';

?>