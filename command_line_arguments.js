const args = process.argv.slice(2);
const sum = args.reduce((acc, num) => acc += Number(num), 0);
console.log(sum);
