(function () {
    'use strict';
    window.carrito = {};
    $(document).on('onLogin', function () {
        /*localStorage.carrito = {
         invitado: {
         producto1: 23,
         producto2: 2
         },
         raul: {
         product46: 46
         }
         };*/

        /**
         * getCarrito: Función para saber si hay productos en el carrito
         *
         * @returns {undefined}
         */
        window.carrito.getCarrito = function () {

            var carritoName = (localStorage.login) ? JSON.parse(localStorage.login).username : 'invitado';
            if (!carritoName) carritoName = 'invitado';

            var carritos = (localStorage.carrito) ? JSON.parse(localStorage.carrito) : {};
            if (Object.keys(carritos).length == 0)
                localStorage.carrito = JSON.stringify({});

            return (carritos.hasOwnProperty(carritoName)) ? JSON.parse(carritos[carritoName]) : undefined;
        };

        /**
         * guardarProducto: Función para añadir productos al carrito y guardar el carrito en localstorage
         *
         * @param producto_id
         */
        window.carrito.guardarProducto = function (producto_id) {
            var carrito = window.carrito.getCarrito();
            var carritoName = (localStorage.login) ? JSON.parse(localStorage.login).username : 'invitado';
            if (!carritoName) carritoName = 'invitado';

            if (!carrito)
                carrito = {};


            carrito[producto_id] = (carrito.hasOwnProperty(producto_id)) ? carrito[producto_id] + 1 : 1;


            var carritos = JSON.parse(localStorage.carrito);
            carritos[carritoName] = JSON.stringify(carrito);
            localStorage.carrito = JSON.stringify(carritos);
            window.carrito.renderCarrito();
        };

        /**
         * getTotal: Función para obtener el precio total de los productos del carrito
         *
         * @returns {number}
         */
        window.carrito.getTotales = function () {
            var carrito = window.carrito.getCarrito();

            var totales = {
                cantidad: 0,
                precio: 0
            };

            if (!carrito)
                return totales;

            _.each(carrito, function (cantidad, product_id) {
                totales.cantidad += cantidad;
                totales.precio += parseFloat(window.productos[product_id].price) * cantidad;
            });

            return totales;
        };

        /**
         * eliminarCarrito:
         */
        window.carrito.eliminarCarrito = function () {
            var carritoName = (localStorage.login) ? JSON.parse(localStorage.login).username : 'invitado';
            if (!carritoName) carritoName = 'invitado';

            var carritos = JSON.parse(localStorage.carrito);
            delete carritos[carritoName];
            localStorage.carrito = JSON.stringify(carritos);
        };

        /**
         * renderCarrito: Función para renderizar los productos desde la base de datos y pintarlos en el desplegable
         *
         * @returns {boolean}
         */
        window.carrito.renderCarrito = function () {
            var carrito = window.carrito.getCarrito();
            $('.shopping-cart-items').html('');

            if (!carrito) {
                $('.carrito-total').html(0);
                $('.carrito-total-precio').html('0 €');
                return false;
            }

            var totales = window.carrito.getTotales();
            $('.carrito-total').html(totales.cantidad);
            $('.carrito-total-precio').html(totales.precio + '€');

            // Recorremos el carrito para pintar el html de los productos del carrito
            _.each(carrito, function (cantidad, product_id) {
                var product = window.productos[product_id];
                $('.shopping-cart-items').append('' +
                    '<li class="clearfix">' +
                    '<img class="img_desplegable"' +
                    'src="' + product.img + '"' +
                    'alt="item1"/>' +
                    '<p class="item-name">' + product.name + '</p>' +
                    '<p class="item-price">Precio: ' + product.price + '€ </p>' +
                    '<p class="item-quantity">Cantidad: <span class="item-num-qty" data-qty-product-id="' + product.id + '">' + cantidad + '</span></p>' +
                    '</li>');
            });

        };

        /**
         * pagar: Función para guardar el pedido en la base de datos y en la respuesta de la petición se guarda en una url el id del pedido y el perecio para posteriormente poder mostarlo
         *
         */
        window.carrito.pagar = function () {
            var username = (localStorage.login) ? JSON.parse(localStorage.login).username : 'invitado';
            if (!username) username = 'invitado';
            var totales = window.carrito.getTotales();

            $.ajax({
                url: 'php/guardarPedido.php',
                dataType: 'json',
                method: 'post',
                data: {
                    username: username,
                    carrito: window.carrito.getCarrito()
                },
                success: function (res) {
                    if (res[0] == 200) {
                        window.carrito.eliminarCarrito();
                        var path = window.location.pathname.split('/');
                        path.pop();
                        path = path.join('/');
                        window.location.href = path + '/pago.html?order_id=' + res[1] + '&price=' + totales.precio;
                    }
                }
            });
        };

        $('.shopping-cart a.button').on('click', function () {
            window.carrito.pagar();
        });

        // ajax para cojer los productos de la bbdd
        // TODO: habria que filtrar la peticion ajax solamente por los ids que estan guardados en el carrito porque en caso de tener muchos productos tardaria demasiado en cargar
        $.ajax({
            url: 'php/getProducts.php',
            dataType: 'json',
            success: function (response) {
                var productos = {};
                _.each(response, function (product) {
                    productos[product.id] = product;
                });
                window.productos = productos;
                window.carrito.renderCarrito();
            }
        });


    });
})();