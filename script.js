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
  if(text !== ""){
    for(let i = 0; i < keys.length; i++){
      if(text.includes(keys[i][0])){
        text = text.replaceAll(keys[i][0], keys[i][1]);
      }
    }   
    encryptedMessage.value = text;
  } 
}

function encryptText (){
  if(!validationText() && message.value !== ""){
    encrypt();
    encryptedMessage.style.backgroundImage = "none";
  } else if (validationText()){
      swal({
        title: "Solo con minúsculas y sin acentos",
        text: "Intentalo nuevamente!",
        icon: "warning",
        timer: 2500
      })
    } else {
      swal({
        title: "Ingresa un mensaje para encriptar",
        icon: "warning",
        timer: 2500
      })
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
  if(!validationText() && message.value !== ""){
    decryptor();
    encryptedMessage.style.backgroundImage = "none";
  } else if (validationText()){
    swal({
      title: "Solo minúsculas y sin acentos",
      text: "Intentalo nuevamente!",
      icon: "warning",
      timer: 2500
    })
  } else {
    swal({
      title: "Ingresa un mensaje para desencriptar",
      icon: "warning",
      timer: 2500
    })
  }
}

btnDecryptor.onclick = decryptText;

function copy() {
  if(encryptedMessage.value){
    encryptedMessage.select();
    navigator.clipboard.writeText(encryptedMessage.value)
    swal({
      title: "Mensaje copiado exitosamente!",
      icon: "success",
      timer: 1500
    })
    encryptedMessage.value= "";
    message.value = "";
    encryptedMessage.style.backgroundImage = "url('/image.jpg')";
  } else {
    swal({
      title: "Ingrese un mensaje",
      text: "No hay texto para copiar",
      icon: "error",
      timer: 2500
    })
  }
}

btnCopy.onclick = copy;

function cleanText(){
  encryptedMessage.value= "";
  message.value = "";
  encryptedMessage.style.backgroundImage = "url('image.jpg')";
}

btnClean.onclick = cleanText;