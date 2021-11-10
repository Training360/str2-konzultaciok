// Függvény kifejezés (function expression)
const log = (locale = 'hu-HU', currencyLocale = 'HUF') => {
    const currentDate = new Date();
    const now = new Intl.DateTimeFormat(locale).format(currentDate);
    const amount = 4533;
    const localizedAmount = new Intl
        .NumberFormat(locale, {style: 'currency', currency: currencyLocale})
        .format(amount);
    return `Jelenlegi időpont: ${now}, összeg: ${localizedAmount}`;
};

const traditionalLog = (locale = 'hu-HU') => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    return `${year}. ${month}. ${day}.`;
};

console.log(log());
console.log(traditionalLog('en-GB'));

// ZH gyakorlás:
// Készíts egy függvényt greetMarcsi néven.
// A függvény a következő string-et adja vissza: `Hello Marcsi!`
const greetMarcsi = () => {
    console.log('Hello Marcsi!');
};

// Függvény neve: collectUsers
// Export: exportáld ki a collectUsers függvényt
// A collectUsers függvény objektumok tömbjét kapja, minden objektumban van egy 
// users tulajdonság, ami number típusú.
// Adja vissza a függvény az objektumokban tárolt users-számok összegét.
const collectUsers = (list = [{users: 1}]) => {
    // accumulator
    let sumOfUsers = 0;

    // iterate over the array items
    for (let i = 0; i < list.length; i++) {
        sumOfUsers += list[i].users;
    }

    // return the number of users
    return sumOfUsers;
};
// console.log( collectUsers([{users: 4}, {users: 5}, {users: 1}]) );

// Feladat: írj egy függvényt, ami visszatér a `Szia, Pali vagyok!` string-el!
const stringProvider = () => {
    return 'Szia, Pali vagyok!';
};

// Fájl: app2.js fájlban dolgozz.
// Függvény neve: calcAmount
// Export: legyen benne a calcAmount függvény
// _Adja vissza a kapott szám háromszorosát, osztva 5.5-el és kerekítve_.
const calcAmount = (number = 0) => Math.round(number * 3 / 5.5);

// Fájl: app3.js fájlban dolgozz.
// Függvény neve: sumPoints
// Export: legyen benne a sumPoints függvény
// - A függvény objektumok tömbjét kapja.
// - Minden objektumban van egy point nevű tulajdonság, ami number típusú.

// - A függvény adja vissza a point-ok összegét.
const sumPoints = (list = [{point: 5}, {point: 3}]) => {
    // 1. Akkumulátor:
    let allOfPoints = 0;

    // 2. Bejárom a tömböt és hozzáadom a allOfPoints változóhoz a tömbelem price 
    // tulajdonságának az értékét:
    list.forEach( item => {
        console.log(item);
        allOfPoints += item.point;
     } );

    // Visszaadom az akkumulált (összegyűjtött) értéket:
    return allOfPoints;
};

const players = [
    {
        name: 'Marika néni',
        point: 121,
    },
    {
        name: 'Vérpistike',
        point: 9,
    },
    {
        name: 'Gyúrós Pityu',
        point: 120,
    },
];

console.log(sumPoints(players));


export {
    sumPoints,
};
