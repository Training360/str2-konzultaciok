// Reguláris kifejezés: mintaillesztés.

// Hagyományos példa:
const myName = 'Cserkó József';

// Kritériumok:
// 1. Két szóból áll
// 2. A két szó között van egy szóköz
// 3. Mind a két szó nagybetűvel kezdődik
const checkName = (name = '') => {
    const nameArray = name.split(' ');
    if (nameArray.length !== 2) {
        return false;
    }

    if (nameArray[0][0].charCodeAt(0) > 90 || nameArray[0][0].charCodeAt(0) < 65) {
        return false;
    }

    return true;
};

console.log( checkName(myName) );

// Ugyanez a névellenőrzés Reguláris kifejezés használatával:
const friendName = 'Szabó Zoltán';
const nameRegex = /^[A-Ű][a-ű]* [A-Ű][a-ű]*$/;
console.log(nameRegex.test(friendName));

// Alapvető Regex parancs karakterek:
// \ escape
// . bármilyen karakter lehet
// \d szám
// \w szó karakter
// \s szóköz
// \S nem szóköz
// ^ minta kezdése (első karakter előtti karakter)
// $ a string vége

// Csoportosítás
// [] csoport (a felsorolt karakterek bármelyike)
// [^] csoport tagadás (nem lehetnek a felsorolt karakterek)
// | vagy
// () csoport megszerzése (a zárójelek közötti részt később is fel lehet használni)

// Számlálók
// * 0 vagy bármennyi
// + egy vagy több
// ? 0 vagy 1
// {} pontosan ennyi {3} pontosan három karakter
// {min, max} a két érték között lehet, {1, 5} minimum 1, de maximum 5 karakter

// Telefonszám ellenőrzése:
// Elvárt formátum: +36-70-125-1254
const phoneNumberRegex = /^\+\d{2}-\d{2}-\d{3}-\d{4}$/;
console.log( phoneNumberRegex.test('+36-20-458-1254') );

// URL elleőrzése:
// Elvárt formátum: https://index.hu vagy http://valami.hu
const urlRegex = /^https?:\/\/www\.\w*\.\w{2,}$/gm;
console.log( urlRegex.test('https://tr360.com') );

const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
console.log( re.test('valaki@valami.hu') );

const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
console.log( passRegex.test('Helloka*44') );
