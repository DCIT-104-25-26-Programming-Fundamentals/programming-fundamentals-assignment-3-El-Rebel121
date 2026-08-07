// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
const readlineSync = require('readline-sync');

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Prompts the user to input a matrix with specified dimensions.
 * @param {string} matrixName - Name of the matrix for prompt display
 * @param {number} rows - Number of rows
 * @param {number} cols - Number of columns
 * @returns {number[][]} The constructed 2D matrix
 */
function readMatrix(matrixName, rows, cols) {
  console.log(`\nEnter values for Matrix ${matrixName} (${rows}x${cols}):`);
  let matrix = [];

  for (let i = 0; i < rows; i++) {
    let input = readlineSync.question(`Enter row ${i + 1}: `);
    // Convert space-separated line into an array of numbers
    let rowValues = input.trim().split(/\s+/).map(Number);

    // Validate correct number of inputs per row
    while (rowValues.length !== cols || rowValues.some(isNaN)) {
      console.log(`Invalid input! Please enter exactly ${cols} numbers separated by spaces.`);
      input = readlineSync.question(`Enter row ${i + 1}: `);
      rowValues = input.trim().split(/\s+/).map(Number);
    }

    matrix.push(rowValues);
  }

  return matrix;
}

/**
 * Displays a matrix in a neat, aligned grid format.
 * @param {number[][]} matrix - Matrix to display
 */
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let rowStr = matrix[i].map(num => String(num).padStart(5, ' ')).join('');
    console.log(rowStr);
  }
}

// ==========================================
// PART A - Transpose a Matrix
// ==========================================

/**
 * Computes the transpose of an M x N matrix (resulting in N x M).
 */
function transposeMatrix() {
  console.log('\n--- PART A: Transpose Matrix ---');
  let rows = Number(readlineSync.question('Enter number of rows: '));
  let cols = Number(readlineSync.question('Enter number of columns: '));

  let matrix = readMatrix('', rows, cols);

  // Initialize transposed matrix (N x M)
  let transposed = [];
  for (let i = 0; i < cols; i++) {
    transposed[i] = [];
    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }

  console.log('\nOriginal Matrix:');
  printMatrix(matrix);

  console.log('\nTransposed Matrix:');
  printMatrix(transposed);
}

// ==========================================
// PART B - Add Two Matrices
// ==========================================

/**
 * Computes the element-wise sum of two M x N matrices.
 */
function addMatrices() {
  console.log('\n--- PART B: Matrix Addition ---');
  let rows = Number(readlineSync.question('Enter number of rows: '));
  let cols = Number(readlineSync.question('Enter number of columns: '));

  let matrixA = readMatrix('A', rows, cols);
  let matrixB = readMatrix('B', rows, cols);

  // Compute sum matrix using nested loops
  let sumMatrix = [];
  for (let i = 0; i < rows; i++) {
    sumMatrix[i] = [];
    for (let j = 0; j < cols; j++) {
      sumMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }

  console.log('\nMatrix A + Matrix B =');
  printMatrix(sumMatrix);
}

// ==========================================
// PART C - Multiply Two Matrices
// ==========================================

/**
 * Computes the product of Matrix A (M x N) and Matrix B (N x P).
 */
function multiplyMatrices() {
  console.log('\n--- PART C: Matrix Multiplication ---');
  let rowsA = Number(readlineSync.question('Enter rows for Matrix A (M): '));
  let colsA = Number(readlineSync.question('Enter columns for Matrix A / Rows for Matrix B (N): '));
  let colsB = Number(readlineSync.question('Enter columns for Matrix B (P): '));

  let matrixA = readMatrix('A', rowsA, colsA);
  let matrixB = readMatrix('B', colsA, colsB);

  // Initialize product matrix (M x P)
  let productMatrix = [];
  for (let i = 0; i < rowsA; i++) {
    productMatrix[i] = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      // Dot product calculation using nested loop
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      productMatrix[i][j] = sum;
    }
  }

  console.log('\nMatrix A * Matrix B =');
  printMatrix(productMatrix);
}

// ==========================================
// MAIN EXECUTION
// ==========================================

function main() {
  console.log('=== MATRIX OPERATIONS ASSIGNMENT ===');

  transposeMatrix();
  addMatrices();
  multiplyMatrices();

  console.log('\nAll operations completed successfully!');
}

main(); =============================================================================

const readlineSync = require('readline-sync');

