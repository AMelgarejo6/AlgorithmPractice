//return an array of all elements that appear in both arrays, no duplicates
function intersectArray(arr1, arr2) {
    let result = [];
    let hashmap = {};

    for(let i=0; i<arr1.length; i++){
        if(hashmap[arr1[i]]){
            hashmap[arr1[i]]+= 1;
        }else{
            hashmap[arr1[i]] = 1;
        }
    }
    console.log(hashmap);
    for(let j=0; j<arr2.length; j++){
        if(hashmap[arr2[j]]){
            result.push(arr2[j]);
            hashmap[arr2[j]];
            hashmap[arr2[j]] = 0;
        }
    }
    return result;
}

myArray = [1,1,3,5,8];
myArray2 = [1,5,8];

console.log(intersectArray(myArray, myArray2));