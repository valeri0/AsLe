var animation;
var paths = [];
var json = [];
var correct_answers = [];
var pronunciation = [];

var index = 0;

window.onload = Init();



function Init() {
    var lesson = 'Lesson 3';

    firebase.database().ref('/Lessons/' + lesson).once('value').then(function (snapshot) {
        for (let i = 0; i < snapshot.val().letters.length; i++) {
            pronunciation.push(snapshot.val().letters[i]);
            correct_answers.push(parseInt(snapshot.val().hex[i], 16));
            paths.push(snapshot.val().paths[i]);
        }

        var storageRef = firebase.storage().ref();

        var count = 0;
        for (let path of paths) {
            storageRef.child(path).getDownloadURL().then(function (url) {
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.open('GET', url);
                xhr.onload = function (event) {
                    count++;
                    json.push(xhr.response);

                    if (count === paths.length){
                        setPronunciation(pronunciation[0]);
                        InitAnimation(json[0]);
                    }
                };
                xhr.send();
            }).catch(function (error) {
                console.error(error);
            });
        }

    }).catch(function (error) {
        console.error(error);
    });
}

function InitAnimation(animation_json) {
    animation = bodymovin.loadAnimation({
        container: document.getElementById('bm'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        rendererSettings: {
            progresiveLoad: true,
            scaleMode: 'noScale'
        },
        animationData: animation_json
    });
}

function setPronunciation(letter) {
    document.getElementById('pron').innerText = letter;
}

function refresh() {
    document.getElementById('bm').innerHTML = '';
    setPronunciation(pronunciation[index]);
    InitAnimation(json[index]);
    clearArea();
}

function MoveNextQuestion() {
    if (index < json.length - 1) {
        forgetCanvasStates();
        index++;
        refresh();
    }
}

function MovePreviousQuestion() {
    if (index > 0) {
        forgetCanvasStates();
        index--;
        refresh();
    }
}

function testImage() {
    ctx = document.getElementById('myCanvas').getContext('2d');
    document.body.classList.add('loading');

    Tesseract.recognize(ctx, {
        lang: 'jpn'
    })
        .then(function (result) {
            console.log(result);
            document.body.classList.remove('loading');
            if (result.text.charCodeAt(0) === correct_answers[index]) {
                document.getElementById('result').innerHTML = '<h1>' + result.text + ' Correct</h1>' + svg_success;
                openModal();
            } else {
                document.getElementById('result').innerHTML = '<h1>' + result.text + ' Wrong</h1>' + svg_fail;
                openModal();
            }
        })
        .catch(function (err) {
            document.body.classList.remove('loading');
            console.error(err)
        })
}