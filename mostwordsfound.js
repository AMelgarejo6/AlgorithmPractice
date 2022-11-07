var mostWordsFound = function(sentences) {
    let count = 0;
    
    for(let i = 0; i < sentences.length; i++){
        if(sentences[i].split(" ").length > count){
            count = sentences[i].split(" ").length;
        }
    }
    
    return count;
};

sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(mostWordsFound(sentences));