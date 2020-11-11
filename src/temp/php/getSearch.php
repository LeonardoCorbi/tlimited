<?php
header('Access-Control-Allow-Origin: *');

$con = mysqli_connect('162.241.2.213', 'gabr5590', '4hvfM342zI', 'gabr5590_tlimited');

$orBrand = null;
$andSize = null;
$orColor = null;

$brand = null;
$size = null;
$color = null;
$order = $_POST['order'];

$string = $_POST['string'];

if($_POST['brand']) {
  $arrayBrand = explode(',', $_POST['brand']);
  $arrayToString = implode('" OR marca = "',$arrayBrand);
  $brand = 'marca = "'.$arrayToString.'"';
  $orBrand = 'OR';
}

if($_POST['size']) {
  $size = 'tamanho = '.$_POST['size'];
  $orSize = 'AND';
}

if($_POST['color']) {
  $arrayColor = explode(',', $_POST['color']);
  $arrayToString = implode('" OR cor = "',$arrayColor);
  $color = 'cor = "'.$arrayToString.'"';
  $orColor = 'OR';
}
if(!$size) {
  $query = "SELECT * FROM itens INNER JOIN imagens ON itens.id = imagens.id_produto WHERE itens.nome LIKE '%$string%' $orBrand $brand $orSize $size $orColor $color AND imagens.thumb = 1 $order";
} else {
  $query = "SELECT * FROM itens INNER JOIN imagens ON itens.id = imagens.id_produto INNER JOIN unidades ON itens.id = unidades.id_produto WHERE itens.nome LIKE '%$string%' $orBrand $brand $andSize $size $orColor $color AND imagens.thumb = 1 $order";
}

$result = mysqli_query($con, $query);

$product = Array();

while($data = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
  $brlValue = $data['valor'] * 6;

  
  $product [] = Array(
    'id' => $data['id'],
    'promocao' => $data['promocao'],
    'nome' => $data['nome'],
    'marca' => $data['marca'],
    'descricao' => html_entity_decode($data['descricao']),
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
echo json_encode($product);
// echo $query;
?>