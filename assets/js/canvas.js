var mousePressed = false;
var lastX, lastY;
var ctx;

document.addEventListener('DOMContentLoaded', function() {
   InitCanvas();
}, false);

function InitCanvas() {
    ctx = document.getElementById('myCanvas').getContext("2d");

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
        mousePressed = false;
    });
    $('#myCanvas').mouseleave(function (e) {
        mousePressed = false;
    });

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
	
function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}