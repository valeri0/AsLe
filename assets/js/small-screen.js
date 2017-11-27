$(document).ready(function (){
        if ($(window).width()<=650){
            rotate_phone();
        }
    });
    function rotate_phone() {
            document.getElementById('rt').classList.add('rotate');
    }
    $( window ).resize(function() {
        if ($(window).width() <= 650) {
            rotate_phone()
        }
});