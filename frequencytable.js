/* 
Given an array of strings
return the number of times each string occurs (a frequency / hash table)
*/
function makeFrequencyTable(arr) {
    myHash = {};
    for(var i = 0; i < arr.length; i++){
        key = arr[i];
        if(!(key in myHash)){
            myHash[key] = 0
        }
        myHash[key]++;
    }
    return myHash;
}

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};
console.log(makeFrequencyTable(arr1));

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};
console.log(makeFrequencyTable(arr2));

const arr3 = [];
const expected3 = {};
console.log(makeFrequencyTable(arr3));

const arr4 = ["r","r","a","q","h","a","h","a","h","a","1"," ","r"];
const expected4 = {
    "r":3,
    "a":4,
    "q":1,
    "h":3,
    "1":1,
    " ":1
};
console.log(makeFrequencyTable(arr4));

