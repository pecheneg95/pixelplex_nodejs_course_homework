/* eslint-disable no-console */
import solution from './solution';

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error('Requires argument!');
  process.exit(1);
}

const inputArg = args.find((el) => (new RegExp(/input=/)).test(el));

if (!inputArg) {
  console.error('Requires "input" argument!');
  process.exit(1);
}

const input = inputArg.replace('input=', '').replace('[', '').replace(']', '').split(',');

console.log(solution(input));
