export default function solution(A: string[]) {
    const cache: string[] = [];

    for (let i = 0; i < A.length; i++) {
        if (cache.includes(A[i])) continue

        const arr = A.filter(el => el == A[i])

        if (arr.length % 2 !== 0) return A[i];

        cache.push(A[i])
    }
}
