window.onload = function () {
    var config = {
        apiKey: "AIzaSyDfKkiegV-dCw0ach9PWJAIUJpDq7ZfQos",
        authDomain: "asle-a66d5.firebaseapp.com",
        databaseURL: "https://asle-a66d5.firebaseio.com",
        projectId: "asle-a66d5",
        storageBucket: "asle-a66d5.appspot.com",
        messagingSenderId: "744977998100"
    };
    firebase.initializeApp(config);

    var refFireBase = firebase.database().ref();
    refFireBase.on('value', gotData, errData);
}

function gotData(data) {
    document.getElementById('template').innerHTML = "";
    var db = data.val();
    keys = Object.keys(db.Lessons);
    iterator = 0;
    for (key of keys) {
        iterator += 1;
        var Letters = "";
        for (letter of db.Lessons[key].letters){
            Letters +=" \"" + letter +" \" ";
        }
        var obj, template;
        obj = {
            name: key,
            letters: Letters,
            lesson_number: iterator
        };

        template = document.getElementById('lesson-list').innerHTML;
        var output = Mustache.render(template, obj);
        document.getElementById('template').innerHTML += output;
    }



}

function errData(err) {
    console.log("Error!");
}

function remove_lesson(event){
    lesson_title = event.path[3].children[0].childNodes[3].innerText;
    firebase.database().ref("Lessons/"+lesson_title).remove();
    // event.path[3].parentNode.removeChild(event.path[3]);
}