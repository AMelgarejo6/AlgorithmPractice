var searchRange = function(nums, target) {
    let result = [];
    let start = -1;
    let end = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            start = i;
        }
        while(nums[i] == target){
            i++;
            end = i-1;
        }
    }
    return [start, end];
};

nums = [5,7,7,8,8,10];
target = 8;

console.log(searchRange(nums, target));