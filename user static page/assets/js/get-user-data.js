// FISIER FACUT PENTRU GESTIONAREA DATELOR DIN BAZA DE DATE FIREBASE IMPREUNA CU PAGINA DE PREZENTARE HTML



// handler pentru butonul de logout
function logout(){
    firebase.auth().signOut().then(function(){

        window.location='../Start.hmtl';

    }).catch(function(error){
        console.log(error.message);
    });
}



firebase.auth().onAuthStateChanged(onAuthStateChange);


//functie ce verifica starea utilizatorului
function onAuthStateChange(user) {
    if (user) {

        // in caz ca este logat

        var email = user.email;
        var userId = user.uid;

        // vom face apel la baza de date pentru a prelua datele despre acesta

        firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {

            renderDbValuesToHtml(snapshot.val());

        });
    }
    else
        {
            // in cazul in care iese din aplicatie, va fi redirectionat la pagina de start

            window.location = '../Start.html';
        }
}


// functie ce randeaza informatiile din baza de date a utilizatorului curent in pagina HTML (folosind Mustache.js)

function renderDbValuesToHtml(jsonObj){

    console.log(jsonObj);

    // pentru tab-ul "Your details"

    var output = Mustache.render("<h5>First name: <span> {{first_name}}</span></h5>\n" +
        "                                                    <h5>Last name: <span> {{last_name}}</span></h5>\n" +
        "                                                    <h5>Country: <span> {{country}}</span></h5>\n" +
        "                                                    <h5>Registered at: <span> 1st Novemeber 2017</span></h5>\n"

        , jsonObj );

    document.getElementById('user-info').innerHTML = output;


    // Pentru numele de sub poza de profil din header
    document.getElementById('header-name').innerHTML = Mustache.render("{{first_name}} {{last_name}}",jsonObj);


    // pentru culoarea nivelului (kimono + titlu) vom apela functia din level-of-belt-action.js
    setLevelColorForKimonoAndTitle(jsonObj.stats.level.color);
}
