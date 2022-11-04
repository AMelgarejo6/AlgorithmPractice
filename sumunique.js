var sumOfUnique = function(nums) {
    let hash = {};
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        if(hash[nums[i]]){
            hash[nums[i]]++;
        } else{
            hash[nums[i]] = 1;
        }
    }

    for(key in hash){
        if(hash[key] == 1){
            sum += parseInt(key);
        }
    }
    return sum;
}

console.log(sumOfUnique([1,2,3,2]));