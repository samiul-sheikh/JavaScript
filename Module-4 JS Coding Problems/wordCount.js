// var speech = "I am a good person. I sleep timely";
// // console.log(speech.length);
// // console.log(speech[3]);

// var count = 0;
// for (var i = 0; i < speech.length; i++) {
//     var char = speech[i];
//     console.log(char);
// }


var speech = "I am a good person. I sleep timely";
var count = 0;
for (var i = 0; i < speech.length; i++) {
    var char = speech[i];
    if (char == " ") {
        count++;
    }
}
count++;
console.log(count);

// if take more whitespace apply that
var speech = "I  am  a good person. I sleep    timely";
var count = 0;
for (var i = 0; i < speech.length; i++) {
    var char = speech[i];
    if (char == " " && speech[i - 1] != " ") {
        count++;
    }
}
count++;
console.log(count);


// count how many times you have the letter a in a string
var sentence = "I am hardworking. I am serious. I am sure I will do it";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == 'a') {
        count++;
    }
}
console.log(count);