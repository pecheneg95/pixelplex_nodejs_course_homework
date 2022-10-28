export default function solution(n: number, mxval: number): number {
  const prime = [2];

  for (let i = 3; i <= mxval && prime.length !== n; i += 2) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }

  const step = prime.reduce((p, c) => p * c);
  let count = 0;

  for (let i = step; i <= mxval; i += step) {
    const arr = prime.filter(el => i % el === 0);
    if (arr.length === prime.length) {
      count++;
    }
  }

  return count;

  function isPrime(num: number): boolean {
    for (let i = 2; i <= Math.sqrt(num);) {
      if (num % i === 0) {
        return false;
      }
      i === 2 ? i++ : i += 2;
    }
    return num > 1;
  }
}
