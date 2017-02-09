$(document).ready(function () {

    if (!window.localStorage.login) {
        $(document).trigger('onLogin');
        return;
    }
// se almacenan en una variable los datos del formulario de login.html
    var loginData = JSON.parse(window.localStorage.login);
// Función para saber si los datos del usuario existen en la base de datos, si existen, en la respuesta de la peticion se meuestra el correspondiente mensaje
    $.ajax({
        url: 'php/loginUsuarios.php',
        method: 'post',
        data: loginData,
        dataType: 'json',
        success: function (response) {
            if (response[0] == 200) {
                var $botones = $('#botones');
                $botones.html('<p>Bienvenido, ' + loginData.username + '. <a href="#" id="btn-desc" class="btn-logout">Desconectarse</a></p>');
                $('.btn-logout', $botones).on('click', function () {
                    window.localStorage.login = JSON.stringify({});
                    window.location.href = window.location.href;
                });
            }
            $(document).trigger('onLogin');
        }
    });
});