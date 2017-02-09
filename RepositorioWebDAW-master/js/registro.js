/**
 *  Autor = David Gomez Quilon
 *  Fecha =
 *  Licencia = GPL v3
 *  Versión = 1.0
 *  Descripción =
 *
 *
 *  Copyright (C) 2015  David Gómez Quilón
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


/* VALIDACION */
$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },
    "Comprueba el valor de este campo"
);

/* FUNCION DE VALIDACIÓN DE LA LIBRERIA jquery.validate.js */
$('#registro').validate({
    rules: {
        username: {
            required: true,
            minlength: 4,
            maxlength: 8,
            regex: /^([a-z0-9ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ])+$/
        },
        email: {
            required: true,
            regex: /^(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w*)*)/
        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 15,
            regex: /^([a-z0-9ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ])+$/
        },
        password2: {
            required: true,
            minlength: 6,
            maxlength: 15,
            regex: /^([a-z0-9ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ])+$/
        },
    },
    highlight: function(element) {
        var id_attr = "#" + $( element ).attr("id") + "1";
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        $(id_attr).removeClass('glyphicon-ok').addClass('glyphicon-remove');
    },
    unhighlight: function(element) {
        var id_attr = "#" + $( element ).attr("id") + "1";
        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        $(id_attr).removeClass('glyphicon-remove').addClass('glyphicon-ok');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.length)
            error.insertAfter(element);
        else
            error.insertAfter(element);
    },
    messages: {
        username: {
            required: "El nombre de usuario es un campo requerido.",
            minlength: "El usuario debe tener entre 4 y 8 caractes.",
            maxlength: "El usuario debe tener entre 4 y 8 caractes.",
            regex: "El usuario solo puede tener letras o numeros."
        },
        email: {
            required: "El email es un campo requerido.",
            regex: "El formato es ejemplo@ejemplo.ej"
        },
        password: {
            required: "La contraseña es un campo requerido.",
            minlength: "La contraseña debe tener entre 6 y 15 caractes.",
            maxlength: "La contraseña debe tener entre 6 y 15 caractes.",
            regex: "Longitud de 6-15 caracteres, numeros o letras."
        },
        password2: {
            required: "La confirmación de la contraseña es un campo requerido.",
            minlength: "La contraseña debe tener entre 6 y 15 caractes.",
            maxlength: "La contraseña debe tener entre 6 y 15 caractes.",
            regex: "La contraseña solo puede tener letras o numeros."
        },
    }
});
