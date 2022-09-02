//given a number of cents, return an object with the count
//of how many of each coin should be returned
//67 -> 2 quarters, 1 dime, 1 nickel, 2 pennies
//78 -> 3 quarters, 0 dimes, 0 nickels, 3 pennies
change = {
    "quarters": 25,
    "dimes": 10,
    "nickels": 5,
    "penny": 1
}
function coinChange(cents){
    changeback = {
        "quarters": 0,
        "dimes": 0,
        "nickels": 0,
        "penny": 0
    };
    quarterCount = 0;

    quarters = changeback["quarters"];
    outsideQuarter = change["quarters"];
    while (cents >= outsideQuarter){
        cents -= outsideQuarter;
        quarterCount++;
    }
    changeback["quarters"] = quarterCount;
    
    dimeCount = 0;
    dimes = changeback["dimes"];
    outsideDimes = change["dimes"];
    while (cents >= outsideDimes){
        cents -= outsideDimes;
        dimeCount++;
    }

    changeback["dimes"] = dimeCount;

    nickelCount = 0;
    nickels = changeback["nickels"];
    outsideNickels = change["nickels"];
    while (cents >= outsideNickels){
        cents -= outsideNickels;
        nickelCount++;
    }

    changeback["nickels"] = nickelCount;

    pennyCount = 0;
    penny = changeback["penny"];
    outsidePenny = change["penny"];
    while (cents >= outsidePenny){
        cents -= outsidePenny;
        pennyCount++;
    }

    changeback["penny"] = pennyCount;

    return console.log(changeback);
}

coinChange(67);
coinChange(78);
