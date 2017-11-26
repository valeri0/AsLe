var letter1 = 'assets/js/no.json';
var letter2 = 'assets/js/so.json';
var animation
var letters = [letter1, letter2];
var correct_answers = [0x4F8D, 0x30BF];

var index = 0;

window.onload = myFunction(letter1);

function myFunction(animation_json){
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
    })
}

function refresh(){
    document.getElementById('bm').innerHTML = ''
    myFunction(letters[index])
}

function MoveNextQuestion() {
    if (index < letters.length - 1) {
        index++;
        refresh();
    }
}

function MovePreviousQuestion() {
    if (index > 0) {
        index--;
        refresh();
    }
}

function testImage(){
    ctx = document.getElementById('myCanvas').getContext('2d');
    $('body').addClass('loading');

    Tesseract.recognize(ctx, {
        lang: 'jpn'
    })
   .then(function(result){
       $('body').removeClass('loading');
        if (result.text.charCodeAt(0) === correct_answers[index]) {
            $('#result').show().html('<h1>' + result.text + ' Correct</h1>')
        }else{
            $('#result').show().html('<h1>' + result.text + ' Incorrect</h1>')
        }
    })
    .catch(function(err){
        $('body').removeClass('loading');
        console.error(err)
    })
}