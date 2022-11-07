var repeatedCharacter = function(s) {
    let hash = {};
    for(let i = 0; i < s.length; i++){
        if(hash[s[i]]){
            hash[s[i]]++
        } else {
            hash[s[i]] = 1;
        }
        if(hash[s[i]] == 2){
            return s[i];
        }
    }
};

console.log(repeatedCharacter("abccbaacz"));