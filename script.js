function fibonacci(num) {
// your code here
  if (num === 0) return 0;
  if (num === 1) return 1;

  let prev1 = 0;
  let prev2 = 1;
  let result;

  for (let i = 2; i <= num; i++) {
    result = prev1 + prev2;
    prev1 = prev2;
    prev2 = result;
  }

  return result;
}

// Test the function
const n = 10; // Change n to any positive integer
const result = fibonacci(n);
console.log(`The ${n}th Fibonacci number is: ${result}`);

}

