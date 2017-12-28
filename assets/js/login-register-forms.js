var login_form = document.getElementById("login_form");
var register_form = document.getElementById("register_form");

    function switchToLogin() {

        register_form.classList.add('hidden');
        changeBetweenForms(register_form,login_form,fadeIn);
        login_form.classList.remove('hidden');
    }

    function switchToRegister(){
        login_form.classList.add('hidden');
        changeBetweenForms(login_form,register_form,fadeIn);
        register_form.classList.remove('hidden');


    }

function changeBetweenForms(form_to_disappear,form_to_appear,callback){
    
    fadeOut(form_to_disappear);
    callback(form_to_appear);

    
}


// fade out


function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};
