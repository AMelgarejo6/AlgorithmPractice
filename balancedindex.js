/* 
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.

*/

function balancedIndex(arr){
    for(i = Math.floor(arr.length/2); i <= Math.floor(arr.length/2); i++){
        balanceIndex = i;
        leftSum = 0;
        rightSum = 0;
        j = Math.floor(arr.length/2);
        k = Math.floor(arr.length/2);
        while (j >= 0){
            leftSum += arr[j];
            j--;
        }
        while (k <= arr.length-1){
            rightSum += arr[k]
            k++;
        }
        if (leftSum == rightSum){
            return balanceIndex;
        }
        else{
            return -1;
        }
    }
}

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;
console.log(balancedIndex(nums1))

const nums2 = [-1, 9, 7, 0, 3];
const expected2 = -1;
console.log(balancedIndex(nums2))

const nums3 = [2, 5, 8, 7, 10, 3, 2];
const expected3 = 3;
console.log(balancedIndex(nums3))

const nums4 = [2, 4, 6, 0];
console.log(balancedIndex(nums4))

