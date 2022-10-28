/* eslint-disable no-console */
import solution from './solution';

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('Requires at least two argument!');
  process.exit(1);
}

const nArg = args.find((el) => (new RegExp(/n=/)).test(el));

if (!nArg) {
  console.error('Requires "n" argument!');
  process.exit(1);
}

const mxvalArg = args.find((el) => (new RegExp(/mxval=/)).test(el));

if (!mxvalArg) {
  console.error('Requires "mxval" argument!');
  process.exit(1);
}

const n = Number(nArg.replace('n=', ''));
const mxval = Number(mxvalArg.replace('mxval=', ''));

console.log(solution(n, mxval));
