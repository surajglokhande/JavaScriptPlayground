var callFun = function(a) {
    console.log(a);
    return function(b) {
        return a+b;
    }
}

// console.log(callFun(10)(20));
var result = callFun(100)
console.log(result)
var newResult = result(200)
console.log(newResult)

