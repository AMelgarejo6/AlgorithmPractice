var isAnagram = function(s, t) {
    let hash = {};
    let newHash = {};
    for(let i = 0; i < s.length; i++){
        if(hash[s[i]]){
            hash[s[i]]++
        }else{
            hash[s[i]] = 1;
        }
    }
    for(let i = 0; i < t.length; i++){
        if(newHash[t[i]]){
            newHash[t[i]]++
        }else{
            newHash[t[i]] = 1;
        }
    }
    let arr1 = Object.keys(hash);
    let arr2 = Object.keys(newHash);
    if(arr1.length != arr2.length){
        return false;
    }
    for(key in hash){
        if(hash[key] != newHash[key]){
            return false;
        }
    }
    return true;
};

console.log(isAnagram("anagram",
"nagaram"));