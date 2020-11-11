<?php
header('Access-Control-Allow-Origin: *');

$con = mysqli_connect('162.241.2.213', 'gabr5590', '4hvfM342zI', 'gabr5590_tlimited');

$name = $_POST['name'];
$password = md5($_POST['password']);

if(preg_match('/@/', $name)) {
  $query = "SELECT * FROM usuarios WHERE email = '$name'";
}else {
  $query = "SELECT * FROM usuarios WHERE cpf = $name";
}

$result = mysqli_query($con, $query);

$numberOfRows = mysqli_num_rows($result);

if($numberOfRows) {
  while($data = mysqli_fetch_assoc($result)) {
    if($data['senha'] === $password) {
      $user = Array(
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
    }else {
      echo 'senha';
    }
  }
}else {
  echo 'usuario';
}


?>