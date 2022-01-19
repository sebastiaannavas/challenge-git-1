const {encodeChar} = require('./data_5_cg1');
let {idx, codeArray} = require('./data_5_cg1');

function encrypt(value, array, char){
    
    let vLen = value.length; // can not be exported to use in iterations.

    for(; idx < vLen; idx++){
        codeArray[idx] = encodeChar[array][char[idx]];
    }

    code = codeArray.join('');
    return code; // if external to function = after call (), before = undefined.
}

module.exports = encrypt;