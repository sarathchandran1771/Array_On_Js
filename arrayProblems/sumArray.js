//Write a function to find the sum of all numbers in an array.

const numbers = [3, 7, 2, 8, 5, 9, 4, 1, 6, 2];

//using method
let sumOfArray = numbers.reduce((acc,Total)=>{
    return Total + acc
})

console.log("sumOfArray",sumOfArray);

//using Loop
function sum(arr){

    let total = 0;

    for(let i=0; i<arr.length; i++){
        total += arr[i]
    }
    return total
}

const totalSum = sum(numbers)
console.log("sumOfArray",totalSum)