// const year = 3566;
// const remainder = year % 4;
// // console.log(remainder == 0);
// if(remainder == 0){
//     console.log("This is leap year");
// }
// else{
//     console.log("This is not leap year");
// }


function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    }
    else {
        return false;
    }
}

const check2000 = isLeapYear(2000);
console.log(check2000);