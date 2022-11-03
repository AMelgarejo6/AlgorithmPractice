function twosum(num, target){
    let targetHolder;
    let ogTarget = target;
    let jHolder;
    let hash = {};

    for(let i = 0; i < num.length; i++){
        hash[num[i]] = num[i];
    }
    for(let j = 0; j < num.length; j++){
        let tempTarget;
        value = hash[num[j]];
        tempTarget = target - value;
        if(hash[tempTarget] && hash[tempTarget] + hash[tempTarget] !== ogTarget){
            console.log(hash[tempTarget]);
            targetHolder = tempTarget;
            jHolder = j;
            break;
        }
    }
    for(let k = 0; k < num.length; k++){
        if(num[k] == targetHolder){
            return [jHolder,k];
        }
    }
}

console.log(twosum([3,2,4], 6));