// Given a string,
// return array ...
// where each element is a string 
// representing a different anagram
//  (a different sequence of the letters in that string).
//   Ok to use built in methods

function listOfAnagrams(str, solutions = [], partial = "") {
    if (!str) {
        solutions.push(partial);
    }

    for (var i = 0; i < str.length; i++) {
        var leftSlice = str.slice(0, i);
        var rightSlice = str.slice(i + 1); // skips current letter
        listOfAnagrams(leftSlice + rightSlice, solutions, partial + str[i]);
    }
    return solutions;
}

console.log(listOfAnagrams("dogi", [], ""))