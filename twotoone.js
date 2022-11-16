// CAN STRING ONE BE MADE FROM STRING TWO

// Given two strings,
// return true if the first string can be built from the letters in the 2nd string

// Ignore case

// Input: "Hello World", "lloeh wordl"
// Output: true

// Input: "Hey", "hello"
// Output: false, second string is missing a "y"

// Input: "hello", "helo"
// Output: false, second string doesn't have enough "l" letters

const twoToOne = (str1, str2) => {
    let str1Hash = {};
    let str2Hash = {};
    for(let i = 0; i < str1.length; i++){
        if(str1Hash[str1[i]]){
            str1Hash[str1[i]]++;
        }
        else {
            str1Hash[str1[i]] = 1;
        }
    }
    for(let i = 0; i < str2.length; i++){
        if(str2Hash[str2[i]]){
            str2Hash[str2[i]]++;
        }
        else {
            str2Hash[str2[i]] = 1;
        }
    }
    for(key in str1Hash){
        if(str2Hash[key] < str1Hash[key]){
            return false;
        }
    }
    return true;
}

console.log(twoToOne("helllo world","lloeh wordl"));