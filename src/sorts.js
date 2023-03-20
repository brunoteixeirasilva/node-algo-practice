/* Import the functions from the algorithms folder */
import { binarySort, binarySortRecursive } from './algo/binarySort';

// Array for testing the functions
let array = [52, 1, 4, 3, 33, 42, 10, 11, 16, 12];

// Sort the array using binary sort algorithm
let binarySortResult = binarySort(array);

// Sort the array using binary sort recursive algorithm
let binarySortRecursiveResult = binarySortRecursive(array);

// Print the results
console.log('======== Binary Sort Results ========');
console.log('Unsorted array: ' + array);
console.log('Binary sort result: ' + binarySortResult);
console.log('Binary sort recursive result: ' + binarySortRecursiveResult);
console.log('=========================');
