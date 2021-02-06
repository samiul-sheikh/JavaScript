function addNumbers(num1, num2) {
    // when access all parameters values using arguments
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}
var result = addNumbers(20, 30, 40, 80);
console.log(result);

/*
function addNumbers(num1, num2) {
    // console.log(arguments);
    // when access all parameters values using arguments
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        console.log(num);
    }
    return num1 + num2;
}
var result = addNumbers(20, 30, 40, 80);
console.log(result);
*/

// argument is array like object only use inside function. don't work with push or pop.