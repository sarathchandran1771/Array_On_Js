//Write a function to find the average of all numbers in an array.

const numbers = [3, 7, 2, 8, 5, 9, 7, 4, 1, 6, 8, 2];

function avgArray(arr){
    let avg = 0
    let sum = 0
    for(let i=0; i<arr.length-1; i++){
        sum += arr[i]
    }
    avg = sum / arr.length
    return avg;
}
const resultAvg = avgArray(numbers);
console.log("Average of array",resultAvg)

// using method
function methodAvg(arr){
    let total = arr.reduce((acc,total)=> acc+total,0)
    
    let avg = total/arr.length/2
    console.log(avg)
    return avg
}

const average = methodAvg(numbers)
console.log(average )