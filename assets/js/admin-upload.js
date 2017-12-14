
document.getElementById('drop-zone').addEventListener("dragover", function(event){
    event.preventDefault();
    document.getElementById('drop-zone').classList.add('file-drag-over');
});

document.getElementById('drop-zone').addEventListener("dragleave", function(event){
    event.preventDefault();
    document.getElementById('drop-zone').classList.remove('file-drag-over');
});

function showFileInPage(event){
    var files = event.target.files || (event.dataTransfer ? event.dataTransfer.files : event.originalEvent.dataTransfer.files);
    for (file of files){
        var div = document.createElement("div");
        var para = document.createElement("p");
        var file_icon = document.createElement("i");
        var p_content = document.createTextNode(file.name);
        var x_icon = document.createElement('i');
        file_icon.setAttribute('class', 'fa fa-file-code-o');
        file_icon.setAttribute('aria-hiden', 'true');
        x_icon.setAttribute('class', 'fa fa-times');
        x_icon.setAttribute('aria-hiden', 'true');
        x_icon.setAttribute('onclick', 'remove_file(event)');
        para.appendChild(p_content);
        div.appendChild(file_icon);
        div.appendChild(para);
        div.appendChild(x_icon);
        div.classList.add('uploaded-files');
        document.getElementById('panel-body').appendChild(div);
    }
}


document.getElementById('drop-zone').addEventListener("drop", function(event) {
    event.preventDefault();
    document.getElementById('drop-zone').classList.remove('file-drag-over');
    showFileInPage(event);
});

function remove_file(event) {
    event.srcElement.parentNode.parentNode.removeChild(event.srcElement.parentNode);
}

