/**
 * Sorts the array using binary sort algorithm,
 * which is a variation of insertion sort.
 *
 * @param {Array} unsortedArray The array to be sorted.
 * @param {Boolean} useReferredArray Whether to use the original array or not.
 */
export function binarySort(unsortedArray, useReferredArray = false) {
	// not changing the original array, if caller decides so
	var array = useReferredArray ? unsortedArray : unsortedArray.slice();
	var length = array.length;

	// For each element in the array,
	// Gets the current element and places it in the right position
	// By considering left and right sub-arrays.
	for (var i = 1; i < length; i++) {
		var temp = array[i];
		var left = 0;
		var right = i - 1;

		// Deciding where to place the element
		while (left <= right) {
			var middle = Math.floor((left + right) / 2);

			if (temp < array[middle]) {
				right = middle - 1;
			} else {
				left = middle + 1;
			}
		}

		for (var j = i - 1; j >= left; j--) {
			array[j + 1] = array[j];
		}

		array[left] = temp;
	}
	return array;
}

/**
 * Sorts the array using binary sort algorithm,
 * but using recursion approach.
 *
 * @param {Array} unsortedArray The array to be sorted.
 * @param {Boolean} useReferredArray Whether to use the original array or not.
 */
export function binarySortRecursive(unsortedArray, useReferredArray = false) {
	// not changing the original array, if caller decides so
	var array = useReferredArray ? unsortedArray : unsortedArray.slice();
	var length = array.length;

	// For each element in the array,
	// Gets the current element and places it in the right position
	// By considering left and right subarrays.
	for (var i = 1; i < length; i++) {
		var temp = array[i];
		var left = 0;
		var right = i - 1;

		// Deciding where to place the element
		binarySortRecursiveHelper(array, temp, left, right);
	}

	return array;
}

/**
 * Helper function for binary sort recursive.
 *
 * @param {Array} array The array to be sorted.
 * @param {Number} currentElement The current element.
 * @param {Number} left The left index.
 * @param {Number} right The right index.
 */
function binarySortRecursiveHelper(array, currentElement, left, right) {
	if (left <= right) {
		var middle = Math.floor((left + right) / 2);

		if (currentElement < array[middle]) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}

		binarySortRecursiveHelper(array, currentElement, left, right);
	}

	for (var j = array.length - 2; j >= left; j--) {
		array[j + 1] = array[j];
	}

	array[left] = currentElement;
}
