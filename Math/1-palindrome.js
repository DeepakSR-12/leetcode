// An element (string or number) and its reverse should be equal

// Method 1: Use in-built JS functions - split and join
// O(n) T | O(n) S
// const isPalindrome = (string) => {
//   string = string.toString();
//   return string === string.split("").reverse().join("");
// };

// Method 2: reverse manually work for numbers
// O(log(n)) T | O(1) S // Optimal for numbers
// const isPalindrome = (number) => {
//   return number === reverse(number);
// };

// const reverse = (num) => {
//   let rev = 0;
//   while (num > 0) {
//     const lastDigit = num % 10;
//     rev = rev * 10 + lastDigit;
//     num = Math.floor(num / 10);
//   }
//   return rev;
// };

// Method 3: Use two pointers - most optimal
// O(n) T | O(1) S for string
// O(n) T | O(n) S for numbers, as element = element.toString(); consumes o(n) S to form a string

const isPalindrome = (element) => {
  element = element.toString();
  let leftIdx = 0;
  let rightIdx = element.length - 1;

  while (leftIdx < rightIdx) {
    const leftElement = element[leftIdx];
    const rightElement = element[rightIdx];
    if (leftElement !== rightElement) {
      return false;
    }
    leftIdx++;
    rightIdx--;
  }
  return true;
};

console.log(isPalindrome(12121));
