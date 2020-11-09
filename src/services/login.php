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
      echo 'ok';
    }else {
      echo 'senha';
    }
  }
}else {
  echo 'usuario';
}


?>