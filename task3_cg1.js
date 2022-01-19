const log = console.log;

// 1 - nombre: foo
// 2 - nombre: bar
// 3 - nombre: qux
// 4 - nombre: ram

const nombres = [
    {nombre:"foo"},
    {nombre:"bar"},
    {nombre:"qux"},
    {nombre:"ram"}
];
let claves = [];
let nombresLen = nombres.length; 
let idx = 0;

// Method 1
function method1() {
    while(idx < nombresLen) {
        let clavesNombres = Object.keys(nombres[idx]);
        claves[idx] = clavesNombres;
        log(`${idx + 1} - ${claves[idx]}: ${nombres[idx].nombre}`);
        idx++;
    }
}
method1();

// Method 2
function method2() {
    for(; idx < nombresLen ; idx++){
        let clavesNombres = Object.keys(nombres[idx]);
        claves[idx] = clavesNombres;
        log(`${idx + 1} - ${claves[idx]}: ${nombres[idx].nombre}`);
    }
}
// method2();

// Method 3
let valores = [];
cbMapB = (clave, idx) => {
    clave = Object.keys(nombres[idx]);
    claves[idx] = clave;
    valores[idx] = nombres[idx].nombre;
    log(`${idx + 1} - ${claves[idx]}: ${valores[idx]}`);
}
// nombres.map(cbMapB);