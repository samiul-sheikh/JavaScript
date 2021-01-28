// var inch = 156;
// var feet = inch / 12;

// console.log(feet);

function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}

var user1 = inchToFeet(156);
console.log(user1);

var user2 = inchToFeet(288);
console.log(user2);

// 2nd way [not efficient]
// var user = [156, 288];
// var user1 = inchToFeet(user[0]);
// console.log(user1);

// second example
function kilometerToMeter(meter) {
    var kilometer = meter / 1000;
    return kilometer;
}

var result = kilometerToMeter(5000);
console.log(result);