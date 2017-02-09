<?php
/**
 * Created by PhpStorm.
 * User: Raul
 * Date: 01/12/2016
 * Time: 14:13
 */
session_start();
require_once 'medoo.php';

if (isset($_POST['register-submit'])) {
    if ($_POST['nombre'] == '' || $_POST['password'] == '' || $_POST['password2'] == '' || $_POST['email'] == '') {
        echo json_encode([401, 'Por favor rellene todos los campos.']);
    } else {
        $users = medoo::getInstance()->select('users', '*', ['username' => $_POST['nombre']]);
        $verificar_usuario = 0;//Creamos la variable $verificar_usuario que empieza con el valor 0 y si la condición que verifica el usuario(abajo), entonces la variable toma el valor de 1 que quiere decir que ya existe ese nombre de usuario por lo tanto no se puede registrar
        if (count($users) > 0) //Esta condición verifica si ya existe el usuario
        {
            $verificar_usuario = 1;
        }


        if ($verificar_usuario == 0) {
            if ($_POST['password'] == $_POST['password2'])//Si los campos son iguales, continua el registro y caso contrario saldrá un mensaje de error.
            {
                $usuario = $_POST['nombre'];
                $password = $_POST['password'];
                $email = $_POST['email'];

                $insert_users = medoo::getInstance()->insert("users", [
                    [
                        "username" => $usuario,
                        "password" => $password,
                        "email" => $email
                    ]
                ]);

                if ($insert_users)
                    echo json_encode([200, 'Usted se ha registrado correctamente.']);
                else
                    echo json_encode([401, 'Ya existe el email <b>' . $_POST['email'] . '</b>, intente nuevamente.']);
            } else {
                echo json_encode([401, 'Las claves no son iguales, intente nuevamente.']);
            }
        } else {
            echo json_encode([401, 'Este usuario ya ha sido registrado anteriormente.']);
        }
    }
}
