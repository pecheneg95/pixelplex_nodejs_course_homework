export default function solution(str: string, sz: number) {
    if (sz <= 0 || !str || sz > str.length) {
        return ""
    }

    let arr = [];

    for (let i = 0; i < Math.ceil(str.length / sz); i++) {
        const piece = str.slice((i * sz), (i * sz) + sz);

        if (piece.length == sz) {
            arr[i] = piece
        }
    }

    arr = arr.map(el => {
        let sum = 0;

        for (let i = 0; i < el.length; i++) {
            sum += Math.pow(Number(el[i]), 3)
        }

        if (sum % 2 == 0) {
            return el.split('').reverse().join('')
        } else {
            const tmp = el.substring(0, 1);
            return el.slice(1) + tmp
        }
    })

    return arr.join('');
}
