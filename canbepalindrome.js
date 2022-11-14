let isPal = (str) => {
    let hash = {};
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(hash[str[i]]){
            hash[str[i]]++;
        }
        else{
            hash[str[i]] = 1;
        }
    }
    for(key in hash){
        if(hash[key] % 2 == 1){
            count++;
        }
    }
    if(count > 1){
        return false;
    }
    return true;
}

let str1 = "oranorangege";
console.log(isPal(str1));