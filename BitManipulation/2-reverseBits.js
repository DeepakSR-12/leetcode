var reverseBits = function (n) {
  // O(1) T | O(1) S
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result <<= 1; // Shift result to the left to make room for the next bit
    const leastSignificantBit = n & 1;
    result |= leastSignificantBit; // Add the least significant bit of n to result
    n >>>= 1; // Logical right shift n to process the next bit (cut the existing last bit)
  }
  // In JS '>>> 0' converts signed to unsigned integer
  return result >>> 0; // Convert to unsigned integer
};

console.log(reverseBits("11111111111111111111111111111101"));
