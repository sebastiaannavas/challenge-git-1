const log = console.log;

// 2 Hola - mundo, desde vscode.

const b = ["hola", "mundo", "desde", "vscode"];
const char = [' - ', ', ', ' ', '. ']
let bText;
let newB = [];
let bLen = b.length;

// Method 1
// log(`${b[0]} - ${b[1]}, ${b[2]} ${b[3]}.`);

// Method 2
for(let idx = 0 ; idx < bLen ; idx++){
    //log(`${b[idx]}${char[idx]}`);
    newB[idx] = b[idx] + char[idx];
}
bText = newB.join('');
// log(bText);

// Method 3
let bResult = '';
let cLen = char.length; // not b.length

for(let idx = 0 ; idx < cLen ; idx++){
    bResult += `${b[idx]}${char[idx]}`;
}
// log(bResult);
// assignment does not work to replace chars of strings
// has to be an Array first
// .split() divides and stores in new Array.

// Method 4
let bResult2;
bResult2 = b.map((str, idx) => `${str}${char[idx]}`);
log(bResult2.join(''));

// str without [idx] because .map() already refers to it
// += not required because .map() already returns a new Array converted to String with .join()
// assign a value to bResult2 is not required because it inmediately receives the Array
// if '' is assigned to bResult2, it converts the returned Array to String between ,