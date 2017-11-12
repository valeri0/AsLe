$(document).ready(function (e){
    
    
    // tab-ul cu detalii
    $("#button_details").click(function (x) {
        
        
        x.preventDefault();
        $('#tab2').fadeOut('fast',function(){
           $('#tab1').fadeIn('fast') 
        });
    });

    
    //tabul cu grafice
    $("#button_stats").click(function (x) {
        
        x.preventDefault();
         $('#tab2').removeClass('hidden');
        
        $('#tab1').fadeOut('fast',function(){
           $('#tab2').fadeIn('fast')
            
        drawChart();
        });
        
    });
    
    
    
    // redesenarea graficelor cand se schimba dimensiunile 
    $(window).resize(function(){
        
        drawChart();
        
    });


});