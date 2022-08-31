//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
// function encode(str) {
//     myStr = "";
//     for(i = 0; i < str.length; i++){
//         temp = ""
//         count = 1;
//         while (str[i] == str[i+1])
//         {
//             i++;
//             count++;
//         }
//         temp = str[i] + count
//         myStr += temp
//     }
//     return myStr
// }

// console.log(encode("aaabbcccc"));
// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
function decode(str){
    myStr = "";
    for(i = 0; i < str.length; i++){
        num = 0;
        if (parseInt(str[i])){
            num += str[i];
            if (parseInt(str[i+1])){
                num += str[i+1];
            }
            for(j = 0; j < num; j++){
                myStr += str[i-1]
            }
        }
    }
    return myStr;
}

console.log(decode("a3b2c4"));
console.log(decode("t2h10j4"));