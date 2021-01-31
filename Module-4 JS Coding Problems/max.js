var business = 350;
var minister = 450;
var sochib = 650;

var max = Math.max(business, minister, sochib);
console.log(max);

// using if else condition
if (business > minister) {
    if (business > sochib) {
        console.log("Business is bigger");
    }
    else {
        console.log("Sochib is bigger");
    }
}
else {
    if (minister > sochib) {
        console.log("Minister is bigger");
    }
    else {
        console.log("Sochib is bigger");
    }
}