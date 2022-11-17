var uniqueOccurrences = function(arr) {
    let hash = {};
    let newHash = {};
    for(let i = 0; i < arr.length; i++){
        if(hash[arr[i]]){
            hash[arr[i]]++;
        }else{
            hash[arr[i]] = 1;
        }
    }
    for(key in hash){
        if(newHash[hash[key]]){
            return false;
        } else{
            newHash[hash[key]] = hash[key];
        }
    }
    return true;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));