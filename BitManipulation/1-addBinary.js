var addBinary = function (a, b) {
  // Method 1: use in built fn
  // return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);

  // Method 2: use manual addition
  // O(max(N,M)) T | O(max(N,M)) S
  let result = "";
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;

    if (i >= 0) {
      // If string subtracted, ASCII values are subtracted and returns a number
      // Eg: '1' - '0' => 49 - 48 = 1
      sum += a[i] - "0";
      i--;
    }

    if (j >= 0) {
      sum += b[j] - "0";
      j--;
    }

    carry = ~~(sum / 2);
    // String concat - must be in this order
    result = (sum % 2) + result;
  }
  return result;
};

console.log(addBinary("100", "101"));
console.log(addBinary("111", "11"));
