//Write a function to reverse an array without using the built-in reverse() method.
const numbers = [3, 7, 2, 8, 5, 9, 7, 4, 1, 6, 8, 2];


const reverseArray = (arr) => {
    let revArr = [];

    for(let i = arr.length-1; i >=0; i--){
     revArr.push(arr[i])   
    }
    return revArr
}

let reverserdArray = reverseArray(numbers)
console.log("reverserdArray withOut method", reverserdArray)


function revArray(arr){
    return arr.reverse()
} 

const revResult = revArray(numbers)
console.log("revResult with method",revResult)