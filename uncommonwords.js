var uncommonFromSentences = function(sen1, sen2) {
    let hash1 = {};
    let hash2 = {};
    let result = [];
    s1 = sen1.split(" ");
    s2 = sen2.split(" ");
    for(let i = 0; i < s1.length; i++){
        if(hash1[s1[i]]){
            hash1[s1[i]]++
        } else{
            hash1[s1[i]] = 1;
        }
    }
    for(let i = 0; i < s2.length; i++){
        if(hash2[s2[i]]){
            hash2[s2[i]]++
        } else{
            hash2[s2[i]] = 1;
        }
    }
    for(key in hash1){
        if(!hash2[key] && hash1[key] == 1){
            result.push(key);
        }
    }
    for(key in hash2){
        if(!hash1[key] && hash2[key] == 1){
            result.push(key);
        }
    }
    console.log(hash1);
    console.log(hash2);
    return result;
};

console.log(uncommonFromSentences("this apple is sweet",
"this apple is sour"))