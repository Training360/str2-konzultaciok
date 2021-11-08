// Hagymányos függvény létrehozása (deklaráció).
function multiply(a, b) {
    return a * b;
}

// Hagyományos függvény mehívása (invokáció)
console.log( multiply(3, 6) );

// Hagyományos függvény kifejezés (expression)
const add = function(a, b) {
    return a + b;
};

// Hagyományos függvény kifejezést meghívása (invokáció)
console.log( add(3, 3) );

// function multiply(a, b) { return a * b; } átírása arrow function -re
const arrowMultiply = (a, b) => a * b;

// Tömb szűrése hagyományos függvénnyel
const names = ['Gergely', 'Evelin', 'József', 'Mária', 'János'];
const includesA = names.filter( function(name) {
    return name.includes('e');
});
console.log(includesA);

// Tömb szűrése arrow function -el
const includesAWithArrrow = names.filter( name => name.includes('e') );
console.log(includesAWithArrrow);

// Arrow function ami objektumot ad vissza
const getUserList = (items = 10) => {
    const firstNames = ['Sándor', 'Géza', 'Winnettou', 'Eszmeralda', 'Izaura'];
    const lastNames = ['Kiss', 'Nagy', 'Kovács', 'White', 'Black'];
    const mailProviders = ['gmail.com', 'hotmail.com', 'outlook.com'];
    const output = [];
    for (let i = 0; i < items; i++) {
        output.push({
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            email: 'mail' + mailProviders[
                Math.floor(Math.random() * mailProviders.length)
            ],
        });
    }
    return output;
};
console.log( getUserList() );

/*
Függvények típusai:
1. Hagyományos függvény: function name(param) {}
2. Hagyományos függvény kifejezés: const name = function v() {}
3. Arrow function kifejezés: const name = () => {}
4. Függvény mint paraméter: ...filter( function(e) {} )
5. Arrow function mint paraméter: ...filter( e => {} )
6. Metódus: Array.prototype.filter, meghívás: [].filter( ... )
7. Callback függvény: element.addEventListener('click', function() {})
8. IIFE Immediately Invoked Function Expression ( () => {...} )()
*/

// Legrövidebb valid függvény?
console.log([true, false, false, true].filter( b => b ));
