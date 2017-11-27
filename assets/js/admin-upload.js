
document.getElementById('drop-zone').addEventListener("dragover", function(event){
    event.preventDefault();
    document.getElementById('drop-zone').classList.add('file-drag-over');
});

document.getElementById('drop-zone').addEventListener("dragleave", function(event){
    event.preventDefault();
    document.getElementById('drop-zone').classList.remove('file-drag-over');
});

document.getElementById('drop-zone').addEventListener("drop", function(event) {
    event.preventDefault();
    document.getElementById('drop-zone').classList.remove('file-drag-over');
    var files = event.target.files || (event.dataTransfer ? event.dataTransfer.files : event.originalEvent.dataTransfer.files);
    console.log(files);
    for (file of files){
        var para = document.createElement("p");
        var node = document.createTextNode(file.name);
        para.appendChild(node);
        document.getElementById('panel-body').appendChild(para);
    }
});