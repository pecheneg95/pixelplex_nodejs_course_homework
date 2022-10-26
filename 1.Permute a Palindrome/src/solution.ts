export default function solution(input: string) {
    const obj: { [key: string]: number } = {};
    
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        if (obj[input[i]]) {
            obj[input[i]]++
        } else {
            obj[input[i]] = 1
        }
    }

    for (const key in obj) {
        if (obj[key] % 2 !== 0) {
            count++
        }

        if (count > 1) {
            return false;
        }
    }

    if (count == 1 && input.length % 2 == 0) {
        return false
    }

    return true;
}
