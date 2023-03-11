const box = [
  { name: "jhon", salary: 500 },
  { name: "jana", salary: 100 },
];
const sum = box.reduce((a, b) => a + b.salary, 0);
console.log(sum);

/* https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion */

// Sum all numbers

function sumRange(n) {
  if (n == 0) return 0;
  if (n > 0) {
    return n <= 0 ? 0 : n + sumRange(n - 1);
  } else {
    return n >= 0 ? 0 : n + sumRange(n - -1);
  }
}

console.log(sumRange(4)); // output should be 10
console.log(sumRange(-4)); // output should be -10
console.log(sumRange(0)); // output should be 0

//  Power function

function pow(x, n) {
  return n <= 1 ? x : x * pow(x, n - 1);
}

console.log(pow(2, 3)); // output should be 8

// Calculate factorial

function fact(x) {
  if (x <= 1) {
    if (x == 0) return 0;
    return x;
  } else {
    return x * fact(x - 1);
  }
}

console.log(fact(4)); // output should be 24

// Product of an array

const sampleArr = [1, 2, 3, 10];

function productOfArray(array) {
  if (array.length === 0) return 1;

  return array.shift() * productOfArray(array);
}

console.log(productOfArray(sampleArr)); // output should be 60

// Search JS object

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;

function printListValue(list, value) {
  if (list == null) return "value not found";
  if (list.value == value) {
    return "value found";
  } else {
    return printListValue(list.next, value);
  }
}

console.log(printListValue(list, 3)); // output should be "value found"

// Parse a multi-dimensional array

/* Given a multi-dimensional integer array, return the total 
  number of integers stored inside this array
  
   */

const superArray = [[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]];

function intCounter(arr) {
  let counter = 0;
  for (i in arr) {
    if (Number.isInteger(arr[i])) {
      ++counter;
    } else if (Array.isArray(arr[i])) {
      counter += intCounter(arr[i]);
    }
  }
  return counter;
}
console.log(intCounter(superArray)); //output should be 7

/* Write a function that sums squares of numbers 
  in list that may contain more lists */

const squaresArr = [[1, 2], 3];

function squaresCounter(arr) {
  let counter = 0;
  for (i in arr) {
    if (Number.isInteger(arr[i])) {
      counter += arr[i] * arr[i];
    } else if (Array.isArray(arr[i])) {
      counter += squaresCounter(arr[i]);
    }
  }
  return counter;
}

console.log(squaresCounter(squaresArr)); // 14

/* The function should return an array containing
   repetitions of the number argument */

console.log(replicate(3, 5)); // [5, 5, 5]

function replicate(times, number) {
  if (times <= 0) return [];

  return [number].concat(replicate(times - 1, number));
}

//fibonacci

function fibs(v) {
  const result = [0, 1];
  let temp = 0;
  let actual = 0;
  if (v <= 1) {
    return 0;
  } else {
    for (let i = 2; i < v; i++) {
      temp = result[result.length - 2];
      actual = result[result.length - 1];
      result.push(temp + actual);
    }
  }
  return result;
}

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// //fibonacci with recursion

function fibsRec(n) {
  if (n < 2) {
    return n;
  } else {
    return fibsRec(n - 1) + fibsRec(n - 2);
  }
}
console.log(fibsRec(7)); // 13

// Check all values in an array

let allAreLessThanSeven = all([1, 2, 6], function (num) {
  return num < 7;
});

console.log(allAreLessThanSeven); // false

function all(array, callback) {
  let copy = array.slice(); // shallow copies array

  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift(); // remove first element from array
    return all(copy, callback);
  } else {
    return false;
  }
}

/*How to divide an array in half in JavaScript */

// [4, 2, 1, 3] bugg
// [3, 2, 1, 4] draw
const listArr = [25, 30, 120, 55, 3, 6, 11, 85, 97, 45, 19, 2, 1, 8, 9, 11];
const half = Math.ceil(listArr.length / 2);

const firstHalf = listArr.slice(0, half);
const secondHalf = listArr.slice(half);

console.log(firstHalf);
console.log(secondHalf);
