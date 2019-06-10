function isPalindrom(str){
    // keep only words
    result = "";
    for (let char of str.replace(/[\W]/g,"").toLowerCase()){
        result = char + result;
    
    }
    console.log(result);
    return result === str.replace(/[\W]/g,"").toLowerCase();

}

isPalindrom("madam I'm Adam");
