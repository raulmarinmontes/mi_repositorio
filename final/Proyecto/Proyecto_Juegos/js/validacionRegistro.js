/**
 *  Autor = Raul Marin
 *  Fecha =
 *  Licencia = GPL v3
 *  Versión = 1.0
 *  Descripción =  Comprobaciones y validaciones para el formulario de REGISTRO
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

/* FUNCION PARA HABILITAR EL CHECKBOX */
function enableTerms() {
    var array = new Array();
    array.push(document.getElementById("nombre").value.length);
    array.push(document.getElementById("email").value.length);
    array.push(document.getElementById("password").value.length);
    array.push(document.getElementById("password2").value.length);

    var camposRellenados = true;
    for (var i = 0; i < array.length; i++)
        if (Number(array[i]) <= 0) {
            camposRellenados = false;
            break;
        }

    var invalidFields = $('#registro').validate().invalid;
    if (camposRellenados && Object.getOwnPropertyNames(invalidFields).length <= 0) {
        document.getElementById("register-submit").removeAttribute('disabled');
    } else {
        document.getElementById("register-submit").setAttribute('disabled', 'disabled');
    }
}

$('#registro').on('submit', function (ev) {
    ev.preventDefault();
    var data = {};
    var $form = $('#registro');
    var $formParent = $form.parent();

    _.each($form.serializeArray(), function (input) {
        data[input.name] = input.value;
    });
    data['register-submit'] = true;

    $.ajax({
        url: 'php/registrarUsuarios.php',
        method: 'post',
        data: data,
        dataType: 'json',
        success: function (response) {
            var statusCode = response[0];
            var msg = response[1];
            if (statusCode == 200) {
                $form.hide();
                $formParent.html('<div class="alert alert-success">' + msg + '</div>');
            } else
                $form.prepend('<div class="alert alert-danger">' + msg + '</div>')
        }
    });
    return false;
});


/* FUNCION QUE AÑADE EL ATRIBUTO 'regex' A LA LIBRERIA jquery.validate.js */
$.validator.addMethod(
    "regex",
    function (value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },
    "Comprueba el valor de este campo"
);

/* FUNCION DE VALIDACIÓN DE LA LIBRERIA jquery.validate.js */
$('#registro').validate({
    rules: {
        nombre: {
            required: true,
            regex: /^([a-zA-ZÁÉÍÓÚáéíóú ]{1,30})+$/
        },

        email: {
            required: true,
            regex: /^(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w*)*)/
        },

        password: {
            required: true,
            regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,15}$/
        },
        password2: {
            required: true,
            regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,15}$/
        }
    },
    highlight: function (element) {
        var id_attr = "#" + $(element).attr("id") + "1";
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        $(id_attr).removeClass('glyphicon-ok').addClass('glyphicon-remove');
    },
    unhighlight: function (element) {
        var id_attr = "#" + $(element).attr("id") + "1";
        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        $(id_attr).removeClass('glyphicon-remove').addClass('glyphicon-ok');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function (error, element) {
        if (element.length)
            error.insertAfter(element);
        else
            error.insertAfter(element);
    },
    messages: {
        nombre: {
            required: "El nombre es un campo requerido.",
            regex: "El nombre solo puede tener letras."
        },
        email: {
            required: "El email es un campo requerido.",
            regex: "El formato es ejemplo@ejemplo.ej"
        },
        password: {
            required: "La contraseña debe contener un mínimo de 6 caracteres y un máximo de 15."
        },
        password2: {
            required: "La contraseña debe contener un mínimo de 6 caracteres y un máximo de 15."
        }
    }
});