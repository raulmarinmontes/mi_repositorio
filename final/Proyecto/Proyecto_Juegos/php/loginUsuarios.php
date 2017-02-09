<?php
/**
 * Created by PhpStorm.
 * User: Raul
 * Date: 06/12/2016
 * Time: 17:12
 */
// Comprobar si existe el usuario con el nombre y password introducida
require_once 'medoo.php';
if (!isset($_POST['username']) || !isset($_POST['password'])) {
    echo json_encode([401, 'Por favor rellene todos los campos.']);
    return;
}

if ($_POST['username'] == '' || $_POST['password'] == '') {
    echo json_encode([401, 'Por favor rellene todos los campos.']);//Si los campos están vacíos muestra el siguiente mensaje, caso contrario sigue el siguiente codigo.
} else {
    $users = medoo::getInstance()->select('users', '*', [
        "AND" => [
            'username' => $_POST['username'],
            'password' => $_POST['password']
        ]
    ]);
    if (count($users) > 0)
        echo json_encode([200, 'Ok']);
    else

        echo json_encode([401, 'Las credenciales no existen.']);
}