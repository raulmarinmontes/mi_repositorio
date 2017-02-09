
/**
 *  Autor = Raul Marin
 *  Fecha =
 *  Licencia = GPL v3
 *  Versión = 1.0
 *  Descripción =  Comprobaciones y validaciones para el formulario de CONTACTO
 *
 *
 *  Copyright (C) 2016  Raúl Marín Montes
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


$('#login-form').on('submit', function () {
    var data = {};
    var $form = $('#login-form');

    _.each($form.serializeArray(), function (input) {
        data[input.name] = input.value;
    });

    $.ajax({
        url: 'php/loginUsuarios.php',
        method: 'post',
        data: data,
        dataType: 'json',
        success: function (response) {
            var statusCode = response[0];
            if (statusCode == 401) {
                $form.find('.alert').remove();
                $form.prepend('<div class="alert alert-danger">'+response[1]+'</div>');
            } else {
                window.localStorage.login = JSON.stringify(data);
                window.location.href = window.location.href;
            }
        }
    });
    return false;
});