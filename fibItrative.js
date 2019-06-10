function fibIterative(num){
    let result = [0,1];
    for (let i = 2; i<=num; i++){
        result.push(result[result.length-1] + result[result.length-2])
    }
return result;
}

console.log(fibIterative(10));