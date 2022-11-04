//given a target string return how many instances you can create of the 
//given target string inside a given string

function findIterations(str, target) {
    let strMap = {};
    let tarMap = {};
    let resultArr = [];
    for(i = 0; i < target.length; i++){
        if(tarMap[target[i]]){
            tarMap[target[i]]++;
        }
        else{
            tarMap[target[i]] = 1;
        }
    }
    for(i = 0; i < str.length; i++){
        if(strMap[str[i]]){
            strMap[str[i]]++;
        }
        else{
            strMap[str[i]] = 1;
        }
    }
    for(key in tarMap){
        if(!(strMap[key])){
            return 0;
        }
        resultArr.push(Math.floor((strMap[key]/tarMap[key])));
    }
    return Math.min(...resultArr);
}

console.log(findIterations("bbaalllloooonnss", "balloon"));