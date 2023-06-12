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

const keys = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']];
message.value = "";
encryptedMessage.value = "";

// Debe funcionar solo con letras minúsculas
//match??

function encrypt (){
  let text = message.value;
  let newText;
  for(let i = 0; i < keys.length; i++){
    if(text.includes(keys[i][0])){
      newText = text.replaceAll(keys[i][0], keys[i][1]);
      encryptedMessage.value = newText;
    }
    text = newText;
    // console.log(newText);
  }
  return newText;
}

btnEncrypter.onclick = encrypt;

