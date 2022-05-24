const inputTexto = document.querySelector('.input-texto').value.toLowerCase();
const mensaje = document.querySelector('.texto-result');
const botonCopiar = document.getElementById('.copiar');


function botonEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
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

// function copiar(){
//     const copiarTexto = mensaje.value;
//     navigator.clipboard.writeText(copiarTexto.value)

//         if (copiarTexto){
//             alert("No hay texto que copiar");
//         } else {
//             alert("Texto copiado a portapapeles");
//         }
    
// }

// botonCopiar.addEventListener('click',function (_copiar) {
//         Event.preventDefault();
//         var mensajeEncriptado = mensaje.value;
//         navigator.clipboard.writeText(mensajeEncriptado);

//         copiarAlPortapapeles(mensajeEncriptado);
//   //  })

// function copiar(){
//     var content = document.getElementById('copiar').innerHTML;
//     navigator.clipboard.writeText(content)
//     .then(() => {
//         console.log("Texto copiado al portapapeles")
//         alert("Copiado")
//     })

// }

function copiar() {
    var contenido = document.querySelector("#texto-result");
    contenido.select();
    document.execCommand("copy");
    alert("!Se copió correctamente!");
  }

function copy() {

    var btnMensaje = document.getElementById("texto-result").innerHTML;
    document.getElementById("input-texto").value = btnMensaje;
    mensaje.value = "";
    navigator.clipboard.writeText(content)
    
    
    

}