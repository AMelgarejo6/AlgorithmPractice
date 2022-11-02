// You are given an array of ints with a length of up to 255 thousand
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this fast that 0(n) ie: find your answer without visiting every
// (think bs)

// const minOfSorted = (arr, low=0, high=arr.length-1) => {
//     let middle = Math.floor(low + high / 2);
//     if(arr[high] < arr[low]){
//         return arr[low];
//     }

//     if(high === low){
//         return arr[low];
//     }

//     if(middle < high && arr[middle + 1] < arr[middle]){
//         return arr[middle+1];
//     }

//     if(middle > low && arr[middle] < arr[middle-1]){
//         return arr[middle];
//     }

//     if(arr[high] > arr[middle]){
//         return minOfSorted(arr, low, middle-1);
//     }else{
//         return minOfSorted(arr, middle-1, high);
//     }
// }



const minOfSorted = (arr) => {
    let low = arr[0];
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i+1] < low){
            low = arr[i+1];
        }
    }
    return low;
}

console.log(minOfSorted([13,17,18,3,5,6,8,9,10]));