const {encodeChar} = require('./data_5_cg1');
let {valueArray, idxArray} = require('./data_5_cg1');
let encrypt = require('./encrypt_5_cg1');

let encryptCode;

function encode(input){
    
    let check = typeof input;

    if(check == 'number'){
        let str = input.toString();
        valueArray = [...str]; // copy one by one without an iterator.
        encryptCode = encrypt(str, 0, valueArray);

    }else if(check == 'string') {
        valueArray = [...input];
        idxArray = [...valueArray.map((element, i) => encodeChar[0].indexOf(element))];
        encryptCode = encrypt(input, 1, idxArray);

    }else { encryptCode = '* el valor ingresado no se puede cifrar *'; }

    return encryptCode;
}

module.exports = encode;