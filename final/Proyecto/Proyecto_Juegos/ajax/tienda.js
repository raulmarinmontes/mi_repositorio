(function () {
    'use strict';
    $(document).ready(function () {

        var $productsBox = $('#tienda-productos');

        // Petición ajax para renderizar los productos desde la base de datos en la tienda
        $.ajax({
            url: 'php/getProducts.php',
            dataType: 'json',
            success: function (response) {
                _.each(response, function (value, key) {
                    $productsBox.append('<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 product-item wow fadeIn">' +
                        '<img class="img-home" src="' + value.img + '" alt="Destacado 1">' +
                        '<p class="parr_prod">' + value.name + '</p>' +
                        '<p class="category-product">' + value.category + '</p>' +
                        '<p class="stars">' +
                        '<i class="fa fa-star star-active"></i>' +
                        '<i class="fa fa-star star-active"></i>' +
                        '<i class="fa fa-star star-active"></i>' +
                        '<i class="fa fa-star star-unactive"></i>' +
                        '<i class="fa fa-star star-unactive"></i>' +
                        '</p>' +
                        '<p class="precios">' +
                        '<span class="price-after">' + value.price + '</span>' +
                        '<span class="price">€</span>' +
                        '</p>' +
                        '<button class="btn btn-cart btn_home" data-product-id="' + value.id + '">' +
                        '<i class="fa fa-shopping-cart"></i> Añadir al carrito' +
                        '</button>' +
                        '<div class="btn btn-cart-mobile">' +
                        '<i class="fa fa-shopping-cart"></i>' +
                        '</div>');
                });
                $('[data-product-id]').click(function () {
                    window.carrito.guardarProducto($(this).attr('data-product-id'));
                });
            }
        });


    });
})();

