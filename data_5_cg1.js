const log = console.log;

const encodeChar = [
    ['*', '.', '?', '/', 'x', '!', '#', '&', '¡', 'q'],
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
];

let idx = 0, code;
let valueArray = [], idxArray = [], codeArray = [];

module.exports = {log,
    encodeChar,
    idx, code,
    valueArray, idxArray, codeArray
};