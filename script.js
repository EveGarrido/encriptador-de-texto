// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// No deben ser utilizados letras con acentos ni caracteres especiales

// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

const message = document.querySelector('.message');
const encryptedMessage = document.querySelector('.encrypted-message');
const btnEncrypter = document.querySelector('.btn-encrypter');
const btnDecryptor = document.querySelector('.btn-decryptor');
const btnCopy = document.querySelector('.btn-copy');
const btnClean = document.querySelector('.btn-clean');


const keys = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
message.value = "";
encryptedMessage.value = "";


function validationText (){
  return message.value.match(/[A-Z^$.*+¡/¿?()[\]{}|\u00C0-\u017F]/g);
}

function encrypt (){
  let text = message.value;
    for(let i = 0; i < keys.length; i++){
      if(text.includes(keys[i][0])){
        text = text.replaceAll(keys[i][0], keys[i][1]);
      }
    }
    encryptedMessage.value = text;
}

function encryptText (){
  if(!validationText()){
    encrypt();
    encryptedMessage.style.backgroundImage = "none";
  } else {
    alert("Solo minusculas y sin acentos")
  }
}

btnEncrypter.onclick = encryptText;

function decryptor (){
  let text = message.value;
    for(let i = 0; i < keys.length; i++){
      if(text.includes(keys[i][1])){
        text = text.replaceAll(keys[i][1], keys[i][0]);
      }
    }
    encryptedMessage.value = text;
}

function decryptText (){
  if(!validationText()){
    decryptor();
    encryptedMessage.style.backgroundImage = "none";
  } else {
    alert("Solo minusculas y sin acentos")
  }
}

btnDecryptor.onclick = decryptText;

function copy() {
  if(encryptedMessage.value){
    encryptedMessage.select();
    navigator.clipboard.writeText(encryptedMessage.value)
    alert('Mensaje Copiado');
    encryptedMessage.value= "";
    message.value = "";
    encryptedMessage.style.backgroundImage = "url('/image.jpg')";
  } else {
    alert("No hay texto para copiar")
  }
}

btnCopy.onclick = copy;

function cleanText(){
  encryptedMessage.value= "";
  message.value = "";
  encryptedMessage.style.backgroundImage = "url('/image.jpg')";
}

btnClean.onclick = cleanText;