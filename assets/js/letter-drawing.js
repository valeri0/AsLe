window.onload = myFunction()
function myFunction(){
        document.getElementById('svg').innerHTML = "";
        new Vivus('svg', {
            type: 'oneByOne',
            duration: 400,
            file: 'assets/img/letter.svg'
            },
            function(obj){
                setTimeout(function () {
                    obj.el.classList.add('finished');
                }, 500)
        });
    }