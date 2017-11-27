$(document).ready(function(){
   
    $('#register_here_from_menu').click(function(){
       
        register_function();
 
    });
    
    $('#register_here').click(function(){
        register_function();
        
    });
    
    $('#login_here').click(function(){
       login_function(); 
    });
    
    $('#login_here_from_menu').click(function(){
       login_function(); 
    });
    
    
    function register_function(){
        $('#login_form').fadeOut('fast',function(){
                $('#register_form').css('visibility','visible').hide().fadeIn();

           }); 
        

    }
    
    function login_function(){
        $('#register_form').fadeOut('fast',function(){
                $('#login_form').css('visibility','visible').hide().fadeIn().removeClass('hidden');

           }); 
    }
});

