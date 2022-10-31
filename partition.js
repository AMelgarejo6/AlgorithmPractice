function partition(arr, left = 0, right = arr.length -1){
    const pivot = arr[Math.floor((left+right)/2)];
    while(left <= right){
        while(arr[left] < pivot && left <= right){
            left++;
        }
        while(arr[right] > pivot && right >= left){
            right--;
        }

        if(left <= right){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }

    }
    console.log(arr);
    return left;
}

partition([5,3,8,1,4,7]);