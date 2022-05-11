const inputTexto = document.querySelector('.input-texto');
const mensaje = document.querySelector('.texto-result');

function botonEncriptar(){
    const textoEncriptado = encriptar(inputText.value);
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