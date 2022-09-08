//Write an algorithm that takes in a string and checks to make sure the parentheses are valid.
//all '(' should have a matching ')'
//parentheses should also be in the correct order(i.e. ')(' would not be valid)

//example: ()           -> true
//example: (()))()      -> false
//example: (            -> false
//example: ())())((()   -> false

function parensValid(input){
    openingCount = 0;
    closingCount = 0;
    for (i = 0; i < input.length;){
        while(input[i] == "("){
            openingCount += 1;
            if(input[i+1] == ")"){
                closingCount += 1;
                i+=2;
            }
            else if(input[i+1] == "("){
                openingCount += 1;
                i+=2;
            }
            else{
                i++;
            }
        }
        if(input[i] == ")"){
            console.log("false");
            return false;
        }
    }
    if(openingCount != closingCount){
        console.log("false")
        return false;
    }
    else{
        console.log("true")
        return true;
    }
}

// function parensValid(input){
//     total = 0;
//     for(i = 0; i < input.length; i++){
//         if (input[i] == "("){
//             total += 1;
//         }
//         else if (input[i] == ")"){
//             total -= 1;
//         }
//         else {
//             i++
//         }
//         if (total == -1){
//             console.log("false")
//             return false
//         }
//     }
//     console.log("true");
//     return true;
// }

paren1 = "()()"
parensValid(paren1)

paren2 = "()("
parensValid(paren2)

paren3 = ")"
parensValid(paren3)

paren4 = "())())((()"
parensValid(paren4)



