//Write a function to find the maximum number in an array.

const numbers = [3, 7, 2, 8, 5, 9, 4, 1, 6, 2];

//using method
function findMax(numbers){
   let maxValue = Math.max(...numbers)
   return maxValue
};

const largeNumValue = findMax(numbers);
console.log(largeNumValue);

//using Loop
function findLarge(arr){
    let maxValue = 0;
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i] > maxValue){
            maxValue = arr[i]
        }
    }
    return maxValue
 };
 
const largeValue = findLarge(numbers);
console.log(largeValue);

