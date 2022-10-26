export default function solution(n: number, mxval: number) {
    const prime = [2];

    for (let i = 3; i <= mxval && prime.length !== n; i += 2) {
        if (isPrime(i)) {
            prime.push(i)
        }
    }

    let step = 0;
    let count = 0;
    let maxPrime = prime[prime.length - 1];

    for (let i = maxPrime; i <= mxval; i += maxPrime) {
        const arr = prime.filter(el => i % el == 0)

        if (arr.length == prime.length) {
            step = i;
            break;
        }
    }

    for (let i = step; i <= mxval; i += step) {
        let arr = prime.filter(el => i % el == 0)
        if (arr.length == prime.length) {
            count++
        }
    }

    return count;

    function isPrime(num: number) {
        for (let i = 2; i <= Math.sqrt(num);) {
            if (num % i == 0) return false;
            i == 2 ? i++ : i += 2;
        }
        return num > 1;
    }
}
