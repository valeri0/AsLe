/* PENTRU SCHIMBAREA FORMULARULUI REGISTER/LOGIN */

var login_form = document.getElementById("login_form");
var register_form = document.getElementById("register_form");

function switchToLogin() {

    register_form.classList.add('hidden');
    changeBetweenForms(register_form, login_form, fadeIn);
    login_form.classList.remove('hidden');
}

function switchToRegister() {
    login_form.classList.add('hidden');
    changeBetweenForms(login_form, register_form, fadeIn);
    register_form.classList.remove('hidden');


}

function changeBetweenForms(form_to_disappear, form_to_appear, callback) {

    fadeOut(form_to_disappear);
    callback(form_to_appear);


}


function fadeOut(el) {
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
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


/* --------------------------------------------------------- */








//firebase.auth().onAuthStateChanged(onAuthStateChange);







/* REGISTER */

var rf = document.getElementById('rf');

rf.addEventListener('submit', function (e) {

    e.preventDefault();

    var first_name = document.getElementById("r_first_name").value;
    var last_name = document.getElementById("r_last_name").value;
    var country = document.getElementById('r_country').value;
    var email = document.getElementById('r_email').value;
    var password = document.getElementById('r_password').value;
    var confirm_password = document.getElementById('r_password_confirm').value;
    
    createUser(first_name,last_name,country,email,password);
    
});

var inCreatingUser = false;

var userData = {};

function createUser(first_name, last_name, country, email, password) {

    inCreatingUser = true;

    userData = {

        first_name: first_name,
        
        last_name: last_name,
        
        country: country,

        email: email,
        
        role: "user"

    };

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {

        // Handle Errors here.

        var errorCode = error.code;

        var errorMessage = error.message;

        alert(errorMessage)

    });

}

/* --------------------------------------------------------- */








/* LOGIN */

var lf = document.getElementById('lf');

lf.addEventListener('submit', function (e) {



});

function login() {
    alert('login');
}


/* --------------------------------------------------------- */
