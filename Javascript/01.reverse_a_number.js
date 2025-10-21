function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    let last_digit = num % 10
    reversed = reversed * 10 + last_digit;
    num = Math.floor(num / 10);
  }
  return reversed;
}

console.log(reverseNumber(12345)) // 54321