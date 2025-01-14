function encrypt(plaintext)
{ 
    return btoa(plaintext);
}

function decrypt(ciphertext)
{
    return atob(ciphertext);
}

function cipherButtonFunction(){
    var message = document.getElementById("inputMessage").value; 

    if(message == ""){
      alert("Шифрийг тайлахын тулд текст оруулна уу");
      return;
    }
    
    var result = encrypt(message);
    document.getElementById("result").value = result;
  
  }
  
  // gets the message and key entered by user and deciphers it
  function decipherButtonFunction(){
    var message = document.getElementById("inputMessage").value;
  
    if(message == ""){
      alert("Шифрийг тайлахын тулд текст оруулна уу");
      return;
    }
  
    var result = decrypt(message);
    document.getElementById("result").value = result;
  }