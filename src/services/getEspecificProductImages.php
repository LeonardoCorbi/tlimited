<?php
header('Access-Control-Allow-Origin: *');

$con = mysqli_connect('162.241.2.213', 'gabr5590', '4hvfM342zI', 'gabr5590_tlimited');

$id = $_POST['id'];

$query = "SELECT imagens.imagem FROM itens RIGHT JOIN imagens ON itens.id = imagens.id_produto WHERE itens.id = $id";

$result = mysqli_query($con, $query);

$productImages = Array();

while($data = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
  $productImages[] = $data['imagem'];
}

echo json_encode($productImages);

?>