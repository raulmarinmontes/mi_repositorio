

jQuery("document").ready(function ($) {
    var nav = $('.navbar-container');
    var navLogo = $('.nav-logo');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            navLogo.hide();
            nav.addClass("f-nav");

            if ($(window).width() <= 768)
                navLogo.show();

        } else {
            navLogo.hide();
            nav.removeClass("f-nav");
        }

    });

});