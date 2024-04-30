const numbers = [3, 7, 2, 8, 5, 9, 4, 1, 6, 2];

function findLargestAndSecondLargest(arr) {
    let largest = 0;
    let secondLargest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest; 
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]; 
        }
    }

    return { largest, secondLargest };
}

const { largest, secondLargest } = findLargestAndSecondLargest(numbers);
console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);
