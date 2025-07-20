
//rest operator

function restDemo(num1,num2,...restParam) {
    console.log(restParam);
    console.log(num1+num2+restParam[0]+restParam[1]);
}

//restDemo(10,20,30,40);

//spread operator

function spreadDemo(num1,num2, num3,num4,num5) {
    console.log(num1,num2,num3,num4,num5);
}

const array = [10,20,30,40,50];
//spreadDemo(array[0],array[1],array[2]);
//spreadDemo(...array);

//rest with object

const student = {
    name: "suraj",
    age: 34,
    compnay: "TCS",
    country: "India"
}

const { age, name, ...other } = student;

// console.log(obj.name,obj.age, other);
// console.log(age, name, other)

//spread with object to override

const newStudent = {
    ...student,
    compnay: "Infosys"//override compnay 
}

console.log(newStudent);