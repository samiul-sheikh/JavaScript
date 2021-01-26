// function doubleIt(num){
//     var result = num * 2;
//     console.log(result);
// }

// doubleIt(50);
// doubleIt(100);

// single parameter
function doubleIt(num){
    var result = num * 2;
    return result;
}

var first = doubleIt(50);
var second = doubleIt(100);
var total = first + second;
console.log(total);


// multiple parameter
function addNumber(num1, num2){
    var result = num1 + num2;
    return result;
}

var sum = addNumber(20, 30);
console.log(sum);