var lengthOfLastWord = function(s) {
    let count = 0;
    let index = s.length-1;
    while(s[index] == " "){
        index--;
    }
    while(s[index] !== " " && s[index]){
        count++;
        index--;
    }
    return count;
};

console.log(lengthOfLastWord("   fly me   to   the moon "))