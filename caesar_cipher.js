function rot13(str) { // LBH QVQ VG!
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = "";
    
    for (let char of str){
        if(alphabet.includes(char)){
          
        if(alphabet.indexOf(char) +13 >=26) {
            result += alphabet[alphabet.indexOf(char) +13 -26]
        } else {
        result += alphabet[alphabet.indexOf(char) +13]    
        }
        
      } else {
          result += char;
      }
    
    }
    
    return result;
    
    }
    