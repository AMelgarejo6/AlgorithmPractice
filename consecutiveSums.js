//return an array of all consecutive sums including 0's
//find where infinite loop is happening
function consecutiveSums(arr, target){
    arrList = [];
    for(let i=0; i < arr.length; i++){
        console.log(i);
        temparr = [];
        for(let j=1; j < arr.length; j++){
            temparr.push([arr[i], arr[j]]);
            let sum = arr[i] + arr[j];
            while (sum < target){
                j++;
                sum = sum + arr[j];
                temparr.push(arr[j]);
            }
            if(sum == target){
                arrList.push(temparr);
                while((sum + arr[j]) == target){
                    temparr.push(arr[j]);
                    arrList.push(temparr);
                    j++
                }
                console.log(arrList);
            }
            j = i+1;
        }
    }
    return arrList;
}

myArr = [2,5,3,6,7,0,0,23,11];
console.log(consecutiveSums(myArr, 16));