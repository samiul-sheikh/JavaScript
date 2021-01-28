// 10! = 1*2*3*4*5*6*7*8*9*10;

// using loop

// var factorial = 1;
// for (var i = 1; i <= 10; i++) {
//     factorial = factorial * i;
//     console.log(i, factorial);
// }


// using function
function factorial(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var result = factorial(10);
console.log(result);