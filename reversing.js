/* 
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/
function reverseWords(str) { /* .split approach */
    myArr = str.split(" ");
    newArr = [];
    for (i = 0; i < myArr.length; i++){
        if (i != 0){
            newArr += " "
        }
        for (j = myArr[i].length-1; j >= 0; j--){
            newArr += myArr[i][j];
        }
    }
    return newArr;
}

function reverseWords(str) { /* Iterative approach */
    bigStr = ""
    for (i = 0; i < str.length; i++){
        singleWord = "";
        while(str[i] != " " && i < str.length){
            singleWord = str[i]+singleWord;
            i++;
        }
        bigStr = bigStr + " " + singleWord;
    }
    return bigStr;
}

var str1 = "hello";
var expected1 = "olleh";
console.log(reverseWords(str1));

var str2 = "hello world";
var expected2 = "olleh dlrow";
console.log(reverseWords(str2));

var str3 = "abc def ghi";
var expected3 = "cba fed ihg";
console.log(reverseWords(str3));

