/*
Good Morning, 

Week 3 day 5 algorithm is about counting items in an array and finding the maximum occurrence ( Mode). Use object to keep the occurrence.

Array: Mode

    - Create a function that, given an array of ints,
    - returns the int that occurs most frequently in the array.
    - What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
    - return empty array
*/

function frequency(arr){
    myHash = {};
    newArr = [];
    for(i = 0; i < arr.length; i++){
        if (!(myHash[arr[i]])){
            myHash[arr[i]] = 1;
        }
        else{
            myHash[arr[i]]++;
        }
    }
    highestFrequency = 0
    for(key in myHash){
        if (myHash[key] > highestFrequency)
        {
            highestFrequency = myHash[key];
        }
    }
    for(key in myHash){
        if(myHash[key] == highestFrequency){
            newArr.push(parseInt(key));
        }
    }
    originalArrCount = arr.length;
    if(newArr.length == originalArrCount && newArr.length != 1){
        return [];
    }
    return newArr;
}

const nums1 = [];
const expected1 = [];
console.log(frequency(nums1));

nums2 = [1];
const expected2 = [1];
console.log(frequency(nums2));

const nums3 = [5, 1, 4];
const expected3 = [];
console.log(frequency(nums3));

const nums4 = [5, 1, 4, 1];
const expected4 = [1];
console.log(frequency(nums4));

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
console.log(frequency(nums5));