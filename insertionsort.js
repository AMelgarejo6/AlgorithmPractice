//show insertion sort algo

//iterate through each element of array starting at first index
//save the current value into a variable curr
//will be checking every value before the curr index
//shift every element greater than curr to the right of curr
//insert curr into position
//return arr

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){ 
        let curr = arr[i]; 
        let j = i - 1; 
        while(j >= 0 && arr[j]>curr){ 
            arr[j+1] = arr[j]; 
            j--;
        }
        arr[j+1] = curr;
    }
    return arr;
}

console.log(insertionSort([5,3,8,1,30]));