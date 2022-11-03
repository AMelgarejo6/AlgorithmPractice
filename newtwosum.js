const twoSum = function(nums, target) {
    const hash = {};

    for(let i = 0; i < nums.length; i++){
        const n = nums[i];
        if(hash[target-n] !== undefined){
            return [hash[target-n], i];
        }
        hash[n] = i;
    }
    return [];
}
console.log(twoSum([3,2,4], 6));