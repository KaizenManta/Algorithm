function myReplace(str, before, after) {
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    
    if(lowerCase.includes(before[0])){
      after = after[0].toLowerCase() + after.slice(1)
    } else {
      after = after[0].toUpperCase() + after.slice(1);
     
    }
    return str.replace(before,after);
  }
  
  
  
  function myReplace(str, before, after) {
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";  
   lowerCase.includes(before[0]) ?     after = after[0].toLowerCase() + after.slice(1) :    after = after[0].toUpperCase() + after.slice(1);
    return str.replace(before,after);
  }
  
  