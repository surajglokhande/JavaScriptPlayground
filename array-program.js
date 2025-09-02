// removed dublicate element
// var array = [5,9,7,11,9,11]
// don't use any predefined function like contains
// keep the order of the elements same
// removed dublicate element
// output:
// [5,9,7,11]

function removeDublicates(array) {

    let newArray = new Object()
    let outputArray = []
    for (let i = 0; i < array.length; i++) {
        if (newArray[array[i]] == null) {
            outputArray.push(array[i])
            newArray[array[i]] = true
        }
    }
    console.log(outputArray)
}

// removeDublicates([5, 9, 7, 11, 9, 11])

// Second Largest Element in an Array
// var array = [100, 35, 10, 10, 34, 1, 79]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

function secoundLargest(array) {

    let largestElement = 0
    let secoundLargestElement = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largestElement) {
            secoundLargestElement = largestElement
            largestElement = array[i]
        } else if (largestElement > array[i] && secoundLargestElement < array[i]) {
            secoundLargestElement = array[i]
        }
    }
    console.log(largestElement, secoundLargestElement)
}

// secoundLargest([100, 35, 10, 10, 80, 1, 79])

// 3rd largest element in array
// var array = [36, 1, 10, 34, 10, 79, 100]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

function thirdLargest(array) {

    let largestElement = 0
    let secoundLargestElement = 0
    let thirdLargestElement = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largestElement) {
            thirdLargestElement = secoundLargestElement
            secoundLargestElement = largestElement
            largestElement = array[i]
        } else if (largestElement > array[i] && thirdLargestElement < array[i]) {
            if (secoundLargestElement > array[i]) {
                thirdLargestElement = array[i]
            }
        }
    }
    console.log(largestElement, secoundLargestElement, thirdLargestElement)
}

//thirdLargest([36, 1, 10, 34, 10, 80, 100])

// Maximum consecutive one’s (or zeros) in a binary array
// var array = [0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0]
// Output: 4
// Explanation: The maximum number of consecutive 1’s in the array is 4 from index 3-6.

function consecutiveOnes(array) {

    let dic = new Object()
    for (let i = 0; i < array.length; i++) {
        let count = 0
        if (dic[array[i]] == null) {
            dic[array[i]] = 1
        } else {
            dic[array[i]] += 1
        }
    }
    console.log(dic)
}

// consecutiveOnes([0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0])

// Move all zeros to end of array
// var array = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: arr[] = [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.

function moveZeroToEnd(array) {

    let newArray = []
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            newArray.push(array[i])
        } else {
            count++
        }
    }

    newArray.push(...new Array(count).fill(0))
    console.log(newArray)
}

//moveZeroToEnd([1, 2, 0, 4, 3, 0, 5, 0])

//Reverse an Array in groups of given size
// var array = [1, 2, 3, 4, 5, 6, 7, 8] //k = 3
// Output: [3, 2, 1, 6, 5, 4, 8, 7]
// Explanation: Elements is reversed: [1, 2, 3] → [3, 2, 1], [4, 5, 6] → [6, 5, 4], and the last group [7, 8](size < 3) is reversed as [8, 7].

function reversedArrayInGroup(array) {
    let k = 3
    let result = []
    for (let i = 0; i < array.length; i += 3) {
        const newArray = array.slice(i, i + k).reverse();
        result.push(...newArray)
    }
    console.log(result)
}

// reversedArrayInGroup([1, 2, 3, 4, 5, 6, 7, 8])

//Rotate an Array by d - Counterclockwise or Left
// var array = [1, 2, 3, 4, 5, 6]
// Output: [3, 4, 5, 6, 1, 2] k = 2
// Explanation: After first left rotation, arr[] becomes [2, 3, 4, 5, 6, 1] and after the second   rotation, arr[] becomes [3, 4, 5, 6, 1, 2]

function rotateArray(array) {
    let k = 2

    for (let i = k; i < array.length; i++) {
        let temp = array[i]
        array[i] = array[i - 2]
        array[i - 2] = temp
    }
    console.log(array)
}

// rotateArray([1, 2, 3, 4, 5, 6])

// Sort an array in wave form
// var arr: [Int] = [1, 2, 3, 4, 5]
// Output: [2, 1, 4, 3, 5]
// Explanation: Array elements after sorting it in the waveform are 2, 1, 4, 3, 5.

function waveArray(array) {
    const newArray = array.sort((a, b) => a - b)
    for (let i = 0; i < (newArray.length / 2); i += 2) {
        let temp = newArray[i]
        newArray[i] = newArray[i + 1]
        newArray[i + 1] = temp
    }
    console.log(newArray)
}
// waveArray([10, 2, 20, 4, 5])

//Adding one to number represented as array of digits
// var array: [Int] = [1, 2, 4]
// Output : 125
// Explanation: 124 + 1 = 125
function plusOne(array) {
    let count = ""
    for (let i = 0; i < array.length; i++) {
        count = count + array[i]
    }
    console.log(parseInt(count) + 1)
}

plusOne([1, 2, 4])