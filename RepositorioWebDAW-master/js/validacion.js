/**
 *  Autor = Celia Alonso, Raul Marin, Ricardo Salido, David Gomez
 *  Fecha = 10/12/2015
 *  Licencia = GPL v3
 *  Versión = 1.0
 *  Descripción =  Comprobaciones y validaciones para el formulario de CONTACTO
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

/* FUNCION PARA HABILITAR EL CHECKBOX */
function enableTerms() {
    var array = new Array();
    array.push(document.getElementById("nombre").value.length);
    array.push(document.getElementById("apellido1").value.length);
    array.push(document.getElementById("apellido2").value.length);
    array.push(document.getElementById("email").value.length);
    array.push(document.getElementById("movil").value.length);
    array.push(document.getElementById("asunto_tipo").value.length);
    array.push(document.getElementById("asunto_tema").value.length);
    array.push(document.getElementById("mensaje").value.length);

    var camposRellenados = true;
    for(var i = 0; i < array.length; i++)
        if (Number(array[i]) <= 0) {
            camposRellenados = false;
            break;
        }

    if (camposRellenados)
        document.getElementById("condiciones").removeAttribute('disabled');
    else
        document.getElementById("condiciones").setAttribute('disabled','disabled');
}

/* FUNCION QUE HABILITA EL SELECT DEL TEMA */
function enableTema() {
    if (document.getElementById("asunto_tipo").value.length > 0)
        document.getElementById("asunto_tema").removeAttribute('disabled');
    else
        document.getElementById("asunto_tema").setAttribute('disabled','disabled');
}

/* FUNCION QUE HABILITA EL ENVIO DEL FORMULARIO */
function enableSubmit() {
    if (document.getElementById("condiciones").checked)
        document.getElementById("enviar_contacto").removeAttribute('disabled');
    else
        document.getElementById("enviar_contacto").setAttribute('disabled','disabled');

}

/* FUNCION QUE AÑADE EL ATRIBUTO 'regex' A LA LIBRERIA jquery.validate.js */
$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },
    "Comprueba el valor de este campo"
);

/* FUNCION DE VALIDACIÓN DE LA LIBRERIA jquery.validate.js */
$('#contactform').validate({
    rules: {
        nombre: {
            required: true,
            regex: /^([a-zA-ZÁÉÍÓÚáéíóú ]{1,30})+$/
        },
        apellido1: {
            required: true,
            regex: /^([a-zA-ZÁÉÍÓÚáéíóú ]{1,30})+$/
        },
        apellido2: {
            required: true,
            regex: /^([a-zA-ZÁÉÍÓÚáéíóú ]{1,30})+$/
        },
        email: {
            required: true,
            regex: /^(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w*)*)/
        },
        movil: {
            required: true,
            regex: /^([67])\d{8}$/
        },
        asunto_tipo: {
            required: true
        },
        asunto_tema: {
            required: true
        },
        mensaje: {
            required: true
        }
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
        nombre: {
            required: "El nombre es un campo requerido.",
            regex: "El nombre solo puede tener letras."
        },
        apellido1: {
            required: "El primer apellido es un campo requerido.",
            regex: "El primer apellido solo puede tener letras."
        },
        apellido2: {
            required: "El segundo apellido es un campo requerido.",
            regex: "El segundo apellido solo puede tener letras."
        },
        email: {
            required: "El email es un campo requerido.",
            regex: "El formato es ejemplo@ejemplo.ej"
        },
        movil: {
            required: "El movil es un campo requerido.",
            regex: "El movil tiene 9 numeros y empieza por 6 o 7."
        },
        asunto_tipo: {
            required: "El tipo de asunto es un campo requerido."
        },
        asunto_tema: {
            required: "El tema de asunto es un campo requerido."
        },
        mensaje: {
            required: "El mensaje es un campo requerido."
        }
    }
});