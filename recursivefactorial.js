//recursively find the factorial of num and return it!
function factorial(num){
    // console.log("running")
    if(num === 1){
        return 1;
    }
    return num * factorial(num-1)
}

num1 = 3;
const expected1 = 6;

console.log(factorial(num1));

num2 = 5;
const expected2 = 120;

console.log(factorial(num2));