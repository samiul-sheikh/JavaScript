function reverseString(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello Alien";
var forAlien = reverseString(statement);
console.log(forAlien);

var foodBlog = reverseString("I am hungry, now the time to eat");
console.log(foodBlog);


// another way to reverse a sentence
var sentence = "I am hardworking. I am serious. I will do it";
var reverse = sentence.split('').reverse().join("");
console.log(reverse);

// iq test
function add(a, b) {
    return a + b;
}
add(568, 254);