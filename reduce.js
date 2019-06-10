let arr = [1,2,3,4,1,2,5,9,9,3]


arr.reduce(function(acc, item){
	if(acc.indexOf(item) === -1 ){acc.push(item)}
	return acc
},[])


/*
Write a function called vowelCount which accepts a string and returns an object with the keys as 
the vowel and the values as the number of times the vowel appears in the string. 
This function should be case insensitive so a lowercase letter and uppercase letter should count

    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
"________________"

let str = 'I Am awesome and so are you'
let str2 ="abcdefghijklmnopqrstuvwxyz"
let vowels = "aeiou"

function vowelCount (str)
{
return str.toLowerCase().replace(/[\W]/gi,"").split("").reduce(function(acc,char){
	if(vowels.split("").indexOf(char) !== -1 ){
  	acc[char] ? acc[char]++ : acc[char] = 1    
  }
return acc
},{})
}

vowelCount(str2)



var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
console.log(extractValue(arr,'name')) // ['Elie', 'Tim', 'Matt', 'Colt']


function extractValue(arr, key){
return arr.reduce(function(acc,n){
   acc.push(n[key])
  return acc;
},[])

}








function isEven(val){return val % 2 === 0;}    
var arr = [1,2,3,4,5,6,7,8];


function partition(arr, cb){
	return arr.reduce(function(acc,n){
    cb(n) ? acc[0].push(n) : acc[1].push(n)  
  	return acc        
  },[[],[]])

}

console.log(partition(arr,isEven))
function isLongerThanThreeCharacters(val){
  return val.length > 3;
}

var names = ['Elie', 'Colt', 'Tim', 'Matt'];

console.log(partition(names,isLongerThanThreeCharacters))