function sumMul(n, m) {
    if (m <= n) return "INVALID";
    const l = m - (m % n || n);
    return (n + l) / 2 * l / n;
  }