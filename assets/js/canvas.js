var mousePressed = false;
var lastX, lastY;
var ctx;
var states = [];
var state_index = 0;

document.addEventListener('DOMContentLoaded', function() {
   InitCanvas();
   addCanvasState();
   $('[data-toggle="tooltip"]').tooltip();
}, false);

function addCanvasState(){
    state_index++;
    states.push(document.getElementById('myCanvas').toDataURL());
}

function undo(){
    if (state_index > 0){
        state_index--;
        var canvasImage = new Image();
        canvasImage.src = states[state_index];
        canvasImage.onload = function () {
            clearArea();
            ctx.drawImage(canvasImage, 0, 0);
        }
    }
}

function redo(){
    if (state_index < states.length - 1){
        state_index++;
        var canvasImage = new Image();
        canvasImage.src = states[state_index];
        canvasImage.onload = function () {
            clearArea();
            ctx.drawImage(canvasImage, 0, 0);
        }
    }
}

function InitCanvas() {
    ctx = document.getElementById('myCanvas').getContext("2d");

    /* Mouse Input */
    $('#myCanvas').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#myCanvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#myCanvas').mouseup(function (e) {
        if (mousePressed){
            addCanvasState();
        }
        mousePressed = false;
    });

    $('#myCanvas').mouseleave(function (e) {
        if (mousePressed){
            addCanvasState();
        }
        mousePressed = false;
    });

    /* Touch Input */
    $('#myCanvas').on('touchstart', function (e) {
        mousePressed = true;
        Draw(e.originalEvent.touches[0].pageX - $(this).offset().left, e.originalEvent.touches[0].pageY - $(this).offset().top, false);
    });

    $('#myCanvas').on('touchmove', function (e) {
        e.preventDefault();
        if (mousePressed) {
            Draw(e.originalEvent.touches[0].pageX - $(this).offset().left, e.originalEvent.touches[0].pageY - $(this).offset().top, true);
        }
    });

    $('#myCanvas').on('touchend', function (e) {
        mousePressed = false;
    });

    $('#myCanvas').on('touchcancel', function (e) {
        mousePressed = false;
    });
}

function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 9;
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x; lastY = y;
}

function forgetCanvasStates(){
    states = [];
    state_index = 0;
}

function clearArea() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}