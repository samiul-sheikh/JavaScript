var numbers = [45, 67, 65, 70, 90, 100];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
}
console.log("Total of the numbers: ", sum);

// using function
function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 67, 65, 70, 90, 100];
var result = getArraySum(numbers);
console.log("Sum of the numbers: ", result);

// passing values by parameter direct
var total = getArraySum([10, 20, 30, 40, 50]);
console.log(total);



// another funny example
var friends = ["sami", "hannan", "ayon", "sakib"];
var allNames = "";
for (var i = 0; i < friends.length; i++) {
    var name = friends[i];
    allNames = allNames + name;
    // allNames = allNames++;
}
console.log(allNames);