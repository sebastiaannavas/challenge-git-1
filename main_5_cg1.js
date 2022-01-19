// Encryption System

// const readLine = require("readline-sync");
const {log} = require('./data_5_cg1');
let encode = require('./encode_5_cg1');

let text = 'q#';
let section = '-';
let result = encode(text);

log(`
Your code is: ${text}
${section.repeat(58)}
Your new code is: ${result}
`);