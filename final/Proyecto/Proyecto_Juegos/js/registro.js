

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
