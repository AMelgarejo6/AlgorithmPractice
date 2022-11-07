var firstUniqChar = function(s) {
    let hashMap = {};
    for(let i = 0; i < s.length; i++){
        if(hashMap[s[i]]){
            hashMap[s[i]]++;
        } else {
            hashMap[s[i]] = 1;
        }
    }
    console.log(hashMap);
    for(let i = 0; i < s.length; i++){
        if(hashMap[s[i]] == 1){
            return i;
        }
    }
    return -1;
};

let s = "loveleetcode";

console.log(firstUniqChar(s));