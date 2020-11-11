<?php
header('Access-Control-Allow-Origin: *');

$con = mysqli_connect('162.241.2.213', 'gabr5590', '4hvfM342zI', 'gabr5590_tlimited');

$id = $_POST['id'];

$query = "SELECT * FROM itens WHERE id = $id";

$result = mysqli_query($con, $query);

$productInfo = Array();

while($data = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
  $brlValue = $data['valor'] * 6;

  $productInfo[] = Array(
    'id' => $data['id'],
    'promocao' => $data['promocao'],
    'nome' => $data['nome'],
    'marca' => $data['marca'],
    'descricao' => html_entity_decode($data['descricao']),
    'categoria' => $data['categoria'],
    'flashlikes' => $data['flashlikes'],
    'valor' => $brlValue,
    'edicao' => $data['edicao'],
    'cor' => $data['cor'],
    'designer_nome' => $data['designer_nome'],
    'designer_funcao' => $data['designer_funcao'],
    'designer_imagem' => $data['designer_imagem']
  );
}

echo json_encode($productInfo);

?>