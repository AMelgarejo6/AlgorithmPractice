var subtractProductAndSum = function(n) {
    let s = n.toString();
    let product = s[0];
    let sum = s[0];
    for(let i = 1; i < s.length; i++){
        product = product * s[i];
        sum = sum + s[i];
    }
    console.log(product, sum);
    return product-sum;
};

console.log(subtractProductAndSum(324));