// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
const readlineSync = require('readline-sync');

/**
 * Calculates the sum of all elements in an array.
 * @param {number[]} arr 
 * @returns {number}
 */
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/**
 * Calculates the average of elements in an array.
 * @param {number[]} arr 
 * @returns {number}
 */
function calculateAverage(arr) {
    let sum = calculateSum(arr);
    return sum / arr.length;
}

/**
 * Finds the maximum value in an array.
 * @param {number[]} arr 
 * @returns {number}
 */
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

/**
 * Finds the minimum value in an array.
 * @param {number[]} arr 
 * @returns {number}
 */
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

/**
 * Main function to run the Array Statistics Calculator program.
 */
function main() {
    // Prompt user for count N
    const countInput = readlineSync.question('How many numbers? ');
    const count = Number(countInput);

    // Validate that count is a positive integer (must be > 0)
    if (isNaN(count) || count <= 0) {
        console.log('Error: Please enter a positive integer greater than 0.');
        return;
    }

    const numbers = [];

    // Collect N numbers from the user
    for (let i = 1; i <= count; i++) {
        const numInput = readlineSync.question(`Enter number ${i}: `);
        numbers.push(Number(numInput));
    }

    // Compute calculations using individual helper functions
    const sum = calculateSum(numbers);
    const average = calculateAverage(numbers);
    const max = findMax(numbers);
    const min = findMin(numbers);

    // Display formatted output
    console.log('\nResults:');
    console.log(`Sum:     ${sum}`);
    console.log(`Average: ${average}`);
    console.log(`Maximum: ${max}`);
    console.log(`Minimum: ${min}`);
}

// Run the program
main(); =============================================================================


