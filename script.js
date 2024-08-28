const textArea = document.querySelector(".text-area");
const msj = document.querySelector (".msj");

function botonEncriptar(){
    const textEncriptado = encriptar(textArea.value);
    msj.value = textEncriptado;
}

function encriptar(){
    let codigo = [["e", "enter"]], ["i", "imes"]; ["a", "ai"], ["o","ober"], ["u", "ufat"];
    strinEncriptada = strinEncriptada.tolowerCase();

    for(let i = 0; i < codigo.length; i++){
        if(stringEncriptada.includes(codigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(codigo[i][0],codigo[i][1]);
        }
    }
    return stringEncriptada;
}