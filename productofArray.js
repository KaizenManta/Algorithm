// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr){
    if(arr.length <1){
        return 1;
        }

    return arr.shift() * productOfArray(arr);
}