var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums1[i] == nums2[j]){
                while(nums2[j] <= nums1[i] && nums2[j+1]){
                    j++;
                }
            if(nums2[j] > nums1[i]){
                result.push(nums2[j]);
            } else{
                result.push(-1);
            }
            }
        }
    }
    return result;
};
