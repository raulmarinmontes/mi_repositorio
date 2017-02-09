(function () {
    'use strict';
// Función para obtener el id del pedido y el precio que deje almacenado anteriormente en la url
    var qs = (function (a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i) {
            var p = a[i].split('=', 2);
            if (p.length == 1)
                b[p[0]] = "";
            else
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'));

    if (qs.order_id && qs.price) {
        $('#num-order').html(qs.order_id);
        $('#total-order').html(qs.price + '€');
    }
})();