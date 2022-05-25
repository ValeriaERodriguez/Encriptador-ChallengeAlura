const inputTexto = document.querySelector('.input-texto');
const mensaje = document.querySelector('.texto-result');
const botonCopiar = document.getElementById('.copiar');
var figura = document.getElementById('.figura');
var contenedor = document.getElementById('.cont');


function botonEncriptar(){
   
   
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;

    if (inputTexto.value == "") {
        figura.style.visibility = "visible";
        mensaje.style.visibility = "visible";
        botonCopiar.style.visibility = "hidden";
    } else {
        figura.style.visibility = "hidden";
        mensaje.style.visibility = "hidden";
        mensaje.style.visibility = "hidden";
        
        inputTexto.value = "";
        inputTexto.focus();
    }

    
}

function encriptar(StringParaEncriptar){
    
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    
    return StringParaEncriptar;
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado

}
function desencriptar(StringParaEncriptar){

    
    

    StringParaEncriptar=StringParaEncriptar.replaceAll("enter","e");
    StringParaEncriptar=StringParaEncriptar.replaceAll("imes","i");
    StringParaEncriptar=StringParaEncriptar.replaceAll("ai","a");
    StringParaEncriptar=StringParaEncriptar.replaceAll("ober","o");
    StringParaEncriptar=StringParaEncriptar.replaceAll("ufat","u");

    return StringParaEncriptar;

   

}


 function copiar(){
    const copiarTexto = mensaje.value;
    mensaje.value = "";
    navigator.clipboard.writeText(copiarTexto)

        copiarAlPortapapeles(copiarTexto);
        document.execCommand(commandId='copy');

        const boton3 = document.getElementById("btncopiar");
        boton3.onclick = copiar;
    
 }

 



function ocultarAdelante(){
    figura.classList.add("ocultar");
    h3.classList.add("ocultar");
    h4.classList.add("ocultar");
}

/*

function ocultarSalida(){ 
    figura.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    inputTexto.classList.add("ocultar");
    mensaje.removeAttribute("hidden");
  }
  function copiarAlPortapapeles(id_elemento) {

    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");
  
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  
    // Añade el campo a la página
    document.body.appendChild(aux);
  
    // Selecciona el contenido del campo
    aux.select();
  
    // Copia el texto seleccionado
    document.execCommand("copy");
  
    // Elimina el campo de la página
    document.body.removeChild(aux);
  
  }*/

  