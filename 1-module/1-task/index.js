function factorial(n) {
  let multiplication = 1;

  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      multiplication *= i;
    }
    return multiplication;
  } else if (n === 1 || n === 0) {
    return 1;
  }
}
