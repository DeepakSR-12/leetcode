// Given a list of digits ranging from most significant to least significant,
// Add one and return the result.

// Method 1: use in-built js BigInt(), join('')and split('');
// Will give result in string format
// O(n) T | O(n) S
// const plusOne = (digits) => {
//   let grouped = BigInt(digits.join(""));
//   grouped++;
//   return grouped.toString().split("");
// };

// Method 2: use unshift();
// O(n) T | O(1) S
const plusOne = (digits) => {
  for (let idx = digits.length - 1; idx >= 0; idx--) {
    if (digits[idx] < 9) {
      digits[idx]++;
      return digits;
    }
    digits[idx] = 0;
  }

  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 6]
console.log(plusOne([9, 9, 9, 9])); // [1, 0, 0, 0, 0]
