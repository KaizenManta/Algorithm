function reverse(str){
    if(str.length <1){
        return ""
    }
    return str.slice(1) + str[0];
}
console.log(reverse("awesome"));