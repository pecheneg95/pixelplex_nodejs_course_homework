import solution from "./solution"

const args = process.argv.slice(2);

if (args.length < 2) {
    console.error('Requires at least two argument!');
    process.exit(1);
}

const strArg = args.find((el) => (new RegExp(/str=/)).test(el));

if (!strArg) {
    console.error('Requires "str" argument!');
    process.exit(1);
}

const szArg = args.find((el) => (new RegExp(/sz=/)).test(el));

if (!szArg) {
    console.error('Requires "sz" argument!');
    process.exit(1);
}

const str = strArg.replace('str=', '');
const sz = Number(szArg.replace('sz=', ''));

console.log(solution(str, sz));
