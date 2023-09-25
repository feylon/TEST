

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = 0;

readline.question('',(value)=>{
value = (value ** 2).toString().split('');

array = value.map( i => {return parseFloat(i)});

console.log(array);
})