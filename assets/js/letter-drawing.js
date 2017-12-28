var letter1 = 'assets/js/no.json';
var letter2 = 'assets/js/so.json';
var animation;
var letters = [letter1, letter2];
var correct_answers = [0x306E, 0x305D];

var index = 0;

window.onload = InitAnimation(letter1);



function InitAnimation(animation_json){
    animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    rendererSettings: {
        progresiveLoad: true,
        scaleMode: 'noScale'
    },
    path: animation_json
    });
}

function refresh(){
    document.getElementById('bm').innerHTML = '';
    InitAnimation(letters[index]);
    clearArea();
}

function MoveNextQuestion() {
    if (index < letters.length - 1) {
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

function testImage(){
    ctx = document.getElementById('myCanvas').getContext('2d');
    document.body.classList.add('loading');

    Tesseract.recognize(ctx, {
        lang: 'jpn'
    })
   .then(function(result){
       console.log(result);
       document.body.classList.remove('loading');
        if (result.text.charCodeAt(0) === correct_answers[index]) {
            document.getElementById('result').innerHTML = '<h1>' + result.text + ' Correct</h1>' + svg_success;
            openModal();
        }else{
            document.getElementById('result').innerHTML = '<h1>' + result.text + ' Wrong</h1>' + svg_fail;
            openModal();
        }
    })
    .catch(function(err){
        document.body.classList.remove('loading');
        console.error(err)
    })
}