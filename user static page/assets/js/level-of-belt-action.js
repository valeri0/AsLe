$(document).ready(function () {

    // path50 path54 path58 path62

    // title_belt_color


    $('#test_button_belt_level').click(function () {


        if ("rgb(0, 0, 153)" == $('#title_belt_color').css('color')) {

            $('#title_belt_color').css('color', 'rgb(218, 165, 32)');
            $('#title_belt_color').text('yellow');

            $('#path50').css("fill", "rgb(218, 165, 32)");
            $('#path54').css("fill", "rgb(218, 165, 32)");
            $('#path58').css("fill", "rgb(218, 165, 32)");
            $('#path62').css("fill", "rgb(218, 165, 32)");


        }

    });
    
    
    $('[data-toggle="tooltip"]').tooltip();

});
