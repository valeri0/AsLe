function logout(){
    firebase.auth().signOut().then(function(){

        window.location='../Start.hmtl';

    }).catch(function(error){
        alert(error.message);
    });
}

firebase.auth().onAuthStateChanged(onAuthStateChange);


function onAuthStateChange(user) {
    if (user) {
        //User is signed in.
        var email = user.email;
        var userId = user.uid;

        firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {

            renderDbValuesToHtml(snapshot.val());

        });
    }
    else
        {
            window.location = '../Start.html';
        }
}


function renderDbValuesToHtml(jsonObj){

    console.log(jsonObj);
}
