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
  $queryLogin = "SELECT * FROM usuarios WHERE cpf = $cpf";
  
  $resultLogin = mysqli_query($con, $queryLogin);

  $user = Array();

  while($data = mysqli_fetch_array($resultLogin, MYSQLI_ASSOC)) {
    $user []= Array(
      'id' => $data['id'],
      'cpf' => $data['cpf'],
      'nome' => $data['nome'],
      'email' => $data['email'],
      'telefone' => $data['telefone'],
      'cep' => $data['cep'],
      'endereco' => $data['endereco'],
      'numero' => $data['numero'],
      'cidade' => $data['cidade'],
      'estado' => $data['estado'],
      'senha' => $data['senha'],
      'avatar' => $data['avatar']
    );
    echo json_encode($user);
  }
}else {
  echo 'invalid';
}


?>