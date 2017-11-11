// var question1 = `<div class="row">
//             <div class="col-sm-12 col-xs-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2" align="center">
//                 <canvas id="myCanvas" class="img-responsive" width="600" height="400"></canvas>
//             </div>
//             <button class="btn btn-default" style="margin-top: 200px" onclick="javascript:MoveNextQuestion();return false;">Next</button>
//         </div>
//
//         <br /><br />
//
//         <div class="row">
//             <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" align="center">
//                 <button class="btn btn-default" onclick="javascript:clearArea();return false;">Clear Area</button>
//                 <button class="btn btn-default" onclick="javascript:testImage();return false;">Test</button>
//             </div>
//         </div>`

var question2 = `<div class="row">
            <div class="col-md-1 col-lg-1">
                <button class="btn btn-default" onclick="javascript:MovePreviousQuestion();return false;">Previous</button>
            </div>
            <div class="col-sm-12 col-xs-12 col-md-10 col-lg-10" align="center">
                <h1>Question2</h1>
            </div>
            <div class="col-md-1 col-lg-1">
                <button class="btn btn-default" onclick="javascript:MoveNextQuestion();return false;">Next</button>
            </div>
        </div>`

var question3 = `<div class="row">
            <div class="col-md-1 col-lg-1">
                <button class="btn btn-default" onclick="javascript:MovePreviousQuestion();return false;">Previous</button>
            </div>
            <div class="col-sm-12 col-xs-12 col-md-10 col-lg-10" align="center">
                <h1>Question3</h1>
            </div>
            <div class="col-md-1 col-lg-1">
                <button class="btn btn-default" onclick="javascript:MoveNextQuestion();return false;">Next</button>
            </div>
        </div>`

var question4 = `<div class="row">
            <div class="col-md-1 col-lg-1">
                <button class="btn btn-default" onclick="javascript:MovePreviousQuestion();return false;">Previous</button>
            </div>
            <div class="col-sm-12 col-xs-12 col-md-10 col-lg-10" align="center">
                <h1>Question4</h1>
            </div>
            <div class="col-md-1 col-lg-1">
                <button class="btn btn-default" onclick="javascript:MoveNextQuestion();return false;">Next</button>
            </div>
        </div>`

var question5 = `<div class="row">
            <div class="col-md-1 col-lg-1">
                <button class="btn btn-default" onclick="javascript:MovePreviousQuestion();return false;">Previous</button>
            </div>
            <div class="col-sm-12 col-xs-12 col-md-10 col-lg-10" align="center">
                <h1>Question5</h1>
            </div>
            <div class="col-md-1 col-lg-1">
                <button class="btn btn-default" onclick="javascript:MoveNextQuestion();return false;">Next</button>
            </div>
        </div>`

var questions = [question1, question2, question3, question4, question5]
index = 0

function InitQuestions() {
    $('#question-container').show().html(questions[index])
}

function MoveNextQuestion() {
    if (index < questions.length - 1) {
        index++
        $('#question-container').show().html(questions[index])
    }

    if (index == 0) {
        InitThis()
    }
}

function MovePreviousQuestion() {
    if (index > 0) {
        index--
        $('#question-container').show().html(questions[index])
    }
    
    if (index == 0) {
        InitThis()
    }
}
