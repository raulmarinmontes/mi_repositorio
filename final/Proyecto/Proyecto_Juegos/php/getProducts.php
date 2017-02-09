<?php
/**
 * Created by PhpStorm.
 * User: Raul
 * Date: 11/12/2016
 * Time: 12:54
 */

require_once 'medoo.php';

$products = medoo::getInstance()->select('products', '*');

echo json_encode($products);