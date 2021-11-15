// Promise: párhuzamos feladat végrehajtás.

// Feladatok végrehajtása egymás után:
const calcFibo = (count = 10) => {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    
    for (let i = 0; i < count; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    
    console.log(`Fibonacci calculation has been done: ${nextTerm}`);
}

// Példa egy Promise-ra:
const washingMachine = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve();
        reject('Leállt a mosógép 500-as hibával!');                
    }, 5000);
});

// washingMachine.then( 
//     () => console.log('A mosás kész'),
//     error => console.error(error),
// );

// console.log('Közben főzök');

// .catch metódus:
// const oven = new Promise( (resolve, reject) => {
//     const randomNumber = Math.round( Math.random() * 10 );
//     if (randomNumber % 2 === 0) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// then, catch, finally
// oven.then(
//     () => console.log('resolved'),
// ).catch(
//     () => console.error('rejected'),
// ).finally(
//     () => console.log('always run'),
// );

// Promise.all:
const makeOven = (name = 'cheese') => new Promise( (resolve, reject) => {
    const randomNumber = Math.round( Math.random() * 10 );
    if (randomNumber % 2 === 0) {
        resolve(name);
    } else {
        reject(`${name} cake failed`);
    }
});

Promise.all([makeOven('cheese'), makeOven('chocolate'), makeOven('caramel')]).then(
    cakes => console.log(`All cakes have been done! ${cakes}`),
).catch(
    error => console.error(`Some cakes failed! ${error}`),
).finally(
    console.log('All ovens switched off!'),
);

Promise.allSettled([makeOven('cheese'), makeOven('chocolate'), makeOven('caramel')]).then(
    cakes => console.log(cakes),
);

// Promise statuses: pending, fulfilled, rejected, settled (fulfilled|rejected)



// export {
//     calcFibo,
// }
