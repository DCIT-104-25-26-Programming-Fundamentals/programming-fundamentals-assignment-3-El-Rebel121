// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
const readlineSync = require('readline-sync');

// ==========================================
// HELPER FUNCTION
// ==========================================

/**
 * Validates whether the user input is a positive integer.
 * @param {string} input - Raw input string from the user
 * @returns {number|null} The parsed positive integer, or null if invalid
 */
function getValidPositiveInteger(promptMessage) {
  let input = readlineSync.question(promptMessage);
  let num = Number(input);

  // Check if it's a number, an integer, and greater than 0
  if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
    console.log('Error: Invalid input. Please enter a positive integer.');
    return null;
  }

  return num;
}

/**
 * Helper to print a single multiplication table for a given number.
 * @param {number} num - The number to generate the table for
 */
function printTableForNumber(num) {
  console.log(`\nMultiplication Table for ${num}:`);
  for (let i = 1; i <= 12; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

// ==========================================
// PART A – Single Table
// ==========================================

/**
 * Asks the user for a single number and displays its multiplication table from 1 to 12.
 */
function generateSingleTable() {
  console.log('\n--- PART A: Single Table ---');
  let num = getValidPositiveInteger('Enter a number: ');

  // Stop if input is invalid
  if (num === null) return;

  printTableForNumber(num);
}

// ==========================================
// PART B – Bonus: Tables from 1 to N
// ==========================================

/**
 * Asks the user for N and displays multiplication tables for every number from 1 to N.
 */
function generateMultipleTables() {
  console.log('\n--- PART B: Tables from 1 to N ---');
  let n = getValidPositiveInteger('Enter a number N: ');

  // Stop if input is invalid
  if (n === null) return;

  for (let i = 1; i <= n; i++) {
    printTableForNumber(i);
    // Add separator line between tables
    if (i < n) {
      console.log('----------------------------');
    }
  }
}

// ==========================================
// MAIN EXECUTION
// ==========================================

function main() {
  console.log('=== MULTIPLICATION TABLE GENERATOR ===');

  generateSingleTable();
  generateMultipleTables();
}

main(); =============================================================================


