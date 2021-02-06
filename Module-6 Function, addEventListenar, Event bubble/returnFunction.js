function evenDouble(number) {
    var result;
    if (number % 2 == 0) {
        result = number;
    }
    else {
        result = number * 2;
    }
    return result;
}

var result = evenDouble(13);
// return result to make square
var square = result * result;
console.log("square", square);


// return double value store in an array
function evenDouble_all(numbers) {
    var even_array = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        var result = evenDouble(number);
        even_array.push(result);
    }
    return even_array;
}

var numbers = [15, 16, 17, 20, 25, 30];
var numbers_even = evenDouble_all(numbers);
console.log(numbers_even);


// 2nd way to return
/*function evenDouble(number) {
    if (number % 2 == 0) {
        return number;
    }
    else {
        return number * 2;
    }
}

var result = evenDouble(13);
console.log("result", result);
*/