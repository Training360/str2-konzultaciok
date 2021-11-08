// Értékadás.
// A var kulcszsóval létrehozott változók function scope -úak, azaz csak abban a
// függvényben elérhetőek, ahol létrehoztuk őket.
// Ha a változót a kód gyökerében hoztuk létre (lásd alább), akkor az összes 
// függvényben és a kód bármely részén látható lesz.
var baseName = 'Szarka' + ' ' + 'Evelin';

// Függvény definiálása.
function showName() {
    // A name2 változó, csak ebben a függvényben látható, mert itt hoztuk létre.
    var name2 = 'Marcsi';
    console.log(baseName);
}

function appendGraduate() {
    console.log('Dr. ' + baseName);
}

// Fügvény meghívása (invokáció).
showName();
appendGraduate();

// console.log(name2);

// let kulcsszó a változók létrehozására
// A let kulcsszóval létrehozott változók csak abban a blokkban {} láthatóak, 
// ahol létrehozták őket, vagy ha a kód gyökerében, akkor az egész kódban.
let age = 25;

for (let i = 0; i < 10; i++) {
    let email = 'evelin@gmail.com';
    console.log(name);
    console.log(age);
}

// a let kulcsszóval létrehozott email változó csak a for cikluson belül látható
// console.log(email);

// const kulcsszó a változók létrehozására
// A const kulcsszóval létrehozott változók block scope -úak a let -hez 
// hasonlóan, de az értéküket később nem lehet megváltoztatni.
const address = 'Bp. XXII. Élmunkás u. 44.';

if (address.includes('Bp')) {
    // Ez a sor hibát erdeményez, mert a const változót nem lehet módosítani.
    // address = 'Kecskemét';
    console.log(address);
} else {
    console.log('Az address nem tartalmazza a Bp kifejezést!');
}
