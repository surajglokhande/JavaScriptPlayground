const array = ["suraj", "dhiraj", "sumedh", "ruchika", "shweta"]

for (const key in array) {
    if (Object.prototype.hasOwnProperty.call(array, key)) {
        // const element = array[key];
        console.log(key)
    }
}

for (const element of array) {
    console.log(element)
}