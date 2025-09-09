
//rest operator

function restDemo(num1, num2, ...restParam) {
    console.log(restParam);
    console.log(num1 + num2 + restParam[0] + restParam[1]);
}

//restDemo(10,20,30,40);

//rest with object

const student = {
    name: "suraj",
    age: 34,
    compnay: "TCS",
    country: "India"
}

const { age, name, ...other } = student;
const obj = student
// console.log(obj.name, obj.age, other);
// console.log(name, age, { ...other })

