$(document).ready(function () {

    // path50 path54 path58 path62

    // title_belt_color


    $('#test_button_belt_level').click(function () {


        if ("rgb(0, 1, 186)" == $('#title_belt_color').css('color')) {

            $('#title_belt_color').css('color', 'rgb(215, 218, 0)');
            $('#title_belt_color').text('galben');

            $('#path50').css("fill", "rgb(215, 218, 0)");
            $('#path54').css("fill", "rgb(215, 218, 0");
            $('#path58').css("fill", "rgb(215, 218, 0");
            $('#path62').css("fill", "rgb(215, 218, 0");


        }

    });

});
