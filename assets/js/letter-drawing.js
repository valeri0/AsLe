var letter1 = 'assets/img/letter.svg';
var letter2 = 'assets/img/letter2.svg';

var letters = [letter1, letter2];
var correct_answers = [0x4F8D, 0x30BF];

var index = 0;

window.onload = myFunction(letter1);

function myFunction(svg_path){
        document.getElementById('svg').innerHTML = "";
        new Vivus('svg', {
            type: 'oneByOne',
            duration: 400,
            file: svg_path
            },
            function(obj){
                setTimeout(function () {
                    obj.el.classList.add('finished');
                }, 500)
        });
    }

function refresh(){
    myFunction(letters[index])
}

function MoveNextQuestion() {
    if (index < letters.length - 1) {
        index++;
        myFunction(letters[index])
    }
}

function MovePreviousQuestion() {
    if (index > 0) {
        index--;
        myFunction(letters[index])
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