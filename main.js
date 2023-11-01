#!/usr/bin/env node
console.log(process.argv);

const lib = require("./lib");

if (process.argv.length <= 3) {
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
.slice(3, process.argv.length)
.map((n)=>parseFloat(n));

if (numbers.some((n)=>isNaN(n))) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch(command){
    // 평균 구현
    case "avg":
        result = lib.avg(numbers);
        break;
        // 소수 구현
    case "prime":
        result = lib.prime(numbers[0]);
        break;
        // 팩토리얼 구현
    case "fact":
        result = lib.fact(numbers[0]);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);

// export.avg = avg;
// export.prime = prime;
// export fact = fact;