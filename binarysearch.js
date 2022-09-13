//Problem 1: Given a sorted array of n non-repeating elements, write a function to search a given element x in and return the index of x in the array.

//Examples:

function binarySearch(arr, target){ // unsure if done correctly
    first = 0;
    last = arr.length-1;
    mid = Math.floor(arr.length/2);
    console.log(first,mid,last)
    if(arr[mid] == target){
        return mid;
    }
    while(arr[mid] <= target){
        if(arr[mid] == target){
            return mid;
        }
        first = mid;
        mid++
        if (mid >= last){
            return -1;
        }
    }
    while(arr[mid] >= target){
        if(arr[mid] == target){
            return mid;
        }
        last = mid;
        mid--;
        if (mid <= first){
            return -1
        }
    }
}



var input1 = [1, 2, 4, 5, 6, 8, 9, 12, 13, 14]
var target1 = 4
console.log(binarySearch(input1, target1))
//the index for 4 is 2, so the expected output will be 2

var input2 = [1, 2, 4, 5, 6, 8, 9, 12, 13, 14]
var target2 = 10
console.log(binarySearch(input2, target2))
//there is no 10 in the input, so the expected output will be -1


//Prolem 2: Solve binary search for sorted array of repeating elements. 

//Return the last the index of last occurrence of the

//Examples:

// var input3 = [2, 2, 2, 2, 2, 2, 4, 5, 7, 8, 8, 8, 8, 9] 
// var target1 = 7
//expected output: 8

// var input4 = [2, 2, 2, 2, 2, 2, 4, 5, 7, 8, 8, 8, 8, 9]
// var target1 = 3
//The index for the last 2 is 5, so the expected result is 5 