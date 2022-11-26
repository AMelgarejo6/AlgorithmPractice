const singleNumber = (nums) => {
    let hashMap = {};
    for(let i = 0; i < nums.length; i++){
        if(hashMap[nums[i]]){
            hashMap[nums[i]]++;
        } else{
            hashMap[nums[i]] = 1;
        }
    }
    console.log(hashMap);
    for(key in hashMap){
        if(hashMap[key] == 1){
            return key;
        }
    }
}

console.log(singleNumber([4,1,2,1,2]));