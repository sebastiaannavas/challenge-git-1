// "cabeza"
// "cuerpo"
// "pies"

const log = console.log;

const c = [
    {pies:"pies"},
    [["cabeza"]],
    function(){
        return "cuerpo"
    }
];
let idx = 0;
let cLen = c.length;
let newC = [];

// log(c[0].pies);
// log(c[1][0][0]);
// log(c[2]());

for(; idx < cLen; idx++){
    let check = typeof c[idx];
    switch(check){
        case 'object':
            let objectValue = Object.values(c[idx]);
            if(objectValue[idx] != undefined) { 
                newC[idx] = objectValue[idx];
            } else{
                newC[idx] = objectValue[idx-1][idx-1];
            }
            break;
        case 'function':
            newC[idx] = c[idx]();
            break;
        default:
            log('* el tipo de dato no se puede mostrar *');
    }
}
let convertC = newC.slice(1);
convertC.push(newC[0]);
let resultC = convertC.join('\n');
log(resultC);


// inverse FOR = (idx = cLen, idx >= 0; idx--).