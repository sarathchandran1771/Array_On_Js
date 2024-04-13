//Write a function to remove duplicate values from an array.

const numbers = [3, 7, 2, 8, 5, 9, 7, 4, 1, 6, 8, 2];

//using method
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers)

//using loop
function findDuplicates(arr){
    let nonDuplicateValue = [];
    for(let i=0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] !== arr[j] && !nonDuplicateValue.includes(arr[i])){
                nonDuplicateValue.push(arr[i])
            }
        }
    }
    return nonDuplicateValue
}

const uniqueNums = findDuplicates(numbers)
console.log("numbers",uniqueNums)

