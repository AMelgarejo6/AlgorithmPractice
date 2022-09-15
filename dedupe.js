function dedupe(arr){
    var hash = {};
    var newArr = [];
    for (i = 0; i < arr.length; i++){
        if(!hash[arr[i]]){
            hash[arr[i]] = arr[i];
            newArr.push(hash[arr[i]]);
        }
    }
    return newArr;
}

arr1 = [1,1,1,3,4,4,4,7,8,8]
const expected1 = [1,3,4,7,8]

console.log(dedupe(arr1))

arr2 = [1,3,4,1,4,4,5,3,4]
const expected2 = [1,3,4,5]

console.log(dedupe(arr2))

arr3 = []
console.log(dedupe(arr3))

