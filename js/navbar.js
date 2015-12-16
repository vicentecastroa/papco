/**
 * Created by Vicente on 06-12-2015.
 */

(function ($) {
  $(document).ready(function(){

    $('#nav-boton1').css({"margin-top":"0px", "font-size":"20px"});
    $('#nav-boton2').css({"margin-top":"0px", "font-size":"20px"});
    $('#nav-boton3').css({"margin-top":"0px", "font-size":"20px"});
    $('.navbar').css("min-height","45px");
    $('.nav-content').css("height","50px");
    $('.navbar-brand').css("height","50px");
    $('#brand').attr('src', './images/logo_navbar_w.png');

	// Cambio de tamaño del navbar
	/*$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() >= 0) {
                $('.navbar').css("min-height","45px");
                $('.nav-content').css("height","50px");
                $('.navbar-brand').css("height","50px");
                $('#nav-boton1').css({"margin-top":"0px", "font-size":"16px"});
                $('#nav-boton2').css({"margin-top":"0px", "font-size":"16px"});
                $('#nav-boton3').css({"margin-top":"0px", "font-size":"16px"});
                $('#brand').attr('src', './images/logo_navbar_w.png');
                $('body').css("padding-top", "45px");
			} else {
				$('.navbar').css("min-height","90px");
                $('.nav-content').css("height","90px");
                $('.navbar-brand').css("height","90px");
                $('#nav-boton1').css({"margin-top":"40px", "font-size":"20px"});
                $('#nav-boton2').css({"margin-top":"40px", "font-size":"20px"});
                $('#nav-boton3').css({"margin-top":"40px", "font-size":"20px"});
                //$('#brand').attr('src', './images/logo_navbar_lg.png');
                $('body').css("padding-top", "90px");
			}
		});


	});*/


});
  }(jQuery));