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

export {
    collectUsers
};
