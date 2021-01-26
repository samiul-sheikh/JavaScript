var student1 = { id:491, phone:01784097404, name:'Samiul'};
var student2 = { id:492, phone:01309170562, name:'Hannan'};

console.log(student1);
console.log(student2);

// access from object a single property 1st way
var phoneNumber = student1.phone;

// access from object a single property 2nd way
// var phoneNumber = student1["phone"];

// access from object a single property 3rd way
// var phonePropName = "phone";
// var phoneNumber = student1[phonePropName];
console.log(phoneNumber);

// update property
student2.phone = 4567890;
// student2["phone"] = 6666677;
// student2[phonePropName] = 100000;
console.log(student2);

// add new property
student1.job = "developer";
student1["job"] = "JS developer";
console.log(student1);