function fibonacci(n) {
  if (n == 1) return 0
  if (n == 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
const n = 10
const fibo = new Array(n)
fibo.fill(0)
for (let i = 1; i <= n; i++) {
  fibo[i - 1] = fibonacci(i)
}
console.log(fibo)
