function fibonacci(num) {
  // Handle base cases for the 1st and 2nd terms
  if (num === 1) return 0;
  if (num === 2) return 1;

  let prev = 0; // Represents F(n-2)
  let curr = 1; // Represents F(n-1)

  // Calculate from the 3rd term up to num
  for (let i = 3; i <= num; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

module.exports = fibonacci;