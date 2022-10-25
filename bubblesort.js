//Bubble sort algorithm
//Time Complexity:
//Best: n when sorted
//Average: O(n^2)
//Worst: O(n^2)

function bubbleSort(arr) {
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length-1; j++){
            if(arr[j] > arr[j+1]){
                // === DESTRUCTURING === using a bit more memory but cool way
                // [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                // === same way of writing what's below with a temp variable
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

myArr = [4, 7, 5, 1, 3];
console.log(bubbleSort(myArr));