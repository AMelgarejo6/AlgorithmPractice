//find even digit numbers in given array
var findNumbers = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i].toString().length % 2 == 0){
            count++;
        }
    }
    
    return count;
};

console.log(findNumbers([22,2,33,3,55]));