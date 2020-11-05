<?php
header('Access-Control-Allow-Origin: *');

$con = mysqli_connect('162.241.2.213', 'gabr5590', '4hvfM342zI', 'gabr5590_tlimited');

$id = $_POST['id'];

$query = "SELECT unidades.tamanho, unidades.quantidade FROM itens RIGHT JOIN unidades ON itens.id = unidades.id_produto WHERE itens.id = $id";

$result = mysqli_query($con, $query);

$productUnidade = Array();

while($data = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
  $productUnidade[] = Array(
    'tamanho' => $data['tamanho'],
    'quantidade' => $data['quantidade']
  );
}

echo json_encode($productUnidade);

?>