<?php
header('Access-Control-Allow-Origin: *');

$con = mysqli_connect('162.241.2.213', 'gabr5590', '4hvfM342zI', 'gabr5590_tlimited');

$where = null;
$andSize = null;
$andColor = null;

$brand = null;
$size = null;
$color = null;
$order = $_POST['order'];

if($_POST['brand'] OR $_POST['size'] OR $_POST['color']) {
  $where = 'WHERE';
}

if($_POST['brand']) {
  $arrayBrand = explode(',', $_POST['brand']);
  $arrayToString = implode('" OR marca = "',$arrayBrand);
  $brand = 'marca = "'.$arrayToString.'"';
}

if($_POST['size']) {
  $size = 'tamanho = '.$_POST['size'];
  if($_POST['brand']) {
    $andSize = 'AND';
  }
}

if($_POST['color']) {
  $arrayColor = explode(',', $_POST['color']);
  $arrayToString = implode('" OR cor = "',$arrayColor);
  $color = 'cor = "'.$arrayToString.'"';
  if($_POST['brand'] OR $_POST['size']) {
    $andColor = 'AND';
  }
}

$query = "SELECT * FROM itens RIGHT JOIN imagens ON itens.id = imagens.id_produto LEFT JOIN unidades ON itens.id = unidades.id_produto $where $brand $andSize $size $andColor $color $order";

$result = mysqli_query($con, $query);

$product = Array();

while($data = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
  $brlValue = $data['valor'] * 5.74;

  $product [] = Array(
    'id' => $data['id'],
    'promocao' => $data['promocao'],
    'nome' => $data['nome'],
    'marca' => $data['marca'],
    'descricao' => $data['descricao'],
    'categoria' => $data['categoria'],
    'flashlikes' => $data['flashlikes'],
    'valor' => number_format($brlValue, 2, ',', '.'),
    'edicao' => $data['edicao'],
    'cor' => $data['cor'],
    'designer_nome' => $data['designer_nome'],
    'designer_funcao' => $data['designer_funcao'],
    'designer_imagem' => $data['designer_imagem'],
    'imagem' => $data['imagem']
  );
}

// echo json_encode($product);

echo $query;
?>