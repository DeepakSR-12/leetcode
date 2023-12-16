// Find the sqrt of a number and round it to the nearest integer

// Method 1: using in-built js functions
// const sqrt = (x) => {
//   return ~~(x ** 0.5);
// };

// Method 2: use binary search algorithm
// O(log(n)) T | O(1) S
const sqrt = (x) => {
  if (x < 2) return x;

  let left = 1;
  let right = x;

  while (left <= right) {
    const mid = left + ~~((right - left) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};

console.log(sqrt(5)); // 2
console.log(sqrt(10)); // 3
