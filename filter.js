
/*
Write a function called removeVowels which accepts a string and returns a new string 
with all of the vowels (both uppercased and lowercased) removed. 
Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/


console.log(removeVowels('Elie')) // ('l')
console.log(removeVowels('TIM')) // ('tm')
console.log(removeVowels('ZZZZZZ')) // ('zzzzzz')

function removeVowels(str){
    let vowels = "aeiou";
    return str.toLowerCase().split("").filter(function(char){
            return vowels.indexOf(char) === -1
    }).join("")


}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr){
    // find oddNumbers
    return arr.reduce(function(acc, val){
        if( val % 2 !== 0){
            acc.push(val *2);
        }
        return acc;
    },[])
}

function doubleOddNumbers2(arr){
    // find oddNumbers
    return arr.filter(function(val){
        return val % 2 !== 0;
    }).map(function(odd){
            return odd *2;        
    })

 }

console.log(doubleOddNumbers2([1,2,3,4,5])) // [2,6,10]
console.log(doubleOddNumbers2([4,4,4,4,4])) // []