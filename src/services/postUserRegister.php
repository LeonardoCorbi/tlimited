<?php
header('Access-Control-Allow-Origin: *');

$con = mysqli_connect('162.241.2.213', 'gabr5590', '4hvfM342zI', 'gabr5590_tlimited');

$name = $_POST['name'];
$email = $_POST['email'];
$cpf = $_POST['cpf'];
$phone = $_POST['phone'];
$cep = $_POST['cep'];
$street = $_POST['street'];
$number = $_POST['number'];
$city = $_POST['selectedCity'];
$uf = $_POST['selectedUf'];
$password = md5($_POST['password']);

$imageName = $name.'-'.$_FILES['avatar']['name'];
move_uploaded_file($_FILES['avatar']['tmp_name'], '../static/images/avatars/'.$imageName);

$query = "INSERT INTO `usuarios`(`cpf`, `nome`, `email`, `telefone`, `cep`, `endereco`, `numero`, `cidade`, `estado`, `senha`, `avatar`) VALUES ($cpf, '$name', '$email', $phone, $cep, '$street', '$number', '$city', '$uf', '$password', 'https://leonardocorbi.dev/static/images/avatars/$imageName')";

if($result = mysqli_query($con, $query)) {
  echo $cpf;
}else {
  echo 'invalid';
}


?>