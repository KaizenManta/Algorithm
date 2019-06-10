// var noteText1 = 'this is a secret note for you from a secret admirer';
// var noteText2 = 'this is a note for you from a secret admirer';
// var magazineText1 = 'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice for you';


function harmless(magazine, note){
    let cleanMag = MapBuilder(magazine);
    let cleanNote = MapBuilder(note);

    if (Object.keys(cleanMag).length < Object.keys(cleanNote).length){
        return false
    }

    for (let char in cleanNote){
        // console.log(`${char}\n cleanNote : ${cleanNote[char]} \n cleanMag ${cleanMag[char]} \n\n` )

        if(!cleanMag[char] || cleanNote[char] > cleanMag[char]){            
            return false;
        }
    }

    return true;

}

function MapBuilder(str){
    
    let mapChar ={};
    for (let char of str.toLowerCase().replace(/[\W]/gi,"")){
            mapChar[char] ? mapChar[char]++ : mapChar[char] = 1;
        }
    return mapChar;    

    }

    var magazineText1 = 'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice for you';
    var noteText2 = 'this is a note for you from a secret admirer zzzzzzzzzzzzz';
    var noteText1 = 'this is a secret note for you from a secret admirer';
    console.log(harmless(magazineText1, noteText1))
