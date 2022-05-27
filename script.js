const inputTexto = document.querySelector('.input-texto');
const mensaje = document.querySelector('.texto-result');
const botonCopiar = document.getElementById('.copiar');
var figura = document.getElementById('.figura');
var contenedor = document.getElementById('.cont');
var ningunMensajeEncontrado = document.getElementById('.Nmensaje');
var textoDeseaDesencriptar = document.getElementById('.ingrese');



function botonEncriptar(){
   
    const textoEncriptado = encriptar(inputTexto.value);
        mensaje.value = textoEncriptado;
        textoEncriptado.value = "";
        document.getElementById('.cont').style.visibility = "hidden";
        figura.classList.remove;
    
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

 if(inputTexto.value.length > 0){
    figura.classList.add("invisible");
    mensaje.classList.remove("invisible");
     
    mensaje.textContent = input.value;
        input.value = "";
    };
 



  