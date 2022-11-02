//given an array of length n where the greatest number is no bigger than n return the missing number

const missingNo = (arr) => {
    let hash = {};
    let missing = 0;
    for(let i = 0; i < arr.length; i++){
        hash[arr[i]] = 1;
    }
    for(let j = 0; j < arr.length+1; j++){
        if(!(hash[j])){
            missing = j;
        }
    }
    return missing;
}

console.log(missingNo([0,1,2,3,4,5,6,7,8,9,10,13]));