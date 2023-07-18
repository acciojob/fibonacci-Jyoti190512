function fibonacci(num) {
  if (num <= 1) {
    return num;
  }
  
  let prev = 0;
  let curr = 1;
  
  for (let i = 2; i <= num; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  
  return curr;
}


