<?php
/*En este archivo se guardan los pedidos*/

require_once 'medoo.php';

if (!isset($_POST['carrito']) || !isset($_POST['username'])) {
    echo json_encode([401, 'El servidor no ha recibido los datos del carrito.']);
    return;
}

$username = $_POST['username'];
$user_id = medoo::getInstance()->select('users', 'id', ['username' => $username]);

if (!$user_id)
    $user_id = null;
else
    $user_id = $user_id[0];


$order_id = medoo::getInstance()->insert('orders', ['uid' => $user_id]);

if ($order_id) {
    $carrito = $_POST['carrito'];
    foreach ($carrito as $product_id => $cantidad) {
        medoo::getInstance()->insert('orders_products', [
            'prod_id' => $product_id,
            'order_id' => $order_id,
            'quantity' => $cantidad
        ]);
    }
    echo json_encode([200, $order_id]);
} else {
    echo json_encode([401, 'Ha ocurrido un problema al crear el pedido.']);
    return;
}
