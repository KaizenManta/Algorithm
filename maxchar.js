function maxchar(str) {
    let max = 0;
    let mapChar = {};
    let maxChar = "";

    for (let char of str) {
        if (mapChar[char]){
                mapChar[char]++;
        } else {
            mapChar[char] = 1;
        }
    }

    for (let char in mapChar){
        if(mapChar[char] > max) {
            max= mapChar[char];
            maxChar = char
        }

    }
    console.log(maxChar)
    console.log(max);
    return mapChar;
}


maxchar("Hellvvvvvvo");