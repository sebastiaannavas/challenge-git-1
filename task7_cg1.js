// -------------------
// MENU - MENU - MENU
// -------------------
// 1) burger
// -------------------
// 2) papas
// -------------------
// 3) gaseosa
// -------------------
// 4) helado
// -------------------
// 5) agua
// -------------------

const log = console.log;

const menu = ["burger", "papas", "gaseosa", "helado"];
menu.push('agua');
const section = '-';
let title = 'menu';

function showSection() {
    log(section.repeat(19));
}

function showTitle() {
    showSection();
    let text = `${title.toUpperCase()} ${section} `.repeat(2);
    log(`${text}${title.toUpperCase()}`);
    showSection();
}

cbMapMenu = (item, idx) => {
    log(`${idx + 1}) ${item}`);
    showSection();
}

showTitle();
menu.map(cbMapMenu);


// function can not use methods: showTitle().repeat(3);