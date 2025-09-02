const person = {
    id: 1,
    name: "suraj",
    greet: () => {
        console.log("hi i'm " + this.name)
    },
    greetTwo() {
        console.log("hi i'm " + this.name)
    },
    greetThree: function () {
        console.log("hi i'm " + this.name)
    }
}

person.greet()
person.greetTwo()
person.greetThree()