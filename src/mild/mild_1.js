/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    let sum, c, d;
    sum = a + b;
    return a + " + " + b + " = " + sum;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    let diff;
    diff = endNumber - startNumber + 1
    let arr = new Array(diff);
    for (let i = 0; i < diff; i++) {
        arr[i] = startNumber;
        startNumber++;
    }
    return arr;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    let mini, maxi;
    mini = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < mini) {
            mini = numbers[i];
        }
    }
    maxi = numbers[0];
    for (let x = 1; x < numbers.length; x++) {
        if (numbers[x] > maxi) {
            maxi = numbers[x];
        }
    }
    const mi = mini;
    const mx = maxi;
    return {max: mx, min: mi}
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {

}
