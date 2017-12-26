var letter1 = 'assets/js/no.json';
var letter2 = 'assets/js/so.json';
var animation;
var letters = [letter1, letter2];
var correct_answers = [0x306E, 0x305D];

var index = 0;

window.onload = InitAnimation(letter1);

var svg_success = `<svg class="svg-success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <circle class="success_circle" cx="26" cy="26" r="25" fill="none" />
  <path class="success_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
</svg>`;

var svg_fail = `<svg class="svg-fail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <circle class="fail_circle" cx="26" cy="26" r="25" fill="none" />
  <path class="fail_check" fill="none" d="M16 16 36 36 M36 16 16 36" />
</svg>`;

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