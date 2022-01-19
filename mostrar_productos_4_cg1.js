// [{
//     tv:"1000usd"
// },
// {
//   tablet:"500usd"
// },
// {
//   pc:"2000 usd"
// },
// {
//   desktop:"700 usd"
// }];

const {productos, pLen} = require('./productos_4_cg1');
const precios = require('./precios_4_cg1');
const log = console.log;

let mostrarProductos = [];

// List from external files
for(let idx = 0 ; idx < pLen ; idx++){
  log(`${productos[idx]}: ${precios[idx]}`);
}

// In Objects of an Array
for(let idx = 0 ; idx < pLen ; idx++){
  mostrarProductos[idx] = {};
  mostrarProductos[idx][productos[idx]] = precios[idx];
}
// log(mostrarProductos);