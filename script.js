//comprobar que la API esté soportada por el navegador 
if (window.File && window.FileReader && window.FileList) {
    console.log('Todas las APIs soportadas');
} else {
    alert('La API de FILE no es soportada en este navegador.');
}

function handleFile(evt) {
    let files = evt.target.files
    for (let i=0, f; f = files[i]; i++){
        let reader = new FileReader();
        reader.onload = (function(theFile){
            return function (e) {
                let span = document.createElement('span');
                span.innerHTML = ['<video id="video" src="',e.target.result,,'"', escape(theFile.name), 
                '"/>'].join('');
                document.getElementById("list").insertBefore(span,null)
            }
        })(f);
        reader.readAsDataURL(f)
        
    }
}
