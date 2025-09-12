//spread operator

function spreadDemo(num1, num2, num3, num4, num5) {
    console.log(num1, num2, num3, num4, num5);
}

const array = [10, 20, 30, 40, 50];
//spreadDemo(array[0],array[1],array[2]);
//spreadDemo(...array);
console.log(newArray = [...array, 60])

//spread with object to override

const student = {
    name: "suraj",
    age: 34,
    compnay: "TCS",
    address: {
        country: "India"
    }
}

const newStudent = {
    ...student,
    compnay: "Infosys"//override compnay 
}

// console.log(newStudent);

const newS = {
    ...student,
    address: {
        country: "US"
    }
}
// console.log(newS);

const newStudentFunc = { ...newS, address: { ...newS.address, country: "UK" } }

console.log(newStudentFunc)