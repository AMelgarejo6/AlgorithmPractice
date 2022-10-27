function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }

    let m = Math.floor(arr.length/2);
    let l = arr.slice(0, m);
    let r = arr.slice(m, arr.length);

    return mergeSortedArrays(mergeSort(l), mergeSort(r));
}

function mergeSortedArrays(arr1, arr2){
    let sort = [];

    while(arr1.length && arr2.length){
        if(arr1[0] < arr2[0]){
            sort.push(arr.shift());
        }
        else{
            sort.push(arr2.shift());
        }
    }
    return sort.concat(arr1.slice().concat(arr2.slice()));
}