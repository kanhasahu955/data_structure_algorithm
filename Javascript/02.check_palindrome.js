function isPalindrome(num) {
  let reversed = 0;
  let n = num;

  while (n > 0) {
    const last_digit = n % 10;
    reversed = reversed * 10 + last_digit;
    n = Math.floor(n / 10);
  }

  return num === reversed;
}

console.log(isPalindrome(12345));
console.log(isPalindrome(111));
