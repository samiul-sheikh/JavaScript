function addNumbers(num1, num2) {

    function logInfo(message) {
        console.log(message);
    }
    logInfo("Good Morning");

    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}
var result = addNumbers(20, 30, 40, 80);
console.log(result);