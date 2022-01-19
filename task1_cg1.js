const log = console.log;

// 1 'far'

const a = ["foo", "alfa", "ram"];
let aText;
let newA = [];
let aLen = a.length;

// Method 1
for(let idx = 0 ; idx < aLen ; idx++){
    newA[idx] = a[idx].charAt(0);
}
log(`${newA[0]}${newA[1]}${newA[2]}`);

// Method 2
for(let idx = 0 ; idx < aLen ; idx++){
    newA[idx] = a[idx].charAt(0);
}
aText = newA.join('');
// log(aText);

// Method 3
for(let idx = 0 ; idx < aLen ; idx++){
    newA[idx] = a[idx][0];
}
aText = newA.join('');
// log(aText);