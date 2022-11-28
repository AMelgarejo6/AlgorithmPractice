var digitCount = function(num) {
    let hashMap = {};
    for(let i = 0; i < num.length; i++){
        if(hashMap[num[i]]){
            hashMap[num[i]]++;
        }
        else{
            hashMap[num[i]] = 1;
        }
    }
    console.log(hashMap);
    for(let i = 0; i < num.length; i++){
        if(num[i] !== hashMap[i]){
            console.log(num[i], hashMap[i]);
            return false;
        }
    }
    return true;
}

console.log(digitCount("1210"));