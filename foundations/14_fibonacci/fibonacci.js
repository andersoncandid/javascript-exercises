const fibonacci = function (num) {
  // Fibonacci recursion
  const fib = function (n) {
    if (n < 1) return 0;
    if (n === 1 || n === 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  // Input Validation
  // Don't accept negative inputs
  try {
    if (num < 0) throw "OOPS";
  } catch (err) {
    return err;
  }
  // Convert strings inputs
  if (typeof num != "number") {
    return fib(parseInt(num));
  }
  return fib(num);
};

// Do not edit below this line
module.exports = fibonacci;
