//$(document).ready(function() {
//$(".btn-pref .btn").click(function () {
//    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
//    // $(".tab").addClass("active"); // instead of this do the below 
//    $(this).removeClass("btn-default").addClass("btn-primary");   
//});
//});
//


$(document).ready(function (e) {

    e.preventDefault;

    $("#button_details").click(function (x) {
        $('#tab2').fadeOut('fast',function(){
           $('#tab1').fadeIn('fast') 
        });
    });


    $("#button_stats").click(function (x) {
        
        $('#tab2').removeClass('hidden');
        
        $('#tab1').fadeOut('fast',function(){
           $('#tab2').fadeIn('fast') 
        });
    });


});
