//funcion gen y sus atributos;
function gen(){

var divProgress = document.getElementById('progress');
var imagen = document.createElement('img');
var texto = document.createElement('span');;
 
imagen.setAttribute('src','https://giphy.com/gifs/LukAHGCMfxMbK/html5');
imagen.setAttribute('id','ajaxLoader');
 
texto.innerHTML = '<br/>EL proceso de carga puede durar varios minutos.<br/>';
 
//la siguiente condicion es para que no se agregue otra imagen si se vuelve a dar click en el boton;
 
if(document.getElementById('ajaxLoader') == undefined){
    divProgress.appendChild(imagen);
    divProgress.appendChild(texto);
    }
}