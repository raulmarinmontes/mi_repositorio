/**
 *  Autor = Celia Alonso, Raul Marin, Ricardo Salido, David Gomez
 *  Fecha = 1/12/2015
 *  Licencia = GPL v3
 *  Versión = 1.0
 *  Descripción = Script Navbar
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