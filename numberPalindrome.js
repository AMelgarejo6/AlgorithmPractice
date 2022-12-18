var numberPalindrome = function(arr) {
    let flag = true;
    let half = [];
    let halfReverse = [];
    let string = String(arr)[0];
    if(string == "-"){
        return false;
    }
    for(let i = 0; i < arr.length/2; i++){
        half.push(arr[i]);
    }
    console.log(half);
    if(arr.length % 2 == 0){
        for(let j = arr.length-1; j >= arr.length/2; j--){
            halfReverse.push(arr[j]);
        }
    }else{
        for(let j = arr.length-1; j >= arr.length/2-1; j--){
            halfReverse.push(arr[j]);
        }
    }
    console.log(halfReverse);
    for(let k = 0; k < half.length; k++){
        if(!(half[k] == halfReverse[k])){
            return false;
        }
    }
    return flag;
};

console.log(numberPalindrome(10));
