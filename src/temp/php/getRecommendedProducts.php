<?php
header('Access-Control-Allow-Origin: *');

$con = mysqli_connect('162.241.2.213', 'gabr5590', '4hvfM342zI', 'gabr5590_tlimited');

$brand = $_POST['brand'];
if(!$_POST['brand']) {
  $brand = 'nike';
}

$query = "SELECT * FROM itens INNER JOIN imagens ON itens.id = imagens.id_produto WHERE imagens.thumb = 1 AND marca = '$brand' LIMIT 5";

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
// echo $_POST['brand'];
?>