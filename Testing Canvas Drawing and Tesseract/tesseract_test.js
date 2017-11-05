function testImage(){
    ctx = document.getElementById('myCanvas').getContext('2d');
    
    console.log(ctx)
    
    Tesseract.recognize(ctx, {
        lang: 'jpn'
    })
   .then(function(result){
        console.log(result.text)
    })
    .catch(function(err){
        console.error(err)
    })
}