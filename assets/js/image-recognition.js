function testImage(){
    ctx = document.getElementById('myCanvas').getContext('2d');
    
    Tesseract.recognize(ctx, {
        lang: 'jpn'
    })
   .then(function(result){
        $('#result').show().html('<h1>' + result.text + '</h1>')
    })
    .catch(function(err){
        console.error(err)
    })
}