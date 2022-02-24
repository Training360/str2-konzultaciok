import products from './products.js';

// Általános tábla megjelenítő függvény.
const makeTable = (list = products) => {
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');

    list.forEach( item => {
        const tr = document.createElement('tr');
        Object.values(item).forEach( val => {
            const td = document.createElement('td');
            td.textContent = val;
            td.classList.add('product-cell');
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.querySelectorAll('thead tr th').forEach( item => {
        item.style.fontStyle = 'italic';
        item.style.color = 'navy';
     } );
};

const expensiveProducts = products.filter( product => product.price > 25 );

const orderedProducts = products.sort( (a, b) => {
    return (a.price - b.price) * -1;
});

// 1. Add vat, bprice
// 2. Filter by vat
// 3. Sort by bprice
const taxRate = 0.27;
const db = products.map( product => {
        product.vat = product.price * taxRate;
        product.bprice = product.price + product.vat;
        return product;
    })
    .filter( product => product.vat > 5 )
    .sort( (a, b) => a.bprice - b.bprice );

console.log(db);
console.log(products);

makeTable(db);

