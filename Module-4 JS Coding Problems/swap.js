var a = 5;
var b = 10;
console.log("before swap: a =", a, "b =", b);
var temp = a;
a = b;
b = temp;
console.log("after swap: a =", a, "b =", b);

// 2nd way
var x = 2;
var y = 3;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x =", x, "y =", y);

// 3rd way
var p = 5;
var q = 7;
[p, q] = [q, p];
console.log("after swap: p =", p, "q =", q);
