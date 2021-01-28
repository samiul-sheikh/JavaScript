// for (var i = 0; i >= 1; i--){

// }
// 0! = 1;
// 5! = 1*2*3*4*5;
// 6! = 1*2*3*4*5*6;
// 6! = 5! * 6;
// 6! = (6-1)! * 6;
// n! = (n-1)! * n;

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

var result = factorial(10);
console.log(result);