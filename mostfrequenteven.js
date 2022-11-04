const frequentEven = (nums) => {
    let hash = {};
    let myArr = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            myArr.push(nums[i]);
            if(hash[nums[i]]){
                hash[nums[i]]++
            } else{
                hash[nums[i]] = 1;
            }
        }
    }
    let arr = Object.values(hash);
    if(arr.length == 0){
        return -1;
    }
    let smallest = Math.max(...arr);
    for(key in hash){
        if(hash[key] == smallest){
            return key;
        }
    }
}

console.log(frequentEven(
    [29,47,21,41,13,37,25,7]));