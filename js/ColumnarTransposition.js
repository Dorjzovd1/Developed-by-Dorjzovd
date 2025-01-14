function encrypt(plaintext, key, pc)
{
    while(plaintext.length % key.length != 0) plaintext += pc.charAt(0);    
    var colLength = plaintext.length / key.length;
    var chars = "abcdefghijklmnopqrstuvwxyz"; 
    ciphertext = ""; k=0;
    for(i=0; i < key.length; i++){
        while(k<26){
            t = key.indexOf(chars.charAt(k));
            arrkw = key.split(""); arrkw[t] = "_"; key = arrkw.join("");
            if(t >= 0) break;
            else k++;
        }
        for(j=0; j < colLength; j++) ciphertext += plaintext.charAt(j*key.length + t);
    }
    return ciphertext;
}

function decrypt(ciphertext, key)
{
    klen = key.length;
    if(klen <= 1){ alert("Түлхүүр нь хамгийн багадаа 2 тэмдэгттэй байх ёстой"); return; }
    if(ciphertext.length % klen != 0){ alert("Шифрлэлтийн утга дутуу байна, үр дүн буруу байж магадгүй (түлхүүр үг буруу байж магадгүй)."); }
    // эхлээд түлхүүр үгийн уртаар нь текстийг багануудаар байрлуулна
    var cols = new Array(klen);
    var colLength = ciphertext.length / klen;
    for(i=0; i < klen; i++) cols[i] = ciphertext.substr(i*colLength,colLength);
    // одоо бид багануудыг зөв байрлалд нь тохируулна
    var newcols = new Array(klen);
    chars="abcdefghijklmnopqrstuvwxyz"; j=0;i=0;
    while(j<klen){
        t=key.indexOf(chars.charAt(i));        
        if(t >= 0){
            newcols[t] = cols[j++];
            arrkw = key.split(""); arrkw[t] = "_"; key = arrkw.join("");
        }else i++;         
    }    
    // одоо багануудыг мөрөөр нь уншина
    plaintext = "";
    for(i=0; i < colLength; i++){
        for(j=0; j < klen; j++) plaintext += newcols[j].charAt(i);
    }            
    return plaintext;    
}

function cipherButtonFunction(){
    var message = document.getElementById('inputMessage').value.toLowerCase().replace(/[^a-z]/g, "");
    var key = document.getElementById("enteredKey").value.toLowerCase().replace(/[^a-z]/g, "");  
    var pc = document.getElementById("enteredpc").value.toLowerCase().replace(/[^a-z]/g, "");
    if( message == "" || key=="" || pc==""){
        alert("Шифрлэх / тайлах мессеж болон түлхүүр болон пад үсгийг оруулна уу!");
        return;
      }
    var result = encrypt(message,key,pc);
    document.getElementById('result').value = result;
}

function decipherButtonFunction(){
    var message = document.getElementById('inputMessage').value.toLowerCase().replace(/[^a-z]/g, "");
    var key = document.getElementById("enteredKey").value.toLowerCase().replace(/[^a-z]/g, "");  
    if( message == "" || key==""){
        alert("Шифрлэх / тайлах мессеж болон түлхүүрийг оруулна уу!");
        return;
      }
    var result = decrypt(message,key);
    document.getElementById('result').value = result;
}
