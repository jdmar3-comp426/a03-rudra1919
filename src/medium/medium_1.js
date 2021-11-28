import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    
    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    let a = array.reduce(reducer);
    return a;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    array = array.sort(function (a,b) { return a - b; });
    let odd = array.length % 2;
    let half = Math.floor(array.length / 2)
    if (odd == 1) {
        return array[half -1] + array[half] / 2;
    }
    else {
        return array[half];
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let avg = getSum(array) / array.length;
    let arr = [];
    let placeholder;
    array.forEach(element => {
        placeholder = Math.abs(element - avg);
        placeholder = placeholder * placeholder;
        arr.push(placeholder);
    });
    let avg2 = getSum(arr) / arr.length;
    let variance = Math.sqrt(avg2);
    
    return {
        length: array.length,
        sum: getSum(array),
        mean: avg,
        median: getMedian(array),
        min: Math.min(...array),
        max: Math.max(...array),
        variance: variance,
        standard_deviation: Math.sqrt(variance)
    };
}

