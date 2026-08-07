// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================
//
// TASK: Console-Based To-Do List Application
//
// Build a simple to-do list program that runs entirely in the console and
// allows the user to manage their tasks interactively using a menu.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_07_todo_list.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Task
//      - Prompt the user to type a task description.
//      - Add it to the array and confirm it was added.
//
//   2. View All Tasks
//      - Display all tasks currently in the array, numbered from 1.
//      - If the array is empty, print a friendly message saying so.
//
//   3. Delete a Task
//      - Show the list of tasks with their numbers.
//      - Ask the user which task number they want to remove.
//      - Remove the task and confirm the deletion.
//      - If the task number is invalid, print an error message.
//
//   4. Quit
//      - End the program with a farewell message.
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        TO-DO LIST MENU
//   ============================
//   1. Add task
//   2. View tasks
//   3. Delete task
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Enter task: Buy groceries
//   Task added: "Buy groceries"
//
//   Enter your choice (1-4): 2
//   Your Tasks:
//   1. Buy groceries
//   2. Study for exams
//
//   Enter your choice (1-4): 3
//   Enter task number to delete: 1
//   Task "Buy groceries" has been removed.
//
//   Enter your choice (1-4): 4
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store tasks in a JavaScript array (e.g. let tasks = []).
// - Use a loop to keep the menu running until the user chooses to quit.
// - Each feature MUST be implemented in its own function (see scaffold below).
// - Handle invalid menu choices gracefully (print an error, do not crash).
// - To remove an item from an array by index, use: tasks.splice(index, 1)
//
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


