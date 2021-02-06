function evenDouble_all(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 == 0) {
            console.log(number, ': even number');
        }
        else {
            console.log(number * 2, ': odd number');
        }
    }
}

numbers = [15, 16, 17, 20, 25, 30];
evenDouble_all(numbers);

ages = [20, 21, 22, 23, 24, 25];
evenDouble_all(ages);


// using two functions
/*
function evenDouble(number) {
    if (number % 2 == 0) {
        console.log(number, ': even number');
    }
    else {
        console.log(number * 2, ': odd number');
    }
}

function evenDouble_all(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        evenDouble(number);
    }
}

numbers = [15, 16, 17, 20, 25, 30];
evenDouble_all(numbers);

ages = [20, 21, 22, 23, 24, 25];
evenDouble_all(ages);
*/


/*
numbers = [15, 16, 17, 20, 25, 30];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 == 0) {
        console.log(number, ': even number');
    }
    else {
        console.log(number*2, ': odd number');
    }
}


ages = [20, 21, 22, 23, 24, 25];

for (let i = 0; i < ages.length; i++) {
    const age = ages[i];
    if (age % 2 == 0) {
        console.log(age, ': even number');
    }
    else {
        console.log(age*2, ': odd number');
    }
}
*/