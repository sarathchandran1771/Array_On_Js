//Write a function to find the minimum number in an array.
const numbers = [3, 7, 2, 8, 5, 9, 4, 1, 6, 2];

//using method
function minValueMethod(numbers){
    return Math.min(...numbers)
}

const minMethod = minValueMethod(numbers)
console.log(minMethod)

//using Loop
function minValueLoop(arr){
    let minValue = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i] < minValue){
            minValue = arr[i]
        }
    }
    return minValue
}

const minLoop = minValueLoop(numbers)
console.log(minLoop)