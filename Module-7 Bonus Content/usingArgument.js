/*
function getFullName(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    return fullName;
}
const name = getFullName('Samiul', 'Hasan', 'Sheikh');
console.log(name);
*/


function getFullName(firstName, lastName) {
    // using arguments take all parameter(arrayLikeObject)
    // console.log(arguments);
    let fullName = ' ';
    // convert arguments into array
    // const result = [...arguments].join('')
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName + ' ' + namePart;
    }
    return fullName;
}
const name = getFullName('Samiul', 'Hasan', 'Sheikh');
console.log(name);