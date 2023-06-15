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
  } else {
    alert("Solo minusculas y sin acentos")
  }
}

btnDecryptor.onclick = decryptText;

function copy() {
  encryptedMessage.select();
  //navigator.clipboard.writeText(encryptedMessage.value)
  document.execCommand("cut");
  alert('Mensaje Copiado')
}

btnCopy.onclick = copy;