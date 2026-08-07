// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
//   - name   : the student's full name  (string)
//   - id     : a unique student ID number (number, e.g. 20240001)
//   - scores : an array of scores from multiple assessments (e.g. [75, 88, 90])
//
// Example object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Student
//      - Ask the user to enter the student's name and ID.
//      - Ask how many scores to enter, then collect each score one by one.
//      - Save the student object and confirm it was added.
//
//   2. Display All Students
//      - Print a formatted table showing every student's:
//          Name, ID, individual scores, and their average score.
//      - If no students have been added yet, print a message saying so.
//
//   3. Calculate Average Score for a Specific Student
//      - Ask the user to enter a student ID.
//      - Find the student and print their average score.
//      - If the ID is not found, print an error message.
//
//   4. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ================================
//      STUDENT RECORD SYSTEM MENU
//   ================================
//   1. Add student
//   2. Display all students
//   3. Calculate average score
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Student name: Alice Mensah
//   Student ID: 20240001
//   How many scores? 3
//   Enter score 1: 78
//   Enter score 2: 85
//   Enter score 3: 90
//   Student "Alice Mensah" added successfully.
//
//   Enter your choice (1-4): 3
//   Enter student ID: 20240001
//   Alice Mensah's average score: 84.33
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
const readlineSync = require('readline-sync');

// Array to store student objects
// Each student object structure: { name: string, id: number, scores: number[] }
let students = [];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Calculates the average score for an array of numbers.
 * @param {number[]} scores - Array of numerical scores
 * @returns {number} Average score
 */
function calculateAverage(scores) {
  if (!scores || scores.length === 0) return 0;
  let sum = scores.reduce((total, score) => total + score, 0);
  return sum / scores.length;
}

// ==========================================
// FEATURE FUNCTIONS
// ==========================================

/**
 * Option 1: Add a Student
 * Prompts user for name, ID, and number of scores, then collects scores one by one.
 */
function addStudent() {
  console.log('\n--- Add a Student ---');
  let name = readlineSync.question('Student name: ').trim();
  
  if (!name) {
    console.log('Name cannot be empty.');
    return;
  }

  let idInput = readlineSync.question('Student ID: ');
  let id = Number(idInput);

  if (isNaN(id) || !Number.isInteger(id) || id <= 0) {
    console.log('Invalid Student ID! Please enter a valid positive integer.');
    return;
  }

  // Check for duplicate ID
  let existingStudent = students.find(student => student.id === id);
  if (existingStudent) {
    console.log(`Error: Student with ID ${id} already exists.`);
    return;
  }

  let countInput = readlineSync.question('How many scores? ');
  let scoreCount = Number(countInput);

  if (isNaN(scoreCount) || !Number.isInteger(scoreCount) || scoreCount <= 0) {
    console.log('Invalid number of scores! Must be a positive integer.');
    return;
  }

  let scores = [];
  for (let i = 1; i <= scoreCount; i++) {
    let scoreInput = readlineSync.question(`Enter score ${i}: `);
    let score = Number(scoreInput);

    while (isNaN(score) || score < 0) {
      console.log('Invalid score! Please enter a non-negative number.');
      scoreInput = readlineSync.question(`Enter score ${i}: `);
      score = Number(scoreInput);
    }

    scores.push(score);
  }

  // Create student object and store in array
  let studentObj = {
    name: name,
    id: id,
    scores: scores
  };

  students.push(studentObj);
  console.log(`Student "${name}" added successfully.`);
}

/**
 * Option 2: Display All Students
 * Prints a formatted table/list showing every student's Name, ID, scores, and average score formatted to 2 decimal places.
 */
function displayAllStudents() {
  console.log('\n--- Display All Students ---');

  if (students.length === 0) {
    console.log('No students have been added yet.');
    return;
  }

  console.log('\n--------------------------------------------------------------------------------');
  console.log('ID\t\tName\t\t\tScores\t\t\tAverage');
  console.log('--------------------------------------------------------------------------------');

  students.forEach(student => {
    let avg = calculateAverage(student.scores).toFixed(2);
    let scoresStr = `[${student.scores.join(', ')}]`;
    console.log(`${student.id}\t${student.name.padEnd(20, ' ')}\t${scoresStr.padEnd(20, ' ')}\t${avg}`);
  });

  console.log('--------------------------------------------------------------------------------');
}

/**
 * Option 3: Calculate Average Score for a Specific Student
 * Prompts for student ID, finds the student, and outputs their average score formatted to 2 decimal places.
 */
function calculateSpecificAverage() {
  console.log('\n--- Calculate Average Score ---');

  if (students.length === 0) {
    console.log('No students in the system.');
    return;
  }

  let idInput = readlineSync.question('Enter student ID: ');
  let targetId = Number(idInput);

  if (isNaN(targetId)) {
    console.log('Invalid ID format!');
    return;
  }

  // Search for the student by ID
  let student = students.find(s => s.id === targetId);

  if (student) {
    let avg = calculateAverage(student.scores).toFixed(2);
    console.log(`${student.name}'s average score: ${avg}`);
  } else {
    console.log(`Error: Student with ID ${targetId} not found.`);
  }
}

/**
 * Displays the main menu options.
 */
function displayMenu() {
  console.log('\n==================================');
  console.log('    STUDENT RECORD SYSTEM MENU    ');
  console.log('==================================');
  console.log('1. Add student');
  console.log('2. Display all students');
  console.log('3. Calculate average score');
  console.log('4. Quit');
}

// ==========================================
// MAIN EXECUTION LOOP
// ==========================================

function main() {
  let running = true;

  while (running) {
    displayMenu();
    let choice = readlineSync.question('Enter your choice (1-4): ').trim();

    switch (choice) {
      case '1':
        addStudent();
        break;
      case '2':
        displayAllStudents();
        break;
      case '3':
        calculateSpecificAverage();
        break;
      case '4':
        console.log('Goodbye!');
        running = false;
        break;
      default:
        console.log('Invalid menu choice! Please enter a choice between 1 and 4.');
        break;
    }
  }
}

main(); =============================================================================


